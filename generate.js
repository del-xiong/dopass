function oninitgenerate(){}
function onshowgenerate(){var a=getBG();document.getElementById("advanced")&&(document.getElementById("advanced").checked=parseInt(a.lpGetPref("generate_advanced",0)));document.getElementById("length").value=parseInt(a.lpGetPref("generate_length",12));document.getElementById("upper").checked=parseInt(a.lpGetPref("generate_upper",1));document.getElementById("lower").checked=parseInt(a.lpGetPref("generate_lower",1));document.getElementById("digits").checked=parseInt(a.lpGetPref("generate_digits",1));
document.getElementById("special").checked=parseInt(a.lpGetPref("generate_special",0));document.getElementById("mindigits").value=parseInt(a.lpGetPref("generate_mindigits",1));document.getElementById("ambig").checked=parseInt(a.lpGetPref("generate_ambig",0));document.getElementById("reqevery").checked=parseInt(a.lpGetPref("generate_reqevery",1));document.getElementById("pronounceable").checked=parseInt(a.lpGetPref("generate_pronounceable",0));document.getElementById("advanced")&&0==document.getElementById("advanced").checked&&
(document.getElementById("advancedoptions").style.display="none");pwUpkeep();a.g_checkgeneratepasswordcallback=function(){g_generate_found=!0;sr(document,"generatesave","value","Accept");document.getElementById("lp_docwrite_popover18")&&(document.getElementById("lp_docwrite_popover18").innerHTML=gs("Accept"));sr(document,"generateclose","value","Cancel")};if(g_ischrome)a.get_selected_tab(null,function(b){""==g_generate_url&&(g_generate_url=a.gettaburl(b),fix_length(document));g_tabid||(g_tabid=b.id);
a.sendCS(g_tabid,{cmd:"checkgeneratepassword"})});else if(g_issafari||g_isopera||g_ismaxthon||g_isfirefoxsdk)g_isopera||g_ismaxthon||g_isfirefoxsdk?(g_generate_url=a.g_generate_url,""==g_generate_url&&(g_generate_url=a.g_generate_url_prev),fix_length(document),!g_tabid&&a.g_tabid&&(g_tabid=a.g_tabid)):g_issafari&&"undefined"==typeof g_generate_url&&(g_generate_url=a.getcurrenturl(),fix_length(document),g_tabid=a.getcurrenttabid()),a.checkgeneratepassword(g_tabid);fix_length(document)}
function onhidegenerate(){var a=getBG();document.getElementById("advanced")&&a.lpPutUserPref("generate_advanced",document.getElementById("advanced").checked?1:0);a.lpPutUserPref("generate_length",document.getElementById("length").value);a.lpPutUserPref("generate_upper",document.getElementById("upper").checked?1:0);a.lpPutUserPref("generate_lower",document.getElementById("lower").checked?1:0);a.lpPutUserPref("generate_digits",document.getElementById("digits").checked?1:0);a.lpPutUserPref("generate_special",
document.getElementById("special").checked?1:0);a.lpPutUserPref("generate_mindigits",document.getElementById("mindigits").value);a.lpPutUserPref("generate_ambig",document.getElementById("ambig").checked?1:0);a.lpPutUserPref("generate_reqevery",document.getElementById("reqevery").checked?1:0);a.lpPutUserPref("generate_pronounceable",document.getElementById("pronounceable").checked?1:0);a.lpWriteAllPrefs();(g_issafari||g_isopera||g_ismaxthon||g_isfirefoxsdk)&&a.update_prefs("generate")}
function fix_length(a,b){"undefined"!=typeof g_isie&&g_isie&&(g_generate_url=ie_gettopurl());if("string"==typeof g_generate_url&&""!=g_generate_url){var c="undefined"!=typeof g_isie&&g_isie?get_sitepwlen(lp_gettld_url(g_generate_url)):getBG().get_sitepwlen(lp_gettld_url(g_generate_url));c>a.getElementById("length").value&&(a.getElementById("length").value=c,b||dogenerate())}else"undefined"!=typeof g_sitepwlen_override&&(g_sitepwlen_override>a.getElementById("length").value&&(a.getElementById("length").value=
g_sitepwlen_override),b||dogenerate())}
function dogenerate(){fix_length(document,!0);var a=document.getElementById("length").value;100<a&&(a=document.getElementById("length").value=100);var b=document.getElementById("upper").checked,c=document.getElementById("lower").checked,h=document.getElementById("digits").checked,g=document.getElementById("special").checked,f=document.getElementById("mindigits").value,l=document.getElementById("ambig").checked,d=document.getElementById("reqevery").checked,e=document.getElementById("pronounceable").checked;
document.getElementById("password").style.fontFamily="Monaco,courier";document.getElementById("password").value=lpCreatePass(a,b,c,h,g,f,l,d,e);getBG().g_genpws.unshift(document.getElementById("password").value);20<getBG().g_genpws.length&&getBG().g_genpws.splice(20,getBG().g_genpws.length-20);(g_isfirefoxsdk||g_isopera)&&getBG().update_prefs("generate");repopulate_combo("password",getBG().g_genpws);document.getElementById("page_passwordmeterback")&&update_password_meter("",document.getElementById("password").value);
document.getElementById("copypwbutton").innerHTML="<i>"+gs("Copy Password")+"</i>";document.getElementById("copypwbutton").style.color="#d32d27";getBG().can_copy_to_clipboard()||(document.getElementById("copypwbutton").style.display="none")}
function docopypw(){var a=getBG(),b=document.getElementById("password").value;document.getElementById("copypwbutton").innerHTML="\u2713 "+gs("Password Copied");document.getElementById("copypwbutton").style.color="#000000";document.getElementById("password").select();"undefined"==typeof g_generate_found&&(g_generate_found=!1);g_generate_found||("function"==typeof a.copytoclipboard?a.copytoclipboard(b):Clipboard.copy(b))}
function dosave(a){var b=getBG(),c=document.getElementById("password").value;"undefined"==typeof g_generate_found&&(g_generate_found=!1);g_generate_found||("function"==typeof b.copytoclipboard?b.copytoclipboard(c):Clipboard.copy(c));""==g_generate_url&&(g_generate_url=b.getcurrenturl());b.savePassword(c,g_generate_url,g_tabid,!g_generate_found);a?setTimeout(function(){getBG().closePop()},0):g_issafari?closemole():"undefined"!=typeof g_ismenu&&g_ismenu?setTimeout(function(){g_isfirefoxsdk?dispatch_message("closepop",
{}):window.close()},0):setTimeout(function(){getBG().closecurrenttab("")},0)}function ensureuppersinpw(a){for(var b=GPW.pronounceable(a),c=0;c<a&&b[c];){var h=b.substr(0,c),g=get_random(0,1)?b[c].toUpperCase():b[c],b=b.substr(c+1),b=h+g+b;c++}return b}
function lpCreatePass(a,b,c,h,g,f,l,d,e){"undefined"==typeof a&&(a=8+get_random(0,1));"undefined"==typeof b&&(b=!0);"undefined"==typeof c&&(c=!0);"undefined"==typeof h&&(h=!0);"undefined"==typeof g&&(g=!1);"undefined"==typeof f&&(f=0);"undefined"==typeof l&&(l=!1);"undefined"==typeof d&&(d=!0);var k=0,m=0,n=0;b&&(m=1);c&&(k=1);g&&(n=1);if(e){for(var j="";j.length<a;)j=b?ensureuppersinpw(a):GPW.pronounceable(a);return j}e=[];if(c&&0<k)for(d=0;d<k;d++)e[e.length]="L";if(b&&0<m)for(d=0;d<m;d++)e[e.length]=
"U";if(h&&0<f)for(d=0;d<f;d++)e[e.length]="D";if(g&&0<n)for(d=0;d<n;d++)e[e.length]="S";for(;e.length<a;)e[e.length]="A";e.sort(function(){return 2*get_random(0,1)-1});f="";k="abcdefghjkmnpqrstuvwxyz";l||(k+="ilo");c&&(f+=k);c="ABCDEFGHJKMNPQRSTUVWXYZ";l||(c+="ILO");b&&(f+=c);b="23456789";l||(b+="10");h&&(f+=b);g&&(f+="!@#$%^&*");h="";for(g=0;g<a;g++){switch(e[g]){case "L":j=k;break;case "U":j=c;break;case "D":j=b;break;case "S":j="!@#$%^&*";break;case "A":j=f}d=get_random(0,j.length-1);h+=j.charAt(d)}return h}
function showhideadv(){var a=document.getElementById("advancedoptions");a.style.display="none"==a.style.display?"block":"none"}function resize_generate(){g_isfirefoxsdk&&setTimeout(function(){getBG().resize_panel(390,$(document.body).height()+10)},0)};
