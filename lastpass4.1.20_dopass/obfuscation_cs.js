function LP_element_is_MaskedField(a){if(!a)return!1;var b="",c="";try{b=a.ownerDocument.location.href,c=gettldcached(b)}catch(d){return!1}return!LP_has_textlike_type(a)?!1:"fidelity.com"==c&&!0===a.hasAttribute("data-unmasked")||a.hasAttribute("data-masklength")||("citi.com"==c||"citibank.com"==c)&&(name_is_MaskedField(LP_getname(a))||name_is_MaskedField(LP_getname(a,LP_GETNAME_FAVOR_ID_OVER_NAME)))?!0:!1}
function LP_element_in_MaskedState(a){if(!a)return!1;var b=a.value;return b&&"string"==typeof b&&0<b.length&&"password"!=a.type&&0<=b.indexOf("***")?!0:!1}function name_is_MaskedField(a){return!a||0>=a.length?!1:a.match(/masked/i)&&!a.match(/unmasked/i)?(g_in_lpframe&&"undefined"!=typeof score_log&&score_log("is gmasked? "+a+" true"),!0):!1}
function name_is_UnmaskedField(a){return!a||0>=a.length?!1:a.match(/unmasked/i)?(g_in_lpframe&&"undefined"!=typeof score_log&&score_log("is unmasked? "+a+" true"),!0):!1}function update_preobfuscate_field_value(a){if(!a)return!1;var b=a.ownerDocument;b||(b=LP_derive_doc());if(!b)return!1;var c=LP_pickFieldName(b,a);if(c){var d=a.value;"undefined"!=typeof d&&(null!==d&&!LP_element_in_MaskedState(a))&&fieldcacheset(b,c,"fieldval",d)}return!0}
function should_track_field_onkeyup(a){if(!a)return!1;var b=a.ownerDocument;b||(b=LP_derive_doc());if(!b)return!1;var c=LP_pickFieldName(b,a);if(c){var d=fieldcacheget(b,c,"stfu");if(null!=d)return d}var d=a.id,e=a.name;a=a.getAttribute("title");var f=get_doc_location_href(b);if("fidelity.com"==lp_gettld_url(f)&&("temp_id"==d||"temp_id"==a||"ssnt"==d||"ssn"==e||"userId"==d||"userId-input"==d))return c&&fieldcacheset(b,c,"stfu",!0),!0;c&&fieldcacheset(b,c,"stfu",!1);return!1}
function masked_monitor(a){a=get_eventTarget(a);var b=a.ownerDocument;a&&(b&&"string"==typeof a.value&&!LP_element_in_MaskedState(a))&&formcacheset(b,LP_pickFieldName(b,a),"unmasked-value",a.value)};
