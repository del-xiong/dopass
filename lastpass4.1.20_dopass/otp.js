var yubikeysubmit=!1;function oninityubikey(){}
function onshowyubikey(){document.getElementById("yubikeyotp").value="";setTimeout(function(){window.focus()},0);setTimeout(function(){document.getElementById("yubikeyotp").focus()},0);setTimeout(function(){document.getElementById("yubikeyotp").focus()},100);yubikeysubmit=!1;sendBG({cmd:"turnofficon"});var a=getQueryVariable("trustlabel");""!=a&&(document.getElementById("lptrustyubi").checked=!0,document.getElementById("labelyubi").style.display="block",document.getElementById("yubitrustlabel").value=
a);1==getQueryVariable("trustexpired")&&(document.getElementById("yubitrustexpired").innerHTML=gs("Your trust token has expired."),document.getElementById("yubitrustexpired").style.display="block")}function onhideyubikey(){yubikeysubmit||sendBG({cmd:"yubikeyauth",otp:""});closemole()}
function otpcheck(){var a=document.getElementById("yubikeyotp").value;if(""==a)alert(gs("Please enter your multifactor authentication code."));else{var b="";if(document.getElementById("lptrustyubi").checked&&(b=document.getElementById("yubitrustlabel").value,""==b)){document.getElementById("labelyubi").style.color="red";return}yubikeysubmit=!0;document.getElementById("yubikeyotp").blur();sendBG({cmd:"yubikeyauth",otp:a,label:b});onhideyubikey()}}
function lostkey(){sendBG({cmd:"lostkey"});closemole()}var googleauthsubmit=!1;function oninitgoogleauth(){}
function onshowgoogleauth(){document.getElementById("googleauthotp").value="";setTimeout(function(){window.focus()},0);setTimeout(function(){document.getElementById("googleauthotp").focus()},0);setTimeout(function(){document.getElementById("googleauthotp").focus()},100);googleauthsubmit=!1;sendBG({cmd:"turnofficon"});var a=getQueryVariable("trustlabel");""!=a&&(document.getElementById("lptrustgoogleauth").checked=!0,document.getElementById("labelgoogleauth").style.display="block",document.getElementById("googleauthtrustlabel").value=
a);1==getQueryVariable("trustexpired")&&(document.getElementById("googleauthtrustexpired").innerHTML=gs("Your trust token has expired."),document.getElementById("googleauthtrustexpired").style.display="block")}function onhidegoogleauth(){googleauthsubmit||sendBG({cmd:"googleauthauth",otp:""});closemole()}
function googleauthotpcheck(){var a=document.getElementById("googleauthotp").value;if(""==a)alert(gs("Please enter your multifactor authentication code."));else{var b="";if(document.getElementById("lptrustgoogleauth").checked&&(b=document.getElementById("googleauthtrustlabel").value,""==b)){document.getElementById("labelgoogleauth").style.color="red";return}googleauthsubmit=!0;sendBG({cmd:"googleauthauth",otp:a,label:b});onhidegoogleauth()}}
function googleauthlostkey(){sendBG({cmd:"googleauthlostkey"});closemole()}var outofbandsubmit=!1;function oninitoutofband(){}var g_trustlabel="",g_capabilities=[];
function onshowoutofband(){setTimeout(function(){window.focus()},0);outofbandsubmit=!1;sendBG({cmd:"turnofficon"});document.getElementById("oobright").style.backgroundImage="url("+AES.hex2bin(getQueryVariable("outofbandimage"))+")";var a=getQueryVariable("capabilities");g_capabilities=""!=a?a.split(","):[];""!=getQueryVariable("textoverride")||!lp_in_array("outofband",g_capabilities)?(document.getElementById("outofband_text").style.display="none",document.getElementById("lp_docwrite_lp_toolstrip60").style.display=
"none"):lp_in_array("outofbandauto",g_capabilities)||(document.getElementById("lp_docwrite_lp_toolstrip60").innerHTML='<a href="#" id="start_outofband_link">'+gs("Click here to initiate multifactor authentication on your phone or mobile device.")+"</a>",document.getElementById("start_outofband_link").onclick=start_outofband);lp_in_array("passcode",g_capabilities)&&(document.getElementById("outofband").style.height="340px",document.getElementById("lp_docwrite_lp_toolstrip64").innerHTML=lp_in_array("outofband",
g_capabilities)?gs("Alternatively, enter a passcode in the box below:"):gs("Enter a passcode in the box below:"),lp_in_array("sms",g_capabilities)&&(document.getElementById("outofband").style.height="350px",a=getQueryVariable("sms_nextcode"),""!=a?document.getElementById("lp_docwrite_lp_toolstrip65").innerHTML=gs("Next SMS passcode starts with")+" "+of(a)+" ("+gs("send more")+")":document.getElementById("lp_docwrite_lp_toolstrip65").innerHTML=gs("Send SMS passcodes"),document.getElementById("lp_docwrite_lp_toolstrip65").onclick=
function(){getBG().send_sms_passcodes("smshash="+encodeURIComponent(getQueryVariable("smshash"))+"&smstime="+encodeURIComponent(getQueryVariable("smstime"))+"&smsuid="+encodeURIComponent(getQueryVariable("smsuid")))},document.getElementById("sms_text").style.display="inline"),document.getElementById("passcode_text").style.display="inline",document.getElementById("outofbandpasscodediv").style.display="block",setTimeout(function(){document.getElementById("outofbandotp").focus()},0),setTimeout(function(){document.getElementById("outofbandotp").focus()},
100));""!=getQueryVariable("textoverride")&&(document.getElementById("lp_docwrite_lp_toolstrip64").innerHTML=of(getQueryVariable("textoverride")));"1"==getQueryVariable("allowtrust")&&(document.getElementById("outofbandtrustdiv").style.display="block");lp_in_array("outofbandauto",g_capabilities)&&start_outofband();setInterval(function(){var a=document.getElementById("lptrustoutofband").checked?document.getElementById("outofbandtrustlabel").value:"";a!=g_trustlabel&&(g_trustlabel=a,sendBG({cmd:"settrustlabel",
trustlabel:a}))},100);a=getQueryVariable("trustlabel");""!=a&&(document.getElementById("lptrustoutofband").checked=!0,document.getElementById("labeloutofband").style.display="block",document.getElementById("outofbandtrustlabel").value=a);1==getQueryVariable("trustexpired")&&(document.getElementById("outofbandtrustexpired").innerHTML=gs("Your trust token has expired."),document.getElementById("outofbandtrustexpired").style.display="block")}var g_outofband_started=!1;
function start_outofband(){g_outofband_started||(g_outofband_started=!0,sendBG({cmd:"outofbandauth",otp:"dummy",label:""}))}function onhideoutofband(){outofbandsubmit||sendBG({cmd:"outofbandauth",otp:""});closemole()}
function outofbandotpcheck(){var a=document.getElementById("outofbandotp").value;if(""==a)alert(gs("Please enter your multifactor authentication code."));else if(lp_in_array("passcode",g_capabilities)){var b="";if(document.getElementById("lptrustoutofband").checked&&(b=document.getElementById("outofbandtrustlabel").value,""==b)){document.getElementById("labeloutofband").style.color="red";return}outofbandsubmit=!0;sendBG({cmd:"outofbandauth",otp:a,label:b});onhideoutofband()}}
function outofbandlostkey(){sendBG({cmd:"outofbandlostkey"});closemole()}var securityquestionsubmit=!1;function oninitsecurityquestion(){}
function onshowsecurityquestion(){document.getElementById("securityquestionotp").value="";setTimeout(function(){window.focus()},0);setTimeout(function(){document.getElementById("securityquestionotp").focus()},0);setTimeout(function(){document.getElementById("securityquestionotp").focus()},100);securityquestionsubmit=!1;sendBG({cmd:"turnofficon"});document.getElementById("lp_docwrite_lp_toolstrip55").innerHTML=of(getQueryVariable("question"));getQueryVariable("autotrust")&&(document.getElementById("lptrustsecurityquestion").style.display=
"none",document.getElementById("lp_docwrite_lp_toolstrip56").style.display="none",document.getElementById("lptrustsecurityquestion").checked=!0,document.getElementById("securityquestiontrustlabel").value=(g_ischrome?gs("Chrome"):g_issafari?gs("Safari"):g_isopera?gs("Opera"):g_ismaxthon?gs("Maxthon"):g_isfirefoxsdk?gs("Firefox"):gs("Unknown"))+" - "+getQueryVariable("uuid"));"1"==getQueryVariable("hidedisable")&&(document.getElementById("securityquestionlostkey").style.display="none");var a=getQueryVariable("trustlabel");
""!=a&&(document.getElementById("lptrustsecurityquestion").checked=!0,document.getElementById("labelsecurityquestion").style.display="block",document.getElementById("securityquestiontrustlabel").value=a);1==getQueryVariable("trustexpired")&&(document.getElementById("securityquestiontrustexpired").innerHTML=gs("Your trust token has expired."),document.getElementById("securityquestiontrustexpired").style.display="block")}
function onhidesecurityquestion(){securityquestionsubmit||sendBG({cmd:"securityquestionauth",otp:""});closemole()}
function securityquestionotpcheck(){var a="";if(document.getElementById("lptrustsecurityquestion").checked&&(a=document.getElementById("securityquestiontrustlabel").value,""==a)){document.getElementById("labelsecurityquestion").style.color="red";return}var b=document.getElementById("securityquestionotp").value;""!=b&&(securityquestionsubmit=!0,sendBG({cmd:"securityquestionauth",otp:b,label:a}));onhidesecurityquestion()}
function securityquestionlostkey(){sendBG({cmd:"securityquestionlostkey"});closemole()}var sesamesubmit=!1;function oninitsesame(){}
function onshowsesame(){document.getElementById("sesameotplocal").value="";setTimeout(function(){window.focus()},0);setTimeout(function(){document.getElementById("sesameotplocal").focus()},0);setTimeout(function(){document.getElementById("sesameotplocal").focus()},100);sesamesubmit=!1;sendBG({cmd:"turnofficon"});var a=getQueryVariable("trustlabel");""!=a&&(document.getElementById("lptrustsesame").checked=!0,document.getElementById("labelsesame").style.display="block",document.getElementById("sesametrustlabel").value=
a);1==getQueryVariable("trustexpired")&&(document.getElementById("sesametrustexpired").innerHTML=gs("Your trust token has expired."),document.getElementById("sesametrustexpired").style.display="block")}function onhidesesame(){sesamesubmit||sendBG({cmd:"sesameauth",otp:""});closemole()}
function sesameotpcheck(){var a=document.getElementById("sesameotplocal").value;if(""==a)alert(gs("Please enter your multifactor authentication code."));else{var b="";if(document.getElementById("lptrustsesame").checked&&(b=document.getElementById("sesametrustlabel").value,""==b)){document.getElementById("labelsesame").style.color="red";return}sesamesubmit=!0;sendBG({cmd:"sesameauth",otp:a,label:b});onhidesesame()}}function sesamelostkey(){sendBG({cmd:"sesamelostkey"});closemole()}var gridsubmit=!1;
function oninitgrid(){}
function onshowgrid(){document.getElementById("lpgridinput1").value="";document.getElementById("lpgridinput2").value="";document.getElementById("lpgridinput3").value="";document.getElementById("lpgridinput4").value="";sendBG({cmd:"turnofficon"});var a=document.location.href,a=a.substr(a.indexOf("challenge=")+10),b=a.indexOf("&");-1!=b&&(a=a.substring(0,b));for(var a=decodeURIComponent(a),a=a.replace(/^\s+|\s+$/g,""),b=a.split(" "),c=0;c<b.length;c++)document.getElementById("grid"+(c+1)+"label").innerHTML=
b[c];console_log(a);setTimeout(function(){window.focus()},0);setTimeout(function(){document.getElementById("lpgridinput1").focus()},0);setTimeout(function(){document.getElementById("lpgridinput1").focus()},100);gridsubmit=!1;a=getQueryVariable("trustlabel");""!=a&&(document.getElementById("lptrustgrid").checked=!0,document.getElementById("labelgrid").style.display="block",document.getElementById("gridtrustlabel").value=a);1==getQueryVariable("trustexpired")&&(document.getElementById("gridtrustexpired").innerHTML=
gs("Your trust token has expired."),document.getElementById("gridtrustexpired").style.display="block")}function onhidegrid(){gridsubmit||sendBG({cmd:"gridauth",gridvalues:""});closemole()}
function gridcheck(){var a="";if(""!=document.getElementById("lpgridinput1").value&&""!=document.getElementById("lpgridinput2").value&&""!=document.getElementById("lpgridinput3").value&&""!=document.getElementById("lpgridinput4").value){var a=document.getElementById("lpgridinput1").value+","+document.getElementById("lpgridinput2").value+","+document.getElementById("lpgridinput3").value+","+document.getElementById("lpgridinput4").value,b="";if(document.getElementById("lptrustgrid").checked&&(b=document.getElementById("gridtrustlabel").value,
""==b)){document.getElementById("labelgrid").style.color="red";return}""!=a&&(gridsubmit=!0,sendBG({cmd:"gridauth",gridvalues:a,label:b}));onhidegrid()}else alert(gs("Please enter your multifactor authentication code.")),""==document.getElementById("lpgridinput4").value&&document.getElementById("lpgridinput4").focus(),""==document.getElementById("lpgridinput3").value&&document.getElementById("lpgridinput3").focus(),""==document.getElementById("lpgridinput2").value&&document.getElementById("lpgridinput2").focus(),
""==document.getElementById("lpgridinput1").value&&document.getElementById("lpgridinput1").focus()}function lostgrid(){sendBG({cmd:"gridlostkey"});closemole()};
