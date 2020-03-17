<?php
/**
 * Class WP_Test_Jetpack_VideoPress_Utility_Functions
 *
 * Note that modules/videopress/utility-functions.php is automatically loaded and does not need to be required in this file.
 *
 * @package Jetpack
 */

/**
 * Tests Jetpack_VideoPress_Utility_Functions
 */
class WP_Test_Jetpack_VideoPress_Utility_Functions extends WP_UnitTestCase {

	/**
	 * Tear down the tests.
	 *
	 * @inheritDoc
	 */
	public function tearDown() {
		global $_wp_using_ext_object_cache;

		$_wp_using_ext_object_cache = false;
		parent::tearDown();
	}

	/**
	 * Tests a helper function to get the post by guid, when there is no post found.
	 *
	 * @covers ::video_get_post_by_guid
	 * @since 8.4.0
	 */
	public function test_no_post_found_video_get_post_by_guid() {
		$this->assertFalse( video_get_post_by_guid( wp_generate_uuid4() ) );
	}

	/**
	 * Gets the test data for test_cached_video_get_post_by_guid().
	 *
	 * @return array The test data.
	 */
	public function get_data_test_video_non_cached() {
		return array(
			'external_object_cache_is_enabled'     => array(
				true,
				'wp_cache_get',
				true,
				'videopress',
			),
			'external_object_cache_is_not_enabled' => array(
				false,
				'get_transient',
				false,
			),
		);
	}

	/**
	 * Tests a helper function to get the post by guid, when there's initially no cached value.
	 *
	 * @dataProvider get_data_test_video_non_cached
	 * @covers ::video_get_post_by_guid
	 * @since 8.4.0
	 *
	 * @param bool        $is_external_object_cache_enabled Whether external object cache is enabled.
	 * @param callable    $callback The callback to get the caching.
	 * @param bool        $should_cache_object Whether the entire WP_Post should be cached, or simply the post ID.
	 * @param string|null $cache_group The cache group, if any.
	 */
	public function test_non_cached_video_get_post_by_guid( $is_external_object_cache_enabled, $callback, $should_cache_object, $cache_group = null ) {
		global $_wp_using_ext_object_cache;

		$_wp_using_ext_object_cache = $is_external_object_cache_enabled;
		$guid                       = wp_generate_uuid4();
		$expected_id                = videopress_create_new_media_item( 'Example', $guid );
		$expected_post              = get_post( $expected_id );
		$actual_post                = video_get_post_by_guid( $guid );

		$this->assertEquals( $expected_post, $actual_post );

		$caching_args = array( 'video_get_post_by_guid_' . $guid );
		if ( $cache_group ) {
			$caching_args[] = $cache_group;
		}
		$expected_cached = $should_cache_object ? $expected_post : $expected_id;

		// The function should have cached the value.
		$this->assertEquals(
			$expected_cached,
			call_user_func_array( $callback, $caching_args )
		);
	}

	/**
	 * Gets the test data for test_cached_video_get_post_by_guid().
	 *
	 * @return array The test data.
	 */
	public function get_data_test_video_cached() {
		return array(
			'external_object_cache_is_enabled'     => array(
				true,
				'wp_cache_set',
				true,
				'videopress',
			),
			'external_object_cache_is_not_enabled' => array(
				false,
				'set_transient',
				false,
			),
		);
	}

	/**
	 * Tests a helper function to get the post by guid, when there is a cached value.
	 *
	 * As long as there is a non-expired cache value,
	 * this should return that instead of instantiating WP_Query.
	 *
	 * @dataProvider get_data_test_video_cached
	 * @covers ::video_get_post_by_guid
	 * @since 8.4.0
	 *
	 * @param bool        $is_external_object_cache_enabled Whether external object cache is enabled.
	 * @param callable    $callback The callback to set the caching.
	 * @param bool        $should_cache_object Whether the entire WP_Post should be cached, or simply the post ID.
	 * @param string|null $cache_group The cache group, if any.
	 */
	public function test_cached_video_get_post_by_guid( $is_external_object_cache_enabled, $callback, $should_cache_object, $cache_group = null ) {
		global $_wp_using_ext_object_cache;

		$_wp_using_ext_object_cache = $is_external_object_cache_enabled;
		$guid                       = wp_generate_uuid4();
		$attachment_id              = videopress_create_new_media_item( 'Example Title', $guid );
		$attachment_post            = get_post( $attachment_id );
		$post_to_cache              = $should_cache_object ? $attachment_post : $attachment_id;
		$caching_args               = array( 'video_get_post_by_guid_' . $guid, $post_to_cache );

		if ( $cache_group ) {
			$caching_args[] = $cache_group;
		}

		call_user_func_array( $callback, $caching_args );

		// This should always return the WP_Post, even though the post ID is stored in the transient.
		$this->assertEquals(
			$attachment_post,
			video_get_post_by_guid( $guid )
		);
	}

	/**
	 * Gets the test data for test_cached_invalid_video_get_post_by_guid().
	 *
	 * @return array The test data.
	 */
	public function get_data_cached_invalid() {
		return array(
			'non_post_object'           => array( new stdClass() ),
			'int_but_not_valid_post_id' => array( PHP_INT_MAX ),
			'null'                      => array( null ),
			'zero'                      => array( 0 ),
		);
	}

	/**
	 * Tests invalid cached values that should be ignored.
	 *
	 * Unless the cached value is a WP_Post or a post ID to a WP_Post,
	 * the tested method should ignore it and query for the post.
	 *
	 * @dataProvider get_data_cached_invalid
	 * @covers ::video_get_post_by_guid
	 * @since 8.4.0
	 *
	 * @param mixed $invalid_cached_value A cached value that should be ignored.
	 */
	public function test_cached_invalid_video_get_post_by_guid( $invalid_cached_value ) {
		global $_wp_using_ext_object_cache;

		$_wp_using_ext_object_cache = true;
		$guid                       = wp_generate_uuid4();
		$attachment_id              = videopress_create_new_media_item( 'Example Title', $guid );

		wp_cache_set( 'video_get_post_by_guid_' . $guid, $invalid_cached_value, 'videopress' );

		$this->assertEquals(
			get_post( $attachment_id ),
			video_get_post_by_guid( $guid )
		);
	}

	/**
	 * Tests the VideoPress Flash to oEmbedable URL filter.
	 *
	 * @author kraftbj
	 * @covers ::jetpack_videopress_flash_embed_filter
	 * @since 8.1.0
	 */
	public function test_jetpack_videopress_flash_embed_filter_flash() {
		$content  = '<p><embed src="http://v.wordpress.com/YtfS78jH" type="application/x-shockwave-flash" width="600" height="338"></embed></p>';
		$contains = 'https://videopress.com/v/YtfS78jH';

		$filtered = jetpack_videopress_flash_embed_filter( $content );

		$this->assertContains( $contains, $filtered );
	}

}
