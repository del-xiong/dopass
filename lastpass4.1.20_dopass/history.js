LPhistory=new LPhistory_lib;function write_history(a){if(!is_user_debug_enabled())return!0;if("undefined"==typeof LPhistory||null===LPhistory)LPhistory=new LPhistory_lib;return LPhistory.write(a)}function show_history(){return dump_history()}function clear_history(){return reset_history()}function reset_history(){LPhistory||(LPhistory=new LPhistory_lib);return LPhistory.reset()}
function dump_history(){LPhistory||(LPhistory=new LPhistory_lib);return LPhistory.dump(null,g_isadmin?LPhistory.LOG_ADMIN:LPhistory.LOG_USER)}function gethistorybuf(){LPhistory||(LPhistory=new LPhistory_lib);return is_user_debug_enabled()?LPhistory.getbuf():""}
function LPhistory_lib(){function a(a){if(!a)return null;var c=a.prop;a=a.dflt;"undefined"==typeof a&&(a=null);var d=c;if("undefined"==typeof c||null===c)d=a;return d}var g=[],k=this;this.LOG_ADMIN=2;this.LOG_DEBUG=1;this.LOG_USER=0;this.write=function(a){if(!is_user_debug_enabled())return!0;if(!a)return!1;"undefined"==typeof a.timestamp&&(a.timestamp=(new Date).getTime());if("undefined"==typeof a.loglevel){var c;if(a)switch(c=k.LOG_USER,a.cmd){case "LoadData":c=k.LOG_DEBUG;break;case "":case null:console_log("bad history object"),
c=k.LOG_DEBUG}else c=k.LOG_DEBUG;a.loglevel=c}var d;c=a.tabid;var f=a.docnum;"undefined"==typeof a.docnum&&(null!==g_CS_tops&&c)&&(f=g_CS_tops[c]);null!==f&&("undefined"!=typeof f&&c)&&(d="","all"==f?d=ftd_get_topurl(c):(d=getcsinfo(c,f))&&d.url?d=d.url:g_CS[c]&&g_CS[c][f]?(c=g_CS[c][f],d=gettaburl(c),d||(d=c.name)):d="",a.url=d);is_user_debug_enabled()?(g||(g=[]),a?("undefined"==typeof a.timestamp&&(a.timestamp=(new Date).getTime()),8192<g.length&&g.shift(),g.push(a),a=!0):a=!1):a=!0;return a};this.getbuf=
function(){return k.dump(!0,g_isadmin?LPhistory.LOG_ADMIN:LPhistory.LOG_USER)};this.dump=function(n,c){var d="";if(!is_user_debug_enabled())return n?d:!0;"undefined"==typeof c&&(c=k.LOG_USER);if(!g)return console.error("empty history !"),n?d:!1;var f;for(f=0;f<g.length;f++){var b=g[f];if(b){var h=b.loglevel;"undefined"==typeof b.loglevel&&(h=k.LOG_USER);if(!(h>c)){var h="",j=b.timestamp,h="undefined"==typeof j||null===h?"none?":"undefined"!=typeof(new Date(j)).toUTCString?(new Date(j)).toUTCString():
parseInt(j/1E3).toString(),j=a({prop:b.aid,dflt:""}),q=a({prop:b.tabid,dflt:""}),r=a({prop:b.cmd,dflt:"none?"}),s=a({prop:b.url,dflt:""}),l=a({prop:b.msg,dflt:""}),p=a({prop:b.docnum,dflt:""}),t=a({prop:b.docstate,dflt:""}),m="";l.match(/^\w{2}\d+$/)&&u[l]&&(m=sprintf(u[l],b.param1,b.param2,b.param3,b.param4,b.param5,b.param6,b.param7,b.param8,b.param9))&&(l=m);var m=a({prop:b.submit,dflt:"none"}),G=a({prop:b.doconfirm,dflt:"none"}),v=a({prop:b.allowforce,dflt:"none"}),w=a({prop:b.name,dflt:""}),
x=a({prop:b.custom_js,dflt:""}),H=a({prop:b.is_launch,dflt:""}),y=a({prop:b.manualfill,dflt:""}),I=a({prop:b.originator,dflt:""}),z=a({prop:b.delay,dflt:0}),J=a({prop:b.submit_js,dflt:""}),K=a({prop:b.submit_id,dflt:""}),A=a({prop:b.username,dflt:""}),L=a({prop:b.result,dflt:""}),B=a({prop:b.force_fillbest,dflt:"none"}),M=a({prop:b.ready_state,dflt:-1}),N=a({prop:b.status,dflt:-1}),C=a({prop:b.sz,dflt:-1}),O=a({prop:b.status_s,dflt:-1}),D=a({prop:b.lver,dflt:-1}),E=a({prop:b.sver,dflt:-1}),F=a({prop:b.spin,
dflt:""});a({prop:b.flavor,dflt:""});a({prop:b.color,dflt:""});var P=a({prop:b.num,dflt:-1}),Q=a({prop:b.file,dflt:""}),R=a({prop:b.line,dflt:0}),S=a({prop:b.stack,dflt:""}),T=a({prop:b.name,dflt:""}),b=a({prop:b.message,dflt:""}),e="";switch(r){case "fill_A1":case "fill_A2":case "fill_A3":case "fill_A4":case "FILL_F2":case "FILL_F3":case "FILL_F4":case "FILL_F5":case "FILL_F6":case "fill_PW":case "FILLBASIC":case "autofillaid":case "autologinaid":e=sprintf("[submit=%s][doconfirm=%s][allowforce=%s]",
m,G,v);break;case "fillfieldCS":e=sprintf("[name=%s][manualfill=%s][is_launch=%s][originator=%s][delay=%dms][custom_js=%s]",w,y,H,I,z,x);break;case "fillbestCS":e=sprintf("[username=%s][force_fillbest=%s][custom_js=%s]",A,B,x);break;case "submitCS":e=sprintf("[submit_id=%s][delay=%dms][submit_js=%s]",K,z,J);break;case "check_autologin1":case "check_autologin2":case "check_autologin3":e=sprintf("[dosubmit=%s]",m);break;case "fillfieldconfirm":e=sprintf("[result=%s][manualfill=%s][allowforce=%s][fieldname=%s][force_fillbest=%s]",
L,y,v,w,B);break;case "get_accts_success":case "get_accts_fail":e=sprintf("[size=%d][ready_state=%d][status=%d][lver=%d][sver=%d]",C,M,N,D,E);break;case "get_accts_local":e=sprintf("[size=%d][status=%s][lver=%d][sver=%d]",C,O,D,E);break;case "showchangenotification":e=sprintf("[spin=%s]",F);break;case "showaddnotification":e=sprintf("[spin=%s][username=%s]",F,A);break;case "LoadData":e=sprintf("[file=%s][num=%d]",Q,P);break;case "errtrap":case "errtrapCS":e=sprintf("[errtype=%s][errmsg=%s][line=%d][stack=%s]",
T,b,R,S);break;default:e=""}h=sprintf("[%s][%s]%s%s%s%s%s%s%s",r,h,q?sprintf("[tabid=%s]",q):"",p||0===p?sprintf("[docnum=%s]",p):"",s?sprintf("[url=%s]",s):"",j||0===j?sprintf("[aid=%s]",j):"",l?sprintf("[msg=%s]",l):"",t?sprintf("[docstate=%s]",t):"",e);n?d=d+h+"\n":console.log(h)}}}return n?d:!0};this.reset=function(){g=[];return!0};var u={DE1:"created %s icons on ASP page",DE2:"created %s icons on generic page",DE3:"created %s icons the old way",DE4:"created %s icons by filling",DE5:"executing NEXT double-password hack to get website to activate %s",
DE6:"retrying setval_bestmatch INPUT field detection; not ignoring hidden fields",DE7:"no form, no id/name, no joy",DE8:"executing PREV double-password hack to get website to activate %s",DE9:"executing double-secret password hack to get website to activate %s",DE10:"switching field from text to password from LP_setval",DE11:"switching field from text to password from chk_form_has_password",DE12:"ASP/bgicon login",DE13:"EVALUATING HIDDEN FORM, NOT IGNORING HIDDEN FIELD ANYMORE %s",DE14:"looking for orphaned INPUT elements",
DE15:"entered setupIcons()",DE16:"trying generic strategy %s",DE17:"creating icon on input %s",DE18:"create failed on %s",DE19:"detected ASP.NET form, two if by sea",DE20:"detected ASP.NET form, one if by land",DE21:"trying alternate strategy for ASP page %s",DE22:"combineddummy ignore on %s/%s",DE23:"Skipping field that smells like a search field",DE24:"Skipping disabled field",DE25:"Skipping non-displayed field",DE26:"too many orphan password fields found",DE27:"orphan and isolated login field found",
DE28:"fieldname %s is blacklisted, skipping",DE29:"form %s has no password field?  Ignored",DE30:"form is not visible: cannot be signup form",DE31:"form %s smells like a sign up form: name/classname",DE32:"form is not signup: prelim test failed",DE33:"form %s has a signup button, loosening detection requirements",DE34:"found visible non-pw field for signup form, eltid=%s",DE35:"chk_form_ask_generate OTP field ignore on %s",DE36:"skipping invisible non-pw field for signup form, eltid=%s",DE37:"form %s is not a signup form, too many pw fields [PW:%s/NON:%s]",
DE38:"form %s is not a signup form, too many non-pw fields [PW:%s/NON:%s]",DE39:"form %s is a signup form, has enough pw fields [PW:%s/NON:%s]",DE40:"form %s is a signup form, has enough pw and non-pw fields [PW:%s/NON:%s]",DE41:"form %s does not smell like signup form, not enough fields [PW:%s/NON:%s]",DE42:"[%s] form=%s field=%s appears to be current PW field in a change password form, offergenerate=false",DE43:"[%s] form=%s field=%s appears to be current PW field in a change password form, offergenerate=false",
DE44:"[%s] form=%s field=%s setting up generate click listener on icon",DE45:"[%s] orphan field=%s setting up generate click listener on icon",DE46:"form %s appears to be a search form based on name/action, do not try to fill",DE47:"form %s is not visible: cannot be non-login form",DE48:"form %s appears to be a search form based on name/classname, do not try to fill",DE49:"form %s appears to be a non-login form",CA1:"Change in Progress, skipping %s",CA2:"Executing PW Change - perhaps skip some processing in this context?",
CA3:"unexpected click flavor",CA4:"[docnum:%s][state:%s] clicking element ty=%s val=%s",CA5:"[docnum:%s][state:%s] unable to find element in this frame to click : ty=%s val=%s",CA6:"comparing %s with %s",CA7:"failed javascript consistency check",CA8:"[%s] executing JS: %s",CA9:"running validate_page_fields in frame %s for %s",CA10:"[%s] returning true, matched success url %s",CA11:"[%s] returning false, matched failure url %s",CA12:"[%s] DID NOT FIND REQUIRED FIELD ty=%s val=%s",CA13:"[%s] FOUND REJECT FIELD %s",
CA14:"[%s] FOUND INTERACTIVE FIELD %s",CA15:"[%s] retry %s in %s ms doc state is %s",CA16:"terminate loop [%s] VT:%s T:%s ctr%s elapsed time is %s sec",CA17:"WTF?? [%s] VT:%s T:%s ctr%s elapsed time is %s sec",CA18:"[%s] warning: interrogate rcvd no inputs or urls to check against",CA19:"[%s] ctr=%s elapsed=%s sec, validate_page_fields %s retry in %s second",CA20:"[%s] cpwbot_validate_state_result retval===null FIXME",CA21:"show overlay msg=%s",CA22:"failure, !msg",CA23:"filling element ty=%s val=%s should_click=%d should_fill_via_keys=%d",
CA24:"unable to find element ty=%s val=%s",CA25:"Change in Progress, skipping setupIcons",CA26:"skipping setupIcons() due to url test",CA27:"setupIcons() proceeding on %s",CA28:"setupIcons() probably caught cross-domain error, abort : %s",CV1:"specialsite TRUE",CV2:"fillfield : Setting g_passedequivdomains %s=%s",CV3:"fillfield : Setting g_passedequivdomains to NULL",CV4:"LP_compare_tlds : comparing tlds: tld1=%s tld2=%s",CV5:"LP_compare_tlds : tlds are equal",CV6:"LP_compare_tlds : tlds are equal because of equivdomains",
CV7:"LP_compare_tlds : tlds are different",CV8:"XDOMAIN:uniqid=%s index=%s time=%s from=%s : valset:DIFFERENT TLD : tld=%s actiontld=%s v.length=%s type=%s",CV9:"XDOMAIN:uniqid=%s : creating cuz tld didn't exist",CV10:"XDOMAIN:uniqid=%s : tld already created but actiontld not created yet, so sleeping and retrying later",CV11:"XDOMAIN:uniqid=%s : showing security prompt cuz we never did it before for actiontld",CV12:"XDOMAIN:uniqid=%s : valset:Allowing autofilling because user accepted security prompt to allow fill. Removing neverurl for url=%s",
CV13:"XDOMAIN:uniqid=%s : valset:Skipping autofilling because user refused security prompt to allow fill. Adding neverurl for url=%s",CV14:"XDOMAIN:uniqid=%s : valset:Using cached value on whether to allow autofill for %s val: %s",CV15:"XDOMAIN:uniqid=%s : valset:Skipping field autofilling because user refused to allow fill on: %s val: %s",CV16:"XDOMAIN:uniqid=%s valset:Allowing field autofilling because user accepted to allow fill on: %s val: %s",CV17:"XDOMAIN:uniqid=%s : valset:Skipping field autofilling because field is not visible on: %s val: %s",
CV18:"XDOMAIN:valset:NOT DOING ANYTHING CUZ reqinfo IS NULL tld=%s actiontld=%s",CV19:"XDOMAIN:valset:SAME TLD : tld=%s actiontld=%s",CV20:"XDOMAIN:valset:NOT COMPARING TLD : tld=%s",CV21:"hotkey or contextmenu triggered autofill detect & force",SS1:"picked submit %s by ID %s",SS2:"picked submit %s by NAME %s",SS3:"warning: multiple elements with NAME %s",SS4:"picked submit INPUT by VALUE %s",SS5:"picked submit Anchor by HREF %s",SS6:"picked submit %s by XPATH %s",SS7:"picked submit %s by CSS Selector %s",
SS8:"issuing click to %s",SS9:"picked an INPUT type=submit after password field and issued click to it",SS10:"picked an INPUT type=image after password field and issued click to it",SS11:"picked an INPUT type=button after password field and issued click to it",SS12:"fallback submit",SS13:"issued submit event to form %s",SS14:"NO ACTIVE FORM, defer submit",FF1:"deleting iframe named %s",FF2:"SPECIAL SITE: create icon on field %s",FF3:"SPECIAL SITE: create icon on field %s",FF4:"SPECIAL SITE: ignoring field %s",
FF5:"skipping loginform icon create on %s because field is too thin",FF6:"skipping nonloginform icon create on %s because field is too thin",FF7:"skipping default-icon create on %s because field is too thin",FF8:"skipping nonloginform icon create on %s because it looks like a search field",FF9:"skipping nonloginform icon create on %s because it is read-only",FF10:"CONFLICT: form %s is a signup form and login form; treat as a signup form and present formfill options",FF11:"icon create on displayed field %s for form %s",
FF12:"CLICK ON INPUT, process it",FF13:"skip icon create on hidden field %s for form %s",AO1:"",AO2:"",AO3:"",AO4:"",AO5:"",ZZZ:"final placeholder"}};
