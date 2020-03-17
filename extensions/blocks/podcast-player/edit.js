/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
import { useState, useCallback } from '@wordpress/element';
import {
	Button,
	Disabled,
	ExternalLink,
	PanelBody,
	Placeholder,
	RangeControl,
	TextControl,
	Toolbar,
	withNotices,
	ToggleControl,
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import {
	BlockControls,
	BlockIcon,
	ContrastChecker,
	InspectorControls,
	PanelColorSettings,
	withColors,
	__experimentalUseColors as useColors,
} from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import { isURL } from '@wordpress/url';
import { getBlockDefaultClassName } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { namespaceName } from './index';
import { getValidatedAttributes } from '../../shared/get-validated-attributes';
import './editor.scss';
import { edit, queueMusic } from './icons/';
import { isAtomicSite, isSimpleSite } from '../../shared/site-type-utils';
import attributesValidation from './attributes';
import { applyFallbackStyles } from '../../shared/apply-fallback-styles';
import classnames from 'classnames';

// Check if useColors is available.
const isUseColorsAvailable = !! useColors;

const DEFAULT_MIN_ITEMS = 1;
const DEFAULT_MAX_ITEMS = 10;

const handleSSRError = () => {
	return <p>{ __( 'Failed to load Block', 'jetpack' ) }</p>;
};

// Support page link.
const supportUrl =
	isSimpleSite() || isAtomicSite()
		? 'http://en.support.wordpress.com/wordpress-editor/blocks/podcast-player-block/'
		: 'https://jetpack.com/support/jetpack-blocks/podcast-player-block/';

const PodcastPlayerEdit = ( {
	attributes,
	setAttributes,
	name,

	noticeOperations: { createErrorNotice, removeAllNotices },
	noticeUI,

	textColor,
	setTextColor,
	fallbackTextColor,
	backgroundColor,
	setBackgroundColor,
	fallbackBackgroundColor,
} ) => {
	const defaultClassName = getBlockDefaultClassName( name );

	// Validated attributes.
	const { url, itemsToShow, showCoverArt, showEpisodeDescription } = getValidatedAttributes(
		attributesValidation,
		attributes
	);

	// State.
	const [ editedUrl, setEditedUrl ] = useState( url || '' );
	const [ isEditing, setIsEditing ] = useState( false );

	/**
	 * Check if the current URL of the Podcast RSS feed
	 * is valid. If so, set the block attribute and changes
	 * the edition mode.
	 * This function is bound to the onSubmit event for the form.
	 *
	 * @param {object} event Form on submit event object.
	 */
	const checkPodcastLink = useCallback( event => {
		event.preventDefault();
		removeAllNotices();

		if ( ! editedUrl ) {
			return;
		}

		const isValidURL = isURL( editedUrl );
		if ( ! isValidURL ) {
			createErrorNotice(
				! isValidURL
					? __( "Your podcast couldn't be embedded. Please double check your URL.", 'jetpack' )
					: ''
			);
			return;
		}

		setAttributes( { url: editedUrl } );
		setIsEditing( false );
	} );

	if ( isEditing || ! url ) {
		return (
			<Placeholder
				icon={ <BlockIcon icon={ queueMusic } /> }
				label={ __( 'Podcast Player', 'jetpack' ) }
				instructions={ __( 'Enter your podcast RSS feed URL.', 'jetpack' ) }
			>
				<form onSubmit={ checkPodcastLink }>
					{ noticeUI }
					<TextControl
						type="url"
						placeholder={ __( 'Enter URL here…', 'jetpack' ) }
						value={ editedUrl || '' }
						className={ 'components-placeholder__input' }
						onChange={ setEditedUrl }
					/>
					<Button isPrimary type="submit">
						{ __( 'Embed', 'jetpack' ) }
					</Button>
				</form>
				<div className="components-placeholder__learn-more">
					<ExternalLink href={ supportUrl }>
						{ __( 'Learn more about embeds', 'jetpack' ) }
					</ExternalLink>
				</div>
			</Placeholder>
		);
	}

	const toolbarControls = [
		{
			icon: edit,
			title: __( 'Edit Podcast Feed URL', 'jetpack' ),
			onClick: () => setIsEditing( true ),
		},
	];

	// Colors: CSS classes and inline styles.
	const cssClasses = classnames( defaultClassName, {
		'has-text-color': textColor.class || textColor.color,
		[ textColor.class ? textColor.class : null ]: !! textColor.class,
		'has-background': backgroundColor.class || backgroundColor.color,
		[ backgroundColor.class ? backgroundColor.class : null ]: !! backgroundColor.class,
	} );

	const inlineStyles = {
		backgroundColor: backgroundColor.color ? backgroundColor.color : undefined,
		color: textColor.color ? textColor.color : undefined,
	};

	return (
		<>
			<BlockControls>
				<Toolbar controls={ toolbarControls } />
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Podcast settings', 'jetpack' ) }>
					<RangeControl
						label={ __( 'Number of items', 'jetpack' ) }
						value={ itemsToShow }
						onChange={ value => setAttributes( { itemsToShow: value } ) }
						min={ DEFAULT_MIN_ITEMS }
						max={ DEFAULT_MAX_ITEMS }
						required
					/>

					<ToggleControl
						label={ __( 'Show Cover Art', 'jetpack' ) }
						checked={ showCoverArt }
						onChange={ value => setAttributes( { showCoverArt: value } ) }
					/>

					<ToggleControl
						label={ __( 'Show Episode Description', 'jetpack' ) }
						checked={ showEpisodeDescription }
						onChange={ value => setAttributes( { showEpisodeDescription: value } ) }
					/>
				</PanelBody>

				{ ! isUseColorsAvailable && (
					<PanelColorSettings
						title={ __( 'Color Settings', 'jetpack' ) }
						colorSettings={ [
							{
								value: textColor.color,
								onChange: setTextColor,
								label: __( 'Text Color', 'jetpack' ),
							},
							{
								value: backgroundColor.color,
								onChange: setBackgroundColor,
								label: __( 'Background', 'jetpack' ),
							},
						] }
					>
						<ContrastChecker
							{ ...{
								// Text is considered large if font size is greater or equal to 18pt or 24px,
								// currently that's not the case for button.
								isLargeText: false,
								textColor: textColor.color,
								backgroundColor: backgroundColor.color,
								fallbackBackgroundColor,
								fallbackTextColor,
							} }
						/>
					</PanelColorSettings>
				) }
			</InspectorControls>
			<div style={ inlineStyles } className={ cssClasses }>
				<Disabled>
					<ServerSideRender
						block={ namespaceName }
						attributes={ { url, itemsToShow } }
						EmptyResponsePlaceholder={ handleSSRError }
						ErrorResponsePlaceholder={ handleSSRError }
					/>
				</Disabled>
			</div>
		</>
	);
};

export default ! isUseColorsAvailable
	? compose( [
			withColors( 'backgroundColor', { textColor: 'color' } ),
			withNotices,
			applyFallbackStyles,
	  ] )( PodcastPlayerEdit )
	: withNotices( PodcastPlayerEdit );
