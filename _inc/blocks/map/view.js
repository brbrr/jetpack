!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){function t(t){for(var n,o,a=t[0],i=t[1],l=0,c=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&c.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);c.length;)c.shift()()}var n={},o={10:0},r={10:0};function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{19:1}[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="rtl"===document.dir?({19:"vendors~map/mapbox-gl"}[e]||e)+"."+{19:"d12a12b742503b21cf1e"}[e]+".rtl.css":({19:"vendors~map/mapbox-gl"}[e]||e)+"."+{19:"d12a12b742503b21cf1e"}[e]+".css",i=a.p+r,l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var s=(p=l[c]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(s===r||s===i))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){var p;if((s=(p=u[c]).getAttribute("data-href"))===r||s===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.setAttribute("data-webpack",!0),f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),n(a)},f.href=i,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){o[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(e){return a.p+""+({19:"vendors~map/mapbox-gl"}[e]||e)+"."+{19:"d12a12b742503b21cf1e"}[e]+".js"}(e);var s=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[e]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=l;return a(a.s=305)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t,n){var o=n(133);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},11:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},128:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},129:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},130:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},132:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=o=function(e){return n(e)}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},o(t)}e.exports=o},133:function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},137:function(e,t,n){},138:function(e,t,n){},16:function(e,t,n){var o=n(3);function r(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},18:function(e,t,n){var o=n(70),r=n(71),a=n(72);e.exports=function(e,t){return o(e)||r(e,t)||a()}},2:function(e,t){!function(){e.exports=this.wp.components}()},22:function(e,t,n){var o=n(128),r=n(129),a=n(130);e.exports=function(e){return o(e)||r(e)||a()}},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(0),r=n(1),a={name:"map",prefix:"jetpack",title:Object(r.__)("Map","jetpack"),icon:Object(o.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",role:"img","aria-hidden":"true",focusable:"false"},Object(o.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(o.createElement)("path",{d:"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"})),category:"jetpack",keywords:[Object(r._x)("maps","block search term","jetpack"),Object(r._x)("location","block search term","jetpack"),Object(r._x)("navigation","block search term","jetpack")],description:Object(r.__)("Add an interactive map showing one or more locations.","jetpack"),attributes:{align:{type:"string"},points:{type:"array",default:[]},mapStyle:{type:"string",default:"default"},mapDetails:{type:"boolean",default:!0},zoom:{type:"integer",default:13},mapCenter:{type:"object",default:{longitude:-122.41941550000001,latitude:37.7749295}},markerColor:{type:"string",default:"red"},preview:{type:"boolean",default:!1},scrollToZoom:{type:"boolean",default:!1},mapHeight:{type:"integer"},showFullscreenButton:{type:"boolean",default:!0}},supports:{html:!1},mapStyleOptions:[{value:"default",label:Object(r.__)("Basic","jetpack")},{value:"black_and_white",label:Object(r.__)("Black and white","jetpack")},{value:"satellite",label:Object(r.__)("Satellite","jetpack")},{value:"terrain",label:Object(r.__)("Terrain","jetpack")}],validAlignments:["center","wide","full"],markerIcon:Object(o.createElement)("svg",{width:"14",height:"20",viewBox:"0 0 14 20",xmlns:"http://www.w3.org/2000/svg"},Object(o.createElement)("g",{id:"Page-1",fill:"none",fillRule:"evenodd"},Object(o.createElement)("g",{id:"outline-add_location-24px",transform:"translate(-5 -2)"},Object(o.createElement)("polygon",{id:"Shape",points:"0 0 24 0 24 24 0 24"}),Object(o.createElement)("path",{d:"M12,2 C8.14,2 5,5.14 5,9 C5,14.25 12,22 12,22 C12,22 19,14.25 19,9 C19,5.14 15.86,2 12,2 Z M7,9 C7,6.24 9.24,4 12,4 C14.76,4 17,6.24 17,9 C17,11.88 14.12,16.19 12,18.88 C9.92,16.21 7,11.85 7,9 Z M13,6 L11,6 L11,8 L9,8 L9,10 L11,10 L11,12 L13,12 L13,10 L15,10 L15,8 L13,8 L13,6 Z",id:"Shape",fill:"#000",fillRule:"nonzero"})))),example:{attributes:{preview:!0}}}},3:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},305:function(e,t,n){n(40),e.exports=n(328)},328:function(e,t,n){"use strict";n.r(t);var o=n(16),r=n.n(o),a=(n(138),n(80)),i=n(26),l=n(22),c=n.n(l),s=n(7),u=n.n(s),p=n(11),f=n.n(p),d=n(5),m=n(0),b=function(){function e(){u()(this,e)}return f()(e,[{key:"blockIterator",value:function(e,t){var n=this;t.forEach((function(t){n.initializeFrontendReactBlocks(t.component,t.options,e)}))}},{key:"initializeFrontendReactBlocks",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=t.settings,r=o.attributes,a=o.name,i=o.prefix,l=t.selector,c=i&&i.length?"".concat(i,"/").concat(a):a,s=".wp-block-".concat(c.replace("/","-")),u=n.querySelectorAll(s),p=!0,f=!1,b=void 0;try{for(var h,v=u[Symbol.iterator]();!(p=(h=v.next()).done);p=!0){var y=h.value,g=this.extractAttributesFromContainer(y,r);Object(d.assign)(g,t.props);var k=this.extractChildrenFromContainer(y),w=Object(m.createElement)(e,g,k);Object(m.render)(w,l?y.querySelector(l):y)}}catch(j){f=!0,b=j}finally{try{p||null==v.return||v.return()}finally{if(f)throw b}}}},{key:"extractAttributesFromContainer",value:function(e,t){var n={};for(var o in t){var r=t[o],a="data-"+Object(d.kebabCase)(o);if(n[o]=e.getAttribute(a),"boolean"===r.type&&(n[o]="false"!==n[o]&&!!n[o]),"array"===r.type||"object"===r.type)try{n[o]=JSON.parse(n[o])}catch(i){n[o]=null}}return n}},{key:"extractChildrenFromContainer",value:function(e){return c()(e.childNodes).map((function(e){for(var t={},n=0;n<e.attributes.length;n++){var o=e.attributes[n];t[o.nodeName]=o.nodeValue}return t.dangerouslySetInnerHTML={__html:e.innerHTML},Object(m.createElement)(e.tagName.toLowerCase(),t)}))}}]),e}();"undefined"!=typeof window&&window.addEventListener("load",(function(){(new b).blockIterator(document,[{component:a.a,options:{settings:r()({},i.a,{attributes:r()({},i.a.attributes,{apiKey:{type:"string",default:""}})})}}])}))},33:function(e,t,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(n.p=window.Jetpack_Block_Assets_Base_Url)},4:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},40:function(e,t,n){"use strict";n.r(t);n(33)},5:function(e,t){!function(){e.exports=this.lodash}()},7:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},70:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},71:function(e,t){e.exports=function(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(c){r=!0,a=c}finally{try{o||null==l.return||l.return()}finally{if(r)throw a}}return n}},72:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},8:function(e,t,n){var o=n(132),r=n(4);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},80:function(e,t,n){"use strict";var o=n(18),r=n.n(o),a=n(7),i=n.n(a),l=n(11),c=n.n(l),s=n(8),u=n.n(s),p=n(9),f=n.n(p),d=n(4),m=n.n(d),b=n(10),h=n.n(b),v=n(3),y=n.n(v),g=n(0),k=n(1),w=n(5),j=n(2),x=(n(137),function(e){function t(){var e,n;i()(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return n=u()(this,(e=f()(t)).call.apply(e,[this].concat(r))),y()(m()(n),"handleClick",(function(){(0,n.props.onClick)(m()(n))})),y()(m()(n),"getPoint",(function(){var e=n.props.point;return[e.coordinates.longitude,e.coordinates.latitude]})),n}return h()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.renderMarker()}},{key:"componentWillUnmount",value:function(){this.marker&&this.marker.remove()}},{key:"componentDidUpdate",value:function(){this.renderMarker()}},{key:"renderMarker",value:function(){var e=this.props,t=e.map,n=e.point,o=e.mapboxgl,r=e.markerColor,a=this.handleClick,i=[n.coordinates.longitude,n.coordinates.latitude],l=this.marker?this.marker.getElement():document.createElement("div");this.marker?this.marker.setLngLat(i):(l.className="wp-block-jetpack-map-marker",this.marker=new o.Marker(l).setLngLat(i).setOffset([0,-19]).addTo(t),this.marker.getElement().addEventListener("click",a)),l.innerHTML='<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" viewBox="0 0 32 38" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill-rule="evenodd"><path id="d" d="m16 38s16-11.308 16-22-7.1634-16-16-16-16 5.3076-16 16 16 22 16 22z" fill="'+r+'" mask="url(#c)"/></g></svg>'}},{key:"render",value:function(){return null}}]),t}(g.Component));x.defaultProps={point:{},map:null,markerColor:"#000000",mapboxgl:null,onClick:function(){}};var O=x,M=function(e){function t(){var e,n;i()(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return n=u()(this,(e=f()(t)).call.apply(e,[this].concat(r))),y()(m()(n),"closeClick",(function(){n.props.unsetActiveMarker()})),n}return h()(t,e),c()(t,[{key:"componentDidMount",value:function(){var e=this.props.mapboxgl;this.el=document.createElement("DIV"),this.infowindow=new e.Popup({closeButton:!0,closeOnClick:!1,offset:{left:[0,0],top:[0,5],right:[0,0],bottom:[0,-40]}}),this.infowindow.setDOMContent(this.el),this.infowindow.on("close",this.closeClick)}},{key:"componentDidUpdate",value:function(e){this.props.activeMarker!==e.activeMarker&&(this.props.activeMarker?this.openWindow():this.closeWindow())}},{key:"render",value:function(){return this.el?Object(g.createPortal)(this.props.children,this.el):null}},{key:"openWindow",value:function(){var e=this.props,t=e.map,n=e.activeMarker;this.infowindow.setLngLat(n.getPoint()).addTo(t)}},{key:"closeWindow",value:function(){this.infowindow.remove()}}]),t}(g.Component);M.defaultProps={unsetActiveMarker:function(){},activeMarker:null,map:null,mapboxgl:null};var C=M;var _=function(e){function t(){var e;return i()(this,t),e=u()(this,f()(t).apply(this,arguments)),y()(m()(e),"onMarkerClick",(function(t){var n=e.props.onMarkerClick;e.setState({activeMarker:t}),n()})),y()(m()(e),"onMapClick",(function(){e.setState({activeMarker:null})})),y()(m()(e),"clearCurrentMarker",(function(){e.setState({activeMarker:null})})),y()(m()(e),"updateActiveMarker",(function(t){var n=e.props.points,o=e.state.activeMarker.props.index,r=n.slice(0);Object(w.assign)(r[o],t),e.props.onSetPoints(r)})),y()(m()(e),"deleteActiveMarker",(function(){var t=e.props.points,n=e.state.activeMarker.props.index,o=t.slice(0);o.splice(n,1),e.props.onSetPoints(o),e.setState({activeMarker:null})})),y()(m()(e),"sizeMap",(function(){var t=e.props.mapHeight,n=e.state.map,o=e.mapRef.current;if(t)o.style.height=t+"px";else{var r=o.offsetWidth,a=window.location.search.indexOf("map-block-counter")>-1?window.innerHeight:.8*window.innerHeight,i=Math.min(.75*r,a);o.style.height=i+"px"}n.resize(),e.setBoundsByMarkers()})),y()(m()(e),"updateZoom",(function(){var t=e.props.zoom,n=e.state.map;n.setZoom(t),n.updateZoom(t)})),y()(m()(e),"setBoundsByMarkers",(function(){var t=e.props,n=t.admin,o=t.onSetMapCenter,r=t.onSetZoom,a=t.points,i=t.zoom,l=e.state,c=l.map,s=l.activeMarker,u=l.mapboxgl,p=l.zoomControl,f=l.boundsSetProgrammatically;if(c&&(a.length&&n?c.dragPan.disable():c.dragPan.enable(),a.length&&!s)){var d=new u.LngLatBounds;if(a.forEach((function(e){d.extend([e.coordinates.longitude,e.coordinates.latitude])})),o(d.getCenter()),a.length>1){c.fitBounds(d,{padding:{top:40,bottom:40,left:20,right:20}}),e.setState({boundsSetProgrammatically:!0});try{c.removeControl(p)}catch(m){}}else{if(c.setCenter(d.getCenter()),f){c.setZoom(12),r(12)}else c.setZoom(parseInt(i,10));c.addControl(p),e.setState({boundsSetProgrammatically:!1})}}})),y()(m()(e),"scriptsLoaded",(function(){var t=e.props,n=t.mapCenter,o=t.points;e.setState({loaded:!0}),o.length,e.initMap(n)})),y()(m()(e),"googlePoint2Mapbox",(function(e){return e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")?e:{lat:e.latitude||0,lng:e.longitude||0}})),e.state={map:null,fit_to_bounds:!1,loaded:!1,mapboxgl:null},e.mapRef=Object(g.createRef)(),e.debouncedSizeMap=Object(w.debounce)(e.sizeMap,250),e}return h()(t,e),c()(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.points,o=t.admin,r=t.children,a=t.markerColor,i=this.state,l=i.map,c=i.activeMarker,s=i.mapboxgl,u=this.onMarkerClick,p=this.deleteActiveMarker,f=this.updateActiveMarker,d=Object(w.get)(c,"props.point")||{},m=d.title,b=d.caption,h=g.Children.map(r,(function(e){if("AddPoint"===Object(w.get)(e,"props.tagName"))return e})),v=l&&s&&n.map((function(e,t){return Object(g.createElement)(O,{key:t,point:e,index:t,map:l,mapboxgl:s,markerColor:a,onClick:u})})),y=s&&Object(g.createElement)(C,{activeMarker:c,map:l,mapboxgl:s,unsetActiveMarker:function(){return e.setState({activeMarker:null})}},c&&o&&Object(g.createElement)(g.Fragment,null,Object(g.createElement)(j.TextControl,{label:Object(k.__)("Marker Title","jetpack"),value:m,onChange:function(e){return f({title:e})}}),Object(g.createElement)(j.TextareaControl,{className:"wp-block-jetpack-map__marker-caption",label:Object(k.__)("Marker Caption","jetpack"),value:b,rows:"2",tag:"textarea",onChange:function(e){return f({caption:e})}}),Object(g.createElement)(j.Button,{onClick:p,className:"wp-block-jetpack-map__delete-btn"},Object(g.createElement)(j.Dashicon,{icon:"trash",size:"15"})," ",Object(k.__)("Delete Marker","jetpack"))),c&&!o&&Object(g.createElement)(g.Fragment,null,Object(g.createElement)("h3",null,m),Object(g.createElement)("p",null,b)));return Object(g.createElement)(g.Fragment,null,Object(g.createElement)("div",{className:"wp-block-jetpack-map__gm-container",ref:this.mapRef},v),y,h)}},{key:"componentDidMount",value:function(){this.props.apiKey&&this.loadMapLibraries()}},{key:"componentWillUnmount",value:function(){this.debouncedSizeMap.cancel()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.admin,o=t.apiKey,r=t.children,a=t.points,i=t.mapStyle,l=t.mapDetails,c=t.scrollToZoom,s=t.showFullscreenButton,u=this.state,p=u.map,f=u.fullscreenControl;o&&o.length>0&&o!==e.apiKey&&this.loadMapLibraries(),r!==e.children&&!1!==r&&this.clearCurrentMarker(),a!==e.points&&this.setBoundsByMarkers(),a.length!==e.points.length&&this.clearCurrentMarker(),i===e.mapStyle&&l===e.mapDetails||p.setStyle(this.getMapStyle()),c!==e.scrollToZoom&&(c?p.scrollZoom.enable():p.scrollZoom.disable()),s!==e.showFullscreenButton&&(s?(p.addControl(f),n&&f._fullscreenButton&&(f._fullscreenButton.disabled=!0)):p.removeControl(f))}},{key:"getMapStyle",value:function(){var e=this.props;return function(e,t){return{default:{details:"mapbox://styles/automattic/cjolkhmez0qdd2ro82dwog1in",no_details:"mapbox://styles/automattic/cjolkci3905d82soef4zlmkdo"},black_and_white:{details:"mapbox://styles/automattic/cjolkixvv0ty42spgt2k4j434",no_details:"mapbox://styles/automattic/cjolkgc540tvj2spgzzoq37k4"},satellite:{details:"mapbox://styles/mapbox/satellite-streets-v10",no_details:"mapbox://styles/mapbox/satellite-v9"},terrain:{details:"mapbox://styles/automattic/cjolkf8p405fh2soet2rdt96b",no_details:"mapbox://styles/automattic/cjolke6fz12ys2rpbpvgl12ha"}}[e][t?"details":"no_details"]}(e.mapStyle,e.mapDetails)}},{key:"getMapType",value:function(){switch(this.props.mapStyle){case"satellite":return"HYBRID";case"terrain":return"TERRAIN";case"black_and_white":default:return"ROADMAP"}}},{key:"loadMapLibraries",value:function(){var e=this,t=this.props.apiKey;Promise.all([n.e(19).then(n.t.bind(null,329,7)),n.e(19).then(n.t.bind(null,330,7))]).then((function(n){var o=r()(n,1)[0].default;o.accessToken=t,e.setState({mapboxgl:o},e.scriptsLoaded)}))}},{key:"initMap",value:function(e){var t=this,n=this.state.mapboxgl,o=this.props,r=o.zoom,a=o.onMapLoaded,i=o.onError,l=o.scrollToZoom,c=o.showFullscreenButton,s=o.admin,u=null;try{u=new n.Map({container:this.mapRef.current,style:this.getMapStyle(),center:this.googlePoint2Mapbox(e),zoom:parseInt(r,10),pitchWithRotate:!1,attributionControl:!1,dragRotate:!1})}catch(d){return void i("mapbox_error",d.message)}l||u.scrollZoom.disable();var p=new n.FullscreenControl;u.on("error",(function(e){i("mapbox_error",e.error.message)}));var f=new n.NavigationControl({showCompass:!1,showZoom:!0});u.on("zoomend",(function(){t.props.onSetZoom(u.getZoom())})),u.on("moveend",(function(){var e=t.props,n=e.onSetMapCenter;e.points.length<1&&n(u.getCenter())})),u.getCanvas().addEventListener("click",this.onMapClick),this.setState({map:u,zoomControl:f,fullscreenControl:p},(function(){t.debouncedSizeMap(),u.addControl(f),c&&(u.addControl(p),s&&p._fullscreenButton&&(p._fullscreenButton.disabled=!0)),t.mapRef.current.addEventListener("alignmentChanged",t.debouncedSizeMap),u.resize(),a(),t.setState({loaded:!0}),window.addEventListener("resize",t.debouncedSizeMap)}))}}]),t}(g.Component);_.defaultProps={points:[],mapStyle:"default",zoom:13,onSetZoom:function(){},onSetMapCenter:function(){},onMapLoaded:function(){},onMarkerClick:function(){},onError:function(){},markerColor:"red",apiKey:null,mapCenter:{}};t.a=_},9:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n}}));