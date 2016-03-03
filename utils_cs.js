function LP_objectSize(a){var b,c=0;if(null==a||"undefined"==typeof a)return 0;if("function"!=typeof a.hasOwnProperty&&"undefined"!=typeof a.length)return a.length;for(b in a)a.hasOwnProperty(b)&&c++;return c}function LP_getComputedStyle(a,b){return!b?null:"undefined"!=typeof a.getComputedStyle?g_isfirefox?a.getComputedStyle(b,null):a.getComputedStyle(b):b.currentStyle}
function LP_getloggedin(){return g_isie?init_LPfn()&&LPfn?LPfn.get_loginstate():!1:"undefined"!=typeof g_isloggedin?g_isloggedin:lploggedin}function LP_setloggedin(a){"string"==typeof a&&"0"===a&&(a=!1);if(g_isie)return init_LPfn()&&LPfn?LPfn.set_loginstate(a):!1;if("undefined"!=typeof g_isloggedin)g_isloggedin=a?!0:!1;else if("undefined"!=typeof lploggedin)lploggedin=a?!0:!1;else return!1;return!0}function get_win_self(a){return"undefined"!=typeof g_isfirefoxsdk&&g_isfirefoxsdk?a:a.self}
function LP_get_live_style(a){if(!a||!a.ownerDocument||!g_isie&&!a.ownerDocument.defaultView)return null;var b;if(g_isie&&a.currentStyle)b=a.currentStyle;else try{b=a.ownerDocument.defaultView.getComputedStyle(a,"")}catch(c){"undefined"!=typeof a.currentStyle&&(b=a.currentStyle)}return b}function LP_elt_get_text(a){return!a?"":"undefined"!=typeof g_isfirefox&&g_isfirefox?null==a.textContent?"":a.textContent:"undefined"!=typeof a.textContent&&null!=a.textContent?a.textContent:get_innertext(a)}
function LP_elt_set_text(a,b){if(!a)return!1;"undefined"!=typeof g_isfirefox&&g_isfirefox?a.textContent=b:set_innertext(a,b);return!0}function parse_zindex(a){if("string"==typeof a&&-1!=a.indexOf("e")){a=""+parseFloat(a);for(var b="",c=a.length-1;0<=c&&"0"==a.charAt(c);c--)b+="9";a=a.substring(0,c+1)+b}return parseInt(a)}
function LP_getAbsolutePos(a,b,c,d){LPCTR("getAbsolutePos");if(!a||!b)return null;if("undefined"==typeof c||null===c)c=!1;if("undefined"==typeof d||null===d)d=!1;var e=null;try{e=typeof b.getBoundingClientRect}catch(f){e=null}if(!e||"undefined"==e)return null;try{var h=b.getBoundingClientRect(),g,j;g="undefined"==typeof h.width?h.right-h.left:h.width;j="undefined"==typeof h.height?h.bottom-h.top:h.height;var k=LP_get_cached_body_rect(a),e=b=0,l=LP_get_cached_body_style(a);g_bodystyle_relative&&(k&&
l&&"relative"==l.position)&&!d&&(b=k.left,e=k.top);l=d=0;if(!c){var n="undefined"!=typeof window&&window?window:a.defaultView;if("pageXOffset"in n)var p=n.pageXOffset,q=n.pageYOffset;else{var m;c=1;"undefined"!=typeof g_isie&&g_isie&&"undefined"!=typeof a.querySelector&&"undefined"==typeof a.addEventListener?m=1:(k&&(c=Math.round(100*((k.right-k.left)/a.body.offsetWidth))/100),m=c);p=Math.round(a.documentElement.scrollLeft/m);q=Math.round(a.documentElement.scrollTop/m)}d=p;l=q}return{left:h.left+
d-b,top:h.top+l-e,width:g,height:j}}catch(r){return"undefined"!=typeof write_error_to_history&&write_error_to_history(a,"getAbsolutePos",r),null}}
function LP_measureText(a,b,c,d,e){var f=LP_measureTextCacheGet(a,b,d);if(null!=f)return f;var f=a.createElement("span"),h=null;if(null==d&&null==c)return h;null==e&&(e=a.body);null==e&&(e=a.getElementById("hiddenel"));e&&(e.appendChild(f),null!=d&&(f.style.cssText=d),null!=c&&(f.style.fontSize=""+c+"px"),f.style.position="absolute",f.style.left="-1000px",f.style.top="-1000px",f.innerHTML=b,h={width:f.clientWidth,height:f.clientHeight},LP_measureTextCacheSet(a,b,d,h),e.removeChild(f));return h}
function lp_url_is_lastpass(a){if(null==a)return!1;var b="https://lastpass.com/";"undefined"!=typeof base_url&&(b=base_url);return 0==a.indexOf(b)||0==a.indexOf("https://lastpass.com/")||0==a.indexOf("https://lastpass.eu/")?!0:"undefined"!=typeof g_loosebasematching?(a=lp_gettld_url(a),RegExp(a+"/$").test(base_url)):/^https:\/\/([a-z0-9-]+\.)?lastpass\.(eu|com)\//i.test(a)}
function LP_getElementByIdOrName(a,b,c){"document"==a&&(a=document);if(null==a||null==b||0==b.length||"undefined"==typeof a.getElementsByTagName)return null;c=c?c.toUpperCase():"INPUT";c.toLowerCase();for(var d=LP_getAllInputsByIdOrName(a,b,!0),e=[],f=0;f<d.length;f++)e[e.length]=d[f];var f=e.length,h=a.getElementById(b);if(null!=h){if(0==f||1==f&&(d[0]==h||null==d[0]))return h;e[e.length]=h}if(LP_name_is_inputidx(a,b)&&(b=LP_getinputidx_from_name(a,b),null!==b&&(h=LP_getElementByIdx(a,b),null!=h)))return h;
if(1==f)return e[0];if(0==f)return null;b=[];d=0;f=-1;if("undefined"!=typeof Math){for(var h=Math.floor(1E4*Math.random()),g=0;g<e.length;g++)b[g]=0,e[g].tagName.toUpperCase()==c&&(b[g]+=20,e[g]&&(e[g].tagName&&"INPUT"==e[g].tagName.toUpperCase())&&"hidden"!=e[g].type&&(b[g]+=10)),null!=e[g].style&&"none"!=e[g].style.display&&checkIsDisplayed(a,e[g],0,null,h,!0)&&(b[g]+=5),e[g]&&(e[g].tagName&&"INPUT"==e[g].tagName.toUpperCase())&&inputHasLPBackground(e[g])&&(b[g]+=7),null!=e[g].style&&"hidden"!=
e[g].style.visibility&&(b[g]+=3),e[g]==g_popupfill_parent&&null!=g_popupfill_parent?b[g]+=5:e[g]==a.g_popupfill_parent&&null!=a.g_popupfill_parent&&(b[g]+=5),b[g]>d&&(d=b[g],f=g);return 0<=f?e[f]:null}}
function LP_getAllInputsByIdOrName(a,b,c){if(null==a||null==b||0==b.length||"undefined"==typeof a.getElementsByTagName)return null;var d=!0;null!==c&&(d=c);var e=a.getElementsByName(b);c=[];for(var f=0;f<e.length;f++)c[c.length]=e[f];if(d){a=a.getElementsByTagName("input");e=a.length;e>MAX_INPUTS_SOFT&&(e=MAX_INPUTS_SOFT);for(d=0;d<e;d++)a[d].id==b&&c.push(a[d])}else(b=LP_getElementByIdOrName(a,b))&&c.push(b);return c}
function isEmptyObject(a){if("undefined"==typeof Object.keys){var b=Object,c=Object.prototype.hasOwnProperty,d=!{toString:null}.propertyIsEnumerable("toString"),e="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),f=e.length;b.keys=function(a){if("object"!==typeof a&&("function"!==typeof a||null===a))throw new TypeError("Object.keys called on non-object");var b=[],j;for(j in a)c.call(a,j)&&b.push(j);if(d)for(j=0;j<f;j++)c.call(a,e[j])&&b.push(e[j]);
return b}}return 0===Object.keys(a).length}function LP_getname(a,b){if("undefined"!=typeof a&&null!=a){if(b&&"string"==typeof a.id&&""!=a.id)return a.id;if("string"==typeof a.name&&""!=a.name)return a.name;if("string"==typeof a.id)return a.id}return""}
function LP_getWindowWidth(a,b){LPCTR("windowWidth");if(!a)return 0;var c=a.innerWidth,d=a.document;if(!d)return 0;var e=LP_get_body_reference(d),f=LP_get_cached_body_style(d);g_bodystyle_relative&&(f&&"relative"==f.position)&&(e=d.documentElement);f=d.getElementById("_lpinvis");null==f&&(f=d.createElement("div"),f.id="_lpinvis",f.style.left="0px",f.style.right="0px",f.style.top="0px",f.style.height="0px",f.style.visibility="hidden",f.style.position="absolute",e.appendChild(f));var h=LP_getComputedStyle("undefined"!=
typeof window&&window?window:d.defaultView,e);if(!h)return 0;d=parseInt(h.marginLeft);h=parseInt(h.marginRight);0<f.offsetWidth&&4*f.offsetWidth<a.innerWidth&&(c=(0<d||0<h)&&!isNaN(d)&&!isNaN(h)?f.offsetWidth+h+d:f.offsetWidth);b||e.removeChild(f);return c}
function LP_getWindowHeight(a){if(!a)return 0;try{var b=parseInt(a.innerHeight);if("undefined"==typeof b||null===b||isNaN(b)||0>=b){if("undefined"!=typeof a.jQuery)return $(a).height();var c=a.document.documentElement;c||(c=a.document.body);return c.clientHeight?(b=parseInt(c.clientHeight),isNaN(b)&&(b=0),b):0}}catch(d){return verbose_log("getWindowHeight failed, "+d.message),0}0>b&&(b=0);return b}
function LP_pos_viewport(a){if(!a)return[0,0];var b=0,c=0,d=null;a.document&&(d=a.document.documentElement,d||(d=a.document.body));c=a.pageYOffset?parseInt(a.pageYOffset):d&&d.scrollTop?parseInt(d.scrollTop):0;a.pageXOffset?b=parseInt(a.pageXOffset):d&&d.scrollLeft&&(b=parseInt(d.scrollLeft));isNaN(b)&&(b=0);isNaN(c)&&(c=0);return[b,c]}
function LP_getname_or_idx(a,b,c){if(!a&&(a=document,!a))return"";c=LP_getname(b,c);if(""===c||null===c)if("INPUT"==b.tagName||"input"==b.tagName)c=LP_inputidx_to_name(a,LP_getinputidx(a,b));return c}function LP_getinputidx(a,b){if(!a&&(a=document,!a))return"";for(var c=a.getElementsByTagName("INPUT"),d=0,d=0;d<c.length;d++)if(c[d]==b)return d;return""}var LPMAGICINPUTIDX="input_idx_";function LP_inputidx_to_name(a,b){if(null!==b&&is_valid_input_indexes(a))return LPMAGICINPUTIDX+b}
function LP_name_is_inputidx(a,b){return b&&0==b.indexOf(LPMAGICINPUTIDX)&&b.length>LPMAGICINPUTIDX.length?!0:!1}function LP_getinputidx_from_name(a,b){return is_valid_input_indexes(a)&&0==b.indexOf(LPMAGICINPUTIDX)?b.substr(LPMAGICINPUTIDX.length):null}function LP_getElementByIdx(a,b){var c=null;is_valid_input_indexes(a)&&(c=a.getElementsByTagName("INPUT")[b]);return c}function invalidate_input_indexes(a){if(!a&&(a=document,!a))return;a.g_need_to_recompute_input_index=!0}
function validate_input_indexes(a){if(!a&&(a=document,!a))return;a.g_need_to_recompute_input_index=!1}function is_valid_input_indexes(){return!0}function LP_get_body_reference(a){if(!a)return null;var b=null;return b="undefined"!=typeof a.body?a.body:a.getElementById("main")?a.getElementById("main"):a.documentElement}
function LP_get_cached_body_style(a){if(!a)return null;var b=LP_get_body_reference(a),c=null;"undefined"==typeof a.g_posbodystyle_cache?b&&(c=(c="undefined"!=typeof window&&window?window:a.defaultView)&&"undefined"!=typeof c.getComputedStyle?c.getComputedStyle(b,null):b.currentStyle,a.g_posbodystyle_cache=c):c=a.g_posbodystyle_cache;return c}
function LP_get_cached_body_rect(a){if(!a)return null;var b;b=LP_get_body_reference(a);"undefined"==typeof a.g_posbodyrect_cache&&b?(b=b.getBoundingClientRect(),a.g_posbodyrect_cache=b):b=a.g_posbodyrect_cache;return b}function LP_derive_doc(){var a=null,a="undefined"!=typeof g_isfirefox&&g_isfirefox&&LP?LP.getBrowser().contentDocument:document;return!a?null:a}
function LP_is_inframe(a){if(!a)return!1;try{var b="undefined"!=typeof window&&window?window:a.defaultView;return get_win_self(b)!==b.top}catch(c){return!1}}function LP_pickFieldName(a,b){return!a||!b?null:LP_getname_or_idx(a,b,LP_GETNAME_FAVOR_ID_OVER_NAME)}
function LP_fieldGetWidth(a){var b={},c=0;if("undefined"!=typeof g_isie&&g_isie){if("undefined"!=typeof a.offsetWidth&&(c=parseInt(a.offsetWidth)),!c)if("undefined"!=typeof a.currentStyle)(b=a.currentStyle)&&(c=parseInt(b.width));else return 0}else if(c=a.style.width.replace(/px/,""),0<c.indexOf("%")&&(c=c.replace(/%/,"")),""==c)try{b=a.ownerDocument.defaultView.getComputedStyle(a,""),c=b.width.replace(/px/,"")}catch(d){"undefined"!=typeof a.currentStyle&&(b=a.currentStyle,c=b.width.replace(/px/,
""))}if("NaN"==c||""===c)c=0;return c}function LP_getActiveElement(a){return!a?null:a.activeElement}function LP_docHasFocus(a){return!a?null:!0}function is_page_JSON(a){if(!a)return null;if("undefined"!=typeof a.lp_is_page_json)return a.lp_is_page_json;var b=a.body;return b&&(b=b.innerHTML,(b="undefined"!=typeof b.trim?b.trim():b.replace(/^\s*/,""))&&2<b.length&&("{"==b.charAt(0)||"("==b.charAt(0)))?a.lp_is_page_json=!0:a.lp_is_page_json=!1}
function normalize_opacity(a){if("undefined"==typeof a||null===a||"undefined"==typeof Math)return 0;var b=0;0<a&&1>=a?b=Math.floor(100*a):1<a&&100>=a&&(b=a);return b};
