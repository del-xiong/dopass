var KEY_UP=38,KEY_DOWN=40,KEY_ENTER=13,ELEMENT_NODE=1,KEY_ESCAPE=27,KEY_F4=115,KEY_LEFT=37,KEY_RIGHT=39,KEY_HOME=36,KEY_END=35,g_do_complete=!0,g_do_svg=!0;function openCombo(a,e,c,b){b=b?b:document;a=b.getElementById(e);a.disabled||(c=gComboEx=b.getElementById(c),"block"!=c.style.display?showCombo(a,c,null,b):setStyle(c,"display","none",""),gItemNum=-1,gFocusItem=a,("undefined"!=typeof window?window:b.defaultView).setTimeout(function(){doFocus()},0))}
var g_iField=null,g_cb=null,g_combobox_button=null;function showCombo(a,e,c,b){b=b?b:document;g_iField=a;g_cb=e;null!=a&&(e=getComboButtonId(a.id),g_combobox_button=b.getElementById(e),"undefined"!=typeof a.addEventListener?a.addEventListener("move",function(){realShowCombo(b)},!1):a.attachEvent("onmove",function(){realShowCombo(b)}));realShowCombo(b)}function getY(a){for(var e=0;null!=a;)e+=a.offsetTop,a=a.offsetParent;return e}
function getX(a){for(var e=0;null!=a;)e+=a.offsetLeft,a=a.offsetParent;return e}
function realShowCombo(a){null==a&&(a=document);var e=getY(g_iField),c=getX(g_iField),e=e+g_iField.offsetHeight+"px",c=c+"px";g_cb.style.minWidth=g_iField.offsetWidth-14+"px";setStyle(g_cb,"top",e,"");setStyle(g_cb,"left",c,"");setStyle(g_cb,"display","block","");g_combobox_button&&setStyle(g_combobox_button,"display","","");c=LP_getAbsolutePos(a,g_iField);null!=c&&0<c.left&&(a="undefined"!=typeof window&&"undefined"!=typeof window.setTimeout?window:a.defaultView,e=a.innerWidth,null==e&&"undefined"!=
typeof getWindowWidth&&(e=getWindowWidth(a)),null!=e&&0<e&&(g_cb.style.maxWidth=parseInt(e)-parseInt(c.left)-16+"px",parseInt(g_cb.style.maxWidth)<parseInt(g_cb.style.minWidth)&&(g_cb.style.minWidth=g_cb.style.maxWidth)))}var gItemNum=0,gComboEx=null;
function focusCombo(a,e,c){a||(a=window.event);if(a){var b=a.keyCode;if("undefined"!=typeof TABKEY&&(b==TABKEY||b==SHIFTKEY))if(b=document.location?document.location.href:"",-1!=b.indexOf("popupfilltab.html")||-1!=b.indexOf("#framesrc=LPMAGIC"))return tabfocuser(a),!1;var d="undefined"!=typeof document?document:a.view.document,b=a.keyCode;a=!0;c=gComboEx=d.getElementById(c);if(b==KEY_DOWN||b==KEY_F4){a=!1;"block"!=c.getAttribute("style.display")&&showCombo(e,c,null,d);e=c.childNodes;c=e.length;for(b=
0;null!=e[b]&&b<c;){if(e[b].nodeType==ELEMENT_NODE&&"item"==e[b].className&&"none"!=e[b].style.display){gFocusItem=e[b];break}b++}gItemNum=b;b>=c&&(gItemNum=0);setTimeout(function(){doFocus()},0);a=!1}else b!=KEY_ENTER&&b==KEY_ESCAPE&&(null!=e.val&&0<e.val.length?a=!0:(a=!1,setStyle(gComboEx,"display","none",""),gItemNum=-1));return a}}
function focusItem(a,e,c){a=c.val;for(var b=null,d=getItems(e),k=d.length,h=!1,m=0;m<k;m++)if(d[m].hasChildNodes()&&d[m].firstChild.nodeValue==a){h=!0;b=d[m];gItemNum=m;break}h||(b=addItem(e,a,d.length),gItemNum=d.length);null!=b&&(gFocusItem=b,"block"!=gComboEx.getAttribute("style.display")?(a=c.offsetLeft+"px",setStyle(e,"top",c.offsetTop+c.offsetHeight+"px",""),setStyle(e,"left",a,"")):setStyle(e,"display","none",""),setStyle(e,"display","block",""),setTimeout(function(){doFocus()},0))}
function addItem(a,e,c,b){b||(b=document);var d=b.createElement("div"),k="undefined"!=typeof e.label?e.label:e;d.val="undefined"!=typeof e.label?e.value:e;d.label=k;if("undefined"!=typeof e.label&&(d.label=e.label,"undefined"!=typeof e.image)){var h=b.createElement("img");h.src=e.image;h.style.paddingRight="15px";d.appendChild(h);d.img=h.src}e=b.createTextNode(k);d.appendChild(e);d.setAttribute("tabindex","-1");d.setAttribute("class","item");d.setAttribute("data-lpcount",c);"undefined"!=typeof d.addEventListener?
(d.addEventListener("click",function(){gItemNum=this.getAttribute("data-lpcount")}),d.addEventListener("mouseover",function(){gFocusItem=this;doFocus()})):(d.attachEvent("onclick",function(){gItemNum=d.getAttribute("data-lpcount")}),d.attachEvent("onmouseover",function(){gFocusItem=d;doFocus()}));d.setAttribute("role","listitem");d.setAttribute("origText",ofa(k));a.appendChild(d);return d}
function doComboNav(a,e,c,b){a||(a=window.event);if(a){var d=a.keyCode,k=!0;null==gComboEx&&(gComboEx=e);if(d==KEY_UP||d==KEY_DOWN){k=!1;a=0;e=getItems(gComboEx);var h=e.length;if(d==KEY_UP)for(a=gItemNum-1;0<=a&&"none"==e[a].style.display;)"none"==e[a].style.display&&a--;else{a=gItemNum+1;for(a==h&&(a=-1);0<=a&&a<h&&"none"==e[a].style.display;)"none"==e[a].style.display&&a++;a==h&&(a=-1)}gItemNum=a;gFocusItem=-1==gItemNum?b.getElementById(c):e[a];setTimeout(function(){doFocus()},0)}else if(d==KEY_ENTER||
!a.keyCode&&0<=a.button){if(e=getItems(gComboEx),d=e[gItemNum],null!=d&&"true"!=d.getAttribute("aria-disabled")){a=d.label;e=d.val;c=b.getElementById(c);c.value=a;c.val=e;"undefined"!=typeof d.img&&(c.style.background="url("+d.img+") no-repeat 2px 5px",c.style.paddingLeft="25px");if(c.onchange)c.onchange();setStyle(gComboEx,"display","none","");gItemNum=0;gFocusItem=c;setTimeout(function(){doFocus()},0)}}else d==KEY_ESCAPE&&(k=!1,setStyle(e,"display","none",""),gItemNum=0,gFocusItem=b.getElementById(c),
setTimeout(function(){doFocus()},0));return k}}function getItems(a){if(null===a)return[];var e=[],e=[];a=a.childNodes;for(var c=a.length,b=0;b<c;b++)if(a[b].nodeType==ELEMENT_NODE&&("item"==a[b].getAttribute("class")||"item focus"==a[b].getAttribute("class")))e[e.length]=a[b];return e}
function setStyle(a,e,c,b){var d=!1;try{a.style&&a.style.setProperty&&(a.style.setProperty(e,c,b),d=!0)}catch(k){alert("exception caught setting style: "+k.message)}if(!d)try{a.style[e]=c,d=!0}catch(h){alert("exception caught setting direct style: "+h.message)}return d}var gFocusItem=null,gLastFocusItem=null;
function doFocus(){null!=gFocusItem&&(gFocusItem.focus(),gLastFocusItem&&"item focus"==gLastFocusItem.className&&(gLastFocusItem.className="item"),gFocusItem&&"item"==gFocusItem.className&&(gFocusItem.className="item focus"),gLastFocusItem=gFocusItem,gFocusItem=null)}
function create_combo(a,e,c,b,d,k,h,m,l){b||(b=document);d||(d="");var f=b.getElementById(a),p=getComboId(a);if(f&&!(b.getElementById(p)||null===p)){f.onkeydown=function(a){a||(a=window.event);return focusCombo(a,f,p)};f.onkeyup=function(a){a||(a=window.event);keyupCombo(b,a,f,p);return!1};f.setAttribute("role","textfield");f.setAttribute("aria-haspopup","true");f.setAttribute("autocomplete","off");f.style.marginRight="0px";var g=b.createElement(d+"div"),u=g;g.setAttribute("role","list");g.style.display=
"none";"undefined"!=typeof g_isie&&g_isie&&(g.style.display="none");g.setAttribute("id",p);g.setAttribute("class","dropStyle");"undefined"!=typeof g_isie&&g_isie&&(g.className="dropStyle");g.onkeydown=function(a){return doComboNav(a,this,this.id.substring(0,this.id.length-6),b)};"undefined"!=typeof g.addEventListener?g.addEventListener("click",function(a){doComboNav(a,this,this.id.substring(0,this.id.length-6),b)}):g.attachEvent("onclick",function(a){a||(a=window.event);if(!a)return!1;doComboNav(a,
u,u.id.substring(0,u.id.length-6),b)});g.style.overflowY="auto";g.style.overflowX="auto";"undefined"!=typeof g_isie&&g_isie&&(g.style.background="#fff");g.style.paddingLeft="6px";g.style.paddingRight="6px";g.style.position="absolute";g.setAttribute("autofilled","false");l?insertAfter(b.getElementById(l),g):"undefined"!=typeof b.body&&b.body?b.body.appendChild(g):f.parentNode.parentNode.appendChild(g);"undefined"!=typeof f.ownerDocument.defaultView&&"undefined"!=typeof f.ownerDocument.defaultView.addEventListener?
(f.ownerDocument.defaultView.addEventListener("click",function(c){c.target.id!=a&&close_combo(a,b)},!1),f.addEventListener("keydown",function(c){9==c.keyCode&&close_combo(a,b)},!1)):(document.attachEvent("onclick",function(){window.event.srcElement.id!=a&&close_combo(a,b)}),document.attachEvent("onkeydown",function(){9==window.event.keyCode&&close_combo(a,b)}));for(l=0;l<e.length;l++)addItem(g,e[l],l,b);e=("undefined"==typeof gLocalBaseUrl?"":gLocalBaseUrl)+"images/pwdrop.png";g_do_svg&&(e=("undefined"==
typeof gLocalBaseUrl?"":gLocalBaseUrl)+"images/teardrop.png");if("undefined"!=typeof g_isie&&g_isie||"undefined"!=typeof g_isfirefox&&g_isfirefox)e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAfElEQVQ4T2NkoDJgpLJ5DKMGUh6io2GIGobe3t4LGBkZ49FD9v///wu3bt2agC3ECYYhuqH4DANZQNDAgIAAgT9//hwAqtUH4ossLCwOGzZs+IArPRA0EKQRZOjv378nsLKyFuAzjCgXkpoyiXIhKYaOGkhKaGFXS/UwBABG2SEVsoLJ9AAAAABJRU5ErkJggg==";if(c&&"undefined"!=typeof LP_getAbsolutePos){var s=0,q=0,g=b.createElement(d+"div");
"undefined"!=typeof b.body&&b.body?k?insertAfter(b.getElementById(k),g):b.body.appendChild(g):f.parentNode.appendChild(g);var j=getComboButtonId(a);c=[];var r=3,v;v="undefined"!=typeof f.ownerDocument.defaultView&&"undefined"!=typeof f.ownerDocument.defaultView.getComputedStyle?f.ownerDocument.defaultView.getComputedStyle(f):f.currentStyle;d=LP_getAbsolutePos(b,f);if(!d)return;if(null!=d&&0<d.left&&0<d.top){var t;t=d.left+parseInt(d.width)+4-30;q=s=0;"undefined"!=typeof g_isie&&g_isie&&(q=-4,s=2);
c.left=t+q+"px";c.position="absolute";c.top=parseInt(d.top)+4+s+"px";if("undefined"==typeof g_isfirefox||!g_isfirefox)c.padding=r+"px"}var n=Math.floor((30-d.height)/2);if(1<=n&&30>d.height&&(q=s=0,c=[],c.position="absolute",c.height=d.height-4+"px",c.width=d.height-4+"px",c.top=parseInt(d.top)+4+n+4+"px",t=d.left+parseInt(d.width)+4-30+n+4,c.left=t+n+"px",r-=2*n,0>r&&(r=0),"undefined"==typeof g_isfirefox||!g_isfirefox))c.padding=r+"px";n=Math.round((d.height-30)/2);if(30<d.height&&(q=s=0,"undefined"!=
typeof g_isie&&g_isie&&(c=parseInt(v.borderTopWidth),q=parseInt(v.borderBottomWidth),n-=(c+q)/2,q=-5,s=c),c=[],c.left=t+q+"px",c.position="absolute",c.top=d.top+n+s+"px",r+=2*n,"undefined"==typeof g_isfirefox||!g_isfirefox))c.padding=r+"px";"undefined"!=typeof g_isie&&g_isie&&(c.border="0px");f.style.textOverflow="ellipsis";f.style.whiteSpace="nowrap";k&&(g.style.marginLeft=h?h+"px":"-15px",g.style.display="inline",g.style.verticalAlign="top",g.style.marginTop="6px",m?(c=[],c.marginTop=m+"px"):c.marginTop=
"-18px");k="<img id='"+j+"' src='"+e+"' valign='middle'/>";g.innerHTML="undefined"!=typeof g_isfirefox&&g_isfirefox?xulize(k):k;j=b.getElementById(j);if(!j)return;for(l in c)c.hasOwnProperty(l)&&(j.style[l]=c[l]);j.onclick=function(a){openCombo(a,this.id.substring(0,this.id.length-7),getComboId(this.id.substring(0,this.id.length-7)),b);null!=a?a.cancelBubble=!0:window.event.cancelBubble=!0}}else!c&&"undefined"!=typeof LP_getAbsolutePos&&(j=b.createElement(d+"img"),j.id=getComboButtonId(a),null!==
j.id&&(j.onclick=function(a){openCombo(a,this.id.substring(0,this.id.length-7),getComboId(this.id.substring(0,this.id.length-7)),b);null!=a?a.cancelBubble=!0:window.event.cancelBubble=!0}),j.setAttribute("src",e),j.setAttribute("valign","middle"),"undefined"!=typeof g_isopera&&g_isopera&&(j.style.position="relative",j.style.top="7px"),"undefined"!=typeof b.body&&b.body?b.body.appendChild(j):b.getElementById("main").appendChild(j),d=LP_getAbsolutePos(b,f),null!=d&&(0<d.left&&0<d.top)&&(t=d.left+d.width+
2,j.style.left=t+"px",j.style.position="absolute",j.style.top=d.top+"px"),n=Math.floor((30-d.height)/2),1<=n&&30>d.height&&(j.style.height=d.height+"px",j.style.width=d.height+"px",j.style.top=d.top+n+"px"),n=Math.round((d.height-30)/2),30<d.height&&(j.style.top=d.top+n+"px"));j.className+="teardrop"}}
function delete_combo_item(a,e){var c=getComboId(a);if(c=document.getElementById(c))for(var b=getItems(c),d=0;d<b.length;d++)if(b[d].innerHTML==e){for(b.splice(d,1);c.hasChildNodes();)c.removeChild(c.firstChild);for(d=0;d<b.length;d++)addItem(c,b[d].innerHTML,d);break}}function close_combo(a,e){e||(e=document);var c=getComboId(a);if(c=e.getElementById(c))"block"==c.style.display&&(setStyle(c,"display","none",""),gItemNum=-1),g_do_complete&&unhighlight_combo_all_items(e,a)}
function repopulate_combo(a,e,c){c||(c=document);var b=getComboId(a);if(b=c.getElementById(b)){for(;b.hasChildNodes();)b.removeChild(b.firstChild);for(var d=0;d<e.length;d++)addItem(b,e[d],d,c)}a=getComboButtonId(a);(c=c.getElementById(a))&&setStyle(c,"display","","")}
function destroy_combo(a,e){e||(e=document);if(!(null==a||0>=a.length))try{var c=getComboId(a),b=e.getElementById(c);if(b){for(;b.hasChildNodes();)b.removeChild(b.firstChild);b.parentNode.removeChild(b)}var d=getComboButtonId(a),k=e.getElementById(d);k&&k.parentNode.removeChild(k)}catch(h){console_log("destroy_combo error: "+h.message)}}function highlight_combo_item(){return 0}function unhighlight_combo_item(){return 0}function unhighlight_combo_all_items(){return 0}
function getComboId(a){return null===a||""===a?null:a+"_combo"}function getComboButtonId(a){return null===a||""===a?null:a+"_button"}function hide_combo_item(a){null!==a&&setStyle(a,"display","none","")}function show_combo_item(a){null!==a&&setStyle(a,"display","","")}function show_all_combo_items(a,e){a||(a=document);if(!(null==e||0>=e.length)){var c=getComboId(e);if(c=a.getElementById(c))for(var c=getItems(c),b=0;b<c.length;b++)show_combo_item(c[b])}}
function combo_filter(a,e,c){a||(a=document);if(!(null===e||0>=e.length)){var b=!0,d=0;null===c&&(c="");var k=of(c,a),h=null,m=getComboId(e);if(m=a.getElementById(m)){for(var l=getItems(m),f=0;f<l.length;f++){var p="undefined"!=typeof g_isfirefox&&g_isfirefox?l[f].textContent:get_innertext(l[f]),g=c,u=p,u="undefined"==typeof p.trim?p.replace(/^\s*|\s+$/g,""):p.trim(),g="undefined"==typeof c.trim?c.replace(/^\s*|\s+$/g,""):c.trim();""===g||0<=u.toLowerCase().indexOf(k.toLowerCase())?(show_combo_item(l[f]),
highlight_combo_item(a,e,l[f],c),b=!1,d++,h=l[f]):(hide_combo_item(l[f]),unhighlight_combo_item(a,e,l[f]))}if(b)close_combo(e,a);else if(c=m.getAttribute("autofilled"),1===d&&"false"==c){m.setAttribute("autofilled","true");if(b=a.getElementById(e))d=b.value.length,c=h.val.length,b.value=h.val,"selectionStart"in b?(b.selectionStart=d,b.selectionEnd=c):(h=b.createTextRange(),h.moveStart("character",d),h.collapse(),h.moveEnd("character",c),h.select());close_combo(e,a)}}}}
function keyupCombo(a,e,c,b){a||(a=document);e||(e=window.event);if(e&&(b=a.getElementById(b),null!==b&&null!==c)){var d=e.keyCode;if(!(d==KEY_DOWN||d==KEY_F4||d==KEY_UP||d==KEY_ENTER||d==KEY_ESCAPE)){if("undefined"!=typeof TABKEY&&(d==TABKEY||d==SHIFTKEY))if(d=document.location?document.location.href:"",-1!=d.indexOf("popupfilltab.html")||-1!=d.indexOf("#framesrc=LPMAGIC"))return tabfocuser(e),!1;isComboShowing(b)||(showCombo(c,b,null,a),gItemNum=-1,setTimeout(function(){doFocus()},0));combo_filter(a,
c.id,c.value)}}}function keydownCombo(){}function isComboShowing(a){return null===a?!1:"block"==a.style.display}function insertAfter(a,e){a.parentNode.insertBefore(e,a.nextSibling)};
