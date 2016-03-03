document.title=gs("Login");document.getElementById("lp_docwrite_login_small1")&&(document.getElementById("lp_docwrite_login_small1").innerHTML=gs("Your current settings require you to enter your LastPass password to complete this action."));
document.getElementById("lp_docwrite_login_small2")&&(document.getElementById("lp_docwrite_login_small2").innerHTML=gs("The version of Chrome you are currently running does not have HTML5 database support enabled.  As such, this login page will not remember your email and password, and other features such as automatic login on browser restart will not work.")+" "+gs("You may also be blocking all cookies, which causes Chrome to disallow HTML5 database access."));
document.getElementById("lp_docwrite_login_small3")&&(document.getElementById("lp_docwrite_login_small3").innerHTML=gs("Email"));document.getElementById("lp_docwrite_login_small4")&&(document.getElementById("lp_docwrite_login_small4").innerHTML=gs("Master Password"));document.getElementById("lp_docwrite_login_small5")&&(document.getElementById("lp_docwrite_login_small5").innerHTML=gs("Remember Email"));
document.getElementById("lp_docwrite_login_small6")&&(document.getElementById("lp_docwrite_login_small6").innerHTML=gs("Remember Password"));document.getElementById("lp_docwrite_login_small7")&&(document.getElementById("lp_docwrite_login_small7").innerHTML=gs("Show Vault After Log in"));document.getElementById("lp_docwrite_login_small8")&&(document.getElementById("lp_docwrite_login_small8").innerHTML=gs("Do not re-prompt for "));
document.getElementById("lp_docwrite_login_small9")&&(document.getElementById("lp_docwrite_login_small9").innerHTML="30 "+gs("seconds"));document.getElementById("lp_docwrite_login_small10")&&(document.getElementById("lp_docwrite_login_small10").innerHTML="60 "+gs("seconds"));document.getElementById("lp_docwrite_login_small11")&&(document.getElementById("lp_docwrite_login_small11").innerHTML="5 "+gs("minutes"));
document.getElementById("lp_docwrite_login_small12")&&(document.getElementById("lp_docwrite_login_small12").innerHTML="15 "+gs("minutes"));document.getElementById("lp_docwrite_login_small13")&&(document.getElementById("lp_docwrite_login_small13").innerHTML="30 "+gs("minutes"));document.getElementById("lp_docwrite_login_small14")&&(document.getElementById("lp_docwrite_login_small14").innerHTML="1 "+gs("hour"));
document.getElementById("lp_docwrite_login_small15")&&(document.getElementById("lp_docwrite_login_small15").innerHTML="3 "+gs("hours"));document.getElementById("lp_docwrite_login_small16")&&(document.getElementById("lp_docwrite_login_small16").innerHTML="6 "+gs("hours"));document.getElementById("lp_docwrite_login_small25")&&(document.getElementById("lp_docwrite_login_small25").innerHTML="8 "+gs("hours"));
document.getElementById("lp_docwrite_login_small17")&&(document.getElementById("lp_docwrite_login_small17").innerHTML="12 "+gs("hours"));document.getElementById("lp_docwrite_login_small18")&&(document.getElementById("lp_docwrite_login_small18").innerHTML="24 "+gs("hours"));document.getElementById("login")&&(document.getElementById("login").innerHTML=gs("Log In"));document.getElementById("cancel")&&(document.getElementById("cancel").innerHTML=gs("Cancel"));
document.getElementById("lp_docwrite_login_small21")&&(document.getElementById("lp_docwrite_login_small21").innerHTML=gs("I've forgotten my password."));document.getElementById("lp_docwrite_login_small22")&&(document.getElementById("lp_docwrite_login_small22").innerHTML=gs("Screen Keyboard"));document.getElementById("lp_docwrite_login_small23")&&(document.getElementById("lp_docwrite_login_small23").innerHTML=gs("New to LastPass?"));
document.getElementById("lp_docwrite_login_small23a")&&(document.getElementById("lp_docwrite_login_small23a").innerHTML=gs("Create an account now."));document.getElementById("lp_docwrite_login_small24")&&(document.getElementById("lp_docwrite_login_small24").innerHTML=gs("Disable Chrome Password Manager"));document.getElementById("logintitletxt")&&(document.getElementById("logintitletxt").innerHTML=gs("Log In"));
g_issafari||g_isopera?(document.getElementById("logoimg")&&(document.getElementById("logoimg").src="images/lp_signin_logo.png"),document.getElementById("deleteicon")&&(document.getElementById("deleteicon").src="images/cancel.png",document.getElementById("deleteicon").style.marginTop="-2px"),document.getElementById("keyboardicon")&&(document.getElementById("keyboardicon").src="images/keyboard.png",document.getElementById("screenkeyboardcontainer").style.top="4px")):g_isfirefoxsdk&&document.getElementById("deleteicon")&&
(document.getElementById("deleteicon").style.position="relative",document.getElementById("deleteicon").style.top="5px");
document.addEventListener("DOMContentLoaded",function(){window.addEventListener("load",function(){load()});window.addEventListener("unload",function(){"function"==typeof reprompt_error_callback&&reprompt_error_callback()});document.getElementById("f").onsubmit=function(){return!1};document.getElementById("u").addEventListener("focus",function(){glow(this)});document.getElementById("u").addEventListener("blur",function(){dim(this);check_remember_password()});document.getElementById("u").onchange=function(){username_changed()};
document.getElementById("deleteicon").addEventListener("click",function(){delete_user()});document.getElementById("p").addEventListener("focus",function(){glow(this)});document.getElementById("p").addEventListener("blur",function(){dim(this)});document.getElementById("p").onkeypress=function(a){return retsubmit(a)};document.getElementById("screenkeyboard").onclick=function(){getBG().openURL(base_url+"?sk=1");g_isfirefoxsdk&&closePop();return!1};document.getElementById("rememberemail").addEventListener("click",
function(){this.checked||(document.getElementById("rememberpassword").checked=!1)});document.getElementById("rememberpassword").addEventListener("click",function(){this.checked&&(this.checked=!1,document.getElementById("rememberpasswordquestion").innerHTML=gs("Are you sure? Using 'remember password' makes it easier to forget your password and decreases your security if your device is infected or stolen.")+"<br/><br/><input type='button' id='rememberpasswordyes' value='"+of(gs("Yes"))+"'> <input type='button' id='rememberpasswordno' value='"+
of(gs("No"))+"'><br/><br/>",document.getElementById("rememberpasswordquestion").style.display="block",document.getElementById("rememberpasswordyes").addEventListener("click",function(){document.getElementById("rememberpasswordquestion").style.display="none";document.getElementById("rememberemail").checked=document.getElementById("rememberpassword").checked=!0;shrink_on_remember()}),document.getElementById("rememberpasswordno").addEventListener("click",function(){document.getElementById("rememberpasswordquestion").style.display=
"none";document.getElementById("rememberpassword").checked=!1;shrink_on_remember()}),fix_firefox_height())});document.getElementById("showvault").addEventListener("click",function(){this.checked||(document.getElementById("showvault").checked=!1)});document.getElementById("donotrepromptforsecs").addEventListener("change",function(){document.getElementById("donotrepromptfor").checked=0<this.selectedIndex});document.getElementById("login").addEventListener("click",function(){do_submit()});document.getElementById("cancel").addEventListener("click",
function(a){"undefined"!=typeof a&&a.preventDefault();setTimeout(function(){closePop();getBG().closecurrenttab("login.html")},0)});document.getElementById("forgot").onclick=function(){getBG().closecurrenttab("login.html");getBG().openURL(getBG().g_forgotpwurl);closePop();return!1};document.getElementById("createaccount").onclick=function(){-1==document.location.href.indexOf("inline=1")?document.location.href=getBG().getchromeurl("create_account.html"):(getBG().closecurrenttab("login.html"),getBG().openURL(getBG().getchromeurl("create_account.html")),
closePop());return!1}});function shrink_on_remember(){var a=document.getElementById("logincontainer");if(a&&(a=getComputedStyle(a))&&"auto"!=a.height)document.body.parentNode.style.height=a.height,document.body.style.height=a.height;fix_firefox_height()}function fix_firefox_height(){if(g_isfirefoxsdk){var a=document.getElementById("logincontainer");a&&(a=getComputedStyle(a))&&"auto"!=a.height&&getBG().resize_login_panel(400,parseInt(a.height))}}
g_isfirefoxsdk&&-1!=window.location.search.indexOf("isreprompt=1")&&setup_reprompt();
