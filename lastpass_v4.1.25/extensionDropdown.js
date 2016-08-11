ExtensionDropdown=function(d){var m=$(d.body),k=d.getElementById("items"),q=d.getElementById("searchResults"),r=d.getElementById("recentSites"),z=d.getElementById("identitiesMenuItem"),ia=d.getElementById("matchingSitesTopLevel"),ja=d.getElementById("matchingSites"),n=$("#groupLabel"),A=$("#backButton"),L=$("#debugconsole"),M=$("#encryptedExportMenuItem"),N=$("#wifiExportMenuItem"),O=$("#matchingSitesMenuItem"),P=$("#recentSitesMenuItem"),j=$("#container"),s=$("#searchInput"),Y=$("#applicationsMenuItem"),
Z=null,t=null,u=null,v=null,B=null,C=null,D=null,aa=null,E=!1,F=!1,Q=!1,R=!1,S={},h=null,G={},f=[],e={},T=function(a){n.empty();if(a){var b=a.getName(),b=b.replace(/\\/g," \\ "),c=b.indexOf("\\",b.length/2);-1===c&&(c=b.lastIndexOf("\\"));if(0<c){var g=LPTools.createElement("div","textOverflowContainer groupLabel");g.appendChild(LPTools.createElement("span",null,b.substring(0,c)));n.append(LPTools.createElement("span","textTail","\u00a0"+b.substring(c)));n.append(g);LPTools.setupMiddleEllipsis(n)}else n.append(LPTools.createElement("span",
"groupLabel",b));n.find(".groupLabel").attr("title",a.toString())}};e.GroupState=function(a){var b=LPTools.getNavIndex();this.pop=function(){a.rebuildItems();LPTools.setNavIndex(b);T(a._model)}};e.SearchState=function(){var a=new e.CSSState("searchItem",{restoreKeyboardNav:!1});this.pop=function(){ba();a.pop()}};e.TopLevelMatchingSitesState=function(a){var b=new e.CSSState("matchingSites"),c=new e.GroupState(a);this.pop=function(){c.pop();b.pop()}};var w=m.attr("class");e.CSSState=function(a,b){var c=
w;m.removeClass(w);m.addClass(a);w=a;LPTools.getOption(b,"applyKeyboardNav",!0)&&LPTools.addKeyBoardNavigation($(".extensionMenuItem:visible"),{selectFirst:!0});this.pop=function(){T(null);m.removeClass(w);m.addClass(c);w=c;LPTools.getOption(b,"restoreKeyboardNav",!0)&&LPTools.addKeyBoardNavigation($(".extensionMenuItem:visible"));if(b&&"function"===typeof b.onPop)b.onPop()}};var ca=function(){LPTools.parseUserSpecificMenu(d.getElementById("mainMenu"),LPProxy.getAccountClass());$("#username").text(bg.g_username);
H()},H,da=function(){j.LP_removeAttr("style");var a=j.outerHeight();LPPlatform.setDropdownPopoverSize(a,j.outerWidth());j.css("height",a);LPTools.addKeyBoardNavigation($(".extensionMenuItem:visible"))};H=function(){if(0===f.length)da();else{var a=f[0].pop;f[0].pop=function(){a();da()}}};var ea=function(){LPFeatures.updateFeatures({"import":!0,noexport:!1,show_notes:!0,hideidentities:!1,show_formfills:!0})},fa=function(a){var b;LPProxy.getPreference("showAcctsInGroups",!0)&&(a=LPProxy.assignItemsToGroups(a,
!1),b={separateFavorites:!0});return new Container(a,b)},ga=function(a,b,c){for(var g=[],d=0,e=h.length;d<e;++d)g.push(new MatchingAccountDisplay(LPProxy.getSiteModel(h[d].aid)));b=new Container(g,b);b.setElement(a);b.rebuildItems();c&&H()},ba=function(){LPTools.removeDOMChildren(q);for(var a=0,b=D.length;a<b;++a){var c=D[a],g=c.build();c.postBuild(g);q.appendChild(g)}0===D.length&&(a=LPTools.buildEmptyPlaceholder(Strings.translateString("No Matching Results"),"extensionSearchPlaceholder",q),q.appendChild(a));
LPTools.addKeyBoardNavigation(q.children,{rightArrowSelector:".moreItem",selectFirst:!0})},U,V=null;U=function(a){0<a.length?(F&&(D=aa.getSearchResultItems(a),ba()),E||(f.push(new e.CSSState("search",{applyKeyboardNav:!1,onPop:function(){s.val("")}})),E=!0)):V&&0<V.length&&(x(),E=!1);V=a};var l=function(a,b){return function(){F?b():G[a]=b}},y=function(a){a||(a={});a.saveOptions={source:"icon"};return a},W=function(a){LPPlatform.openTabDialog("formFill",y(a))},ha=function(a){a.appendChild(LPTools.createElement("li",
"extensionMenuItem none","None Available"))},x=function(){var a=f.pop();a&&a.pop()},X=function(){dialogs.generatePassword.getDialog().close();A.unbind("click",X)},I=null,J=function(a,b,c){a.isEmpty()&&(a=LPTools.createElement("div","emptyView"),a.appendChild(LPTools.createElement("img",{src:"images/vault_4.0/"+b,"class":"emptyViewIcon"})),a.appendChild(LPTools.createElement("h1","emptyViewText",c)),document.getElementById("items").appendChild(a))};s.LP_addSearchHandlers("inputDialog",function(a){U(a)});
A.bind("click",x);$("[childview]").bind("click",function(a){for(var b=a.target,c=null;null!==b&&!(c=b.getAttribute("childview"),null!==c);)b=b.parentElement;f.push(new e.CSSState(c,void 0));a&&(a.stopPropagation(),a.preventDefault())});$("#addSite").bind("click",function(a){bg.get_selected_tab_data_no_extension(null,function(a){bg.lpevent("m_add");LPPlatform.openTabDialog("site",y({defaultData:{url:a?a.url:""}}));LPPlatform.closePopup()});a.stopPropagation()});$("#saveAllEnteredData").bind("click",
function(){bg.lpevent("m_saed");bg.saveall()});$("#addNote").bind("click",function(){bg.lpevent("m_addn");LPPlatform.openTabDialog("note",y(void 0))});$("#addFormFill").bind("click",function(){bg.lpevent("m_af");W()});$("#addCreditCard").bind("click",function(){bg.lpevent("m_af");W({defaultData:{profiletype:FormFill.prototype.FORM_FILL_TYPE_CREDIT_CARD}})});$("#clearForms").bind("click",function(){bg.lpevent("m_clrf");bg.clearforms("icon")});var K=null;$("#chooseProfile").bind("click",function(){dialogs.chooseProfile.open({preSetup:function(a){if(null===
K){var b=dialogs.chooseProfile.parentElementID,c=a.options.hideHeader;K=function(){dialogs.chooseProfile.parentElementID=b;a.options.hideHeader=c;a.$element.css("min-height","")}}a.$element.css("min-height",0);dialogs.chooseProfile.parentElementID="chooseProfileCreditCard";a.options.hideHeader=!0},onClose:function(){x()},saveOptions:{source:"icon"}})});$("#vaultMenuItem").bind("click",function(){bg.lpevent("m_ov");bg.openvault()});$("#sitesMenuItem").bind("click",l("sites",function(){u.rebuildItems(k);
J(u,"Empty_Site.png",Strings.translateString("Remember every password"))}));$("#formFillsMenuItem").bind("click",l("formFills",function(){B.rebuildItems(k);J(B,"Empty_Form.png",Strings.translateString("Fill Every Form"))}));$("#applicationsMenuItem").bind("click",l("applications",function(){C.rebuildItems(k);J(C,"Empty_Site.png",Strings.translateString("Remember every password"))}));$("#generateMenuItem").bind("click",function(){dialogs.generatePassword.open({preSetup:function(a){if(null===I){var b=
dialogs.generatePassword.parentElementID,c=a.options.hideHeader,g=a.dynamicHeight;I=function(){dialogs.generatePassword.parentElementID=b;a.options.hideHeader=c;a.useDynamicHeignt(g)}}dialogs.generatePassword.parentElementID="extensionDropdownGeneratePassword";a.options.hideHeader=!0;a.useDynamicHeignt(!1)},onClose:function(){x()},onCopy:function(){LPPlatform.closePopup(!0)},saveOptions:{source:"icon"}});A.unbind("click",X);A.bind("click",X)});$("#notesMenuItem").bind("click",l("notes",function(){v.rebuildItems(k);
J(v,"Empty_Note.png",Strings.translateString("Store Every Note"))}));$("#clearMostRecent").bind("click",function(){bg.clearrecent();LPTools.removeDOMChildren(r);ha(r)});var p=l("mostRecent",function(){if(!Q){var a=bg.getClearRecentTime(),b=bg.lpGetPref("recentUsedCount",10),c=u.getItemChildren().concat(v.getItemChildren());c.sort(VaultItemBaseDisplay.prototype.sortByMostRecent);for(var g=[],d=0,e=c.length;d<e&&d<b;++d){var f=c[d];f.getLastTouchValue()>=a&&g.push(f._model.newDisplayObject())}0<g.length?
(new Container(g,{sortFunction:VaultItemBaseDisplay.prototype.sortByMostRecent})).initialize(r):ha(r);Q=!0}LPTools.addKeyBoardNavigation(r.children,{rightArrowSelector:".moreItem",selectFirst:!0})});P.bind("click",p);p=l("matchingSites",function(){R||(ga(ja),R=!0);LPTools.addKeyBoardNavigation(d.getElementById("matchingSites").children,{rightArrowSelector:".moreItem",selectFirst:!0})});O.bind("click",p);$("#prefMenuItem").bind("click",function(){bg.lpevent("m_op");bg.openprefs()});$("#helpMenuItem").bind("click",
function(){bg.lpevent("m_oh");bg.openhelp()});$("#adminConsoleMenuItem").bind("click",function(){bg.lpevent("m_oec");bg.openentconsole()});$("#logoutMenuItem").bind("click",function(){bg.lpevent("m_lo");bg.loggedOut(!1,"menu")});$("#challengeMenuItem").bind("click",function(){bg.lpevent("m_sec");bg.openseccheck()});$("#favoritesMenuItem").bind("click",function(){bg.lpevent("m_of");bg.openfavorites()});$("#aboutMenuItem").bind("click",function(){bg.lpevent("m_abt");bg.openabout()});L.bind("click",
function(){bg.lpevent("m_dbgcon");bg.opendebugtab()});LPPlatform.setupDropdownImportMenu(j);$("#csvExportMenuItem").bind("click",function(){bg.lpevent("m_e");bg.openexport()});$("#formFillExportMenuItem").bind("click",function(){bg.lpevent("m_eff");bg.formfillexport()});M.bind("click",function(){bg.lpevent("m_elp");bg.openlastpassexport()});N.bind("click",function(){bg.lpevent("m_ewlan");bg.wlanexport()});$("#printSitesMenuItem").bind("click",function(){bg.lpevent("m_p");bg.openprint(!1)});$("#printNotesMenuItem").bind("click",
function(){bg.lpevent("m_pn");bg.openprint(!0)});$("#refreshMenuItem").bind("click",function(){bg.lpevent("m_ref");LPProxy.refreshSites()});$("#clearCachMenuItem").bind("click",function(){bg.lpevent("m_cl");bg.clearCache(!1,!0,!1)});$("#myAccountMenuItem").bind("click",function(){bg.lpevent("m_mya");bg.openmyaccount()});$("#sessionsMenuItem").bind("click",function(){bg.lpevent("m_ses");bg.opensessions()});LPPlatform.addEventListener(window,"unload",function(){Topics.get(Topics.CLEAR_DATA).publish()});
m.on("click",".extensionMenuItem, .footer",function(){LPPlatform.closePopup()});LPFeatures.allowGift()&&(p=$("#specialOfferMenuItem"),p.show(),p.bind("click",function(){bg.openURL(LPProxy.getBaseURL()+"gift.php")}));Topics.get(Topics.PUSH_STATE).subscribe(function(a){f.push(a)});Topics.get(Topics.EDIT_SITE).subscribe(function(a){a.vaultItem=a.vaultItem.getID();LPPlatform.openTabDialog("site",y(a))});Topics.get(Topics.EDIT_NOTE).subscribe(function(a){a.vaultItem=a.vaultItem.getID();LPPlatform.openTabDialog("note",
y(a))});Topics.get(Topics.EDIT_FORM_FILL).subscribe(function(a){a.vaultItem=a.vaultItem.getID();W(a)});Topics.get(Topics.EDIT_APPLICATION).subscribe(function(a){a.vaultItem=a.vaultItem.getID();LPPlatform.openTabDialog("application",a)});Topics.get(Topics.IDENTITY_ENABLE).subscribe(function(a){LPProxy.enableIdentity(a);Z=a});Topics.get(Topics.CONFIRM).subscribe(function(a){LPPlatform.openDropdownPopoverDialog("confirmation",a)});Topics.get(Topics.REPROMPT).subscribe(function(a){LPPlatform.openDropdownPopoverDialog("reprompt",
{successCallback:a})});Topics.get(Topics.LEFT_ARROW).subscribe(function(){LPTools.disableMouse();x()});Topics.get(Topics.CLEAR_DATA).subscribe(function(){for(var a=f.length-1;-1<a;--a)f[a].pop();f=[];LPTools.setNavIndex(0);s.val("");R=Q=F=E=!1;S={};G={};h=null;I&&I();K&&K();j.removeClass("initialized");Dialog.prototype.closeAllDialogs(!0)});return{updateFeatures:ea,translate:function(){Strings.translateStrings(Strings.Vault);Strings.translate(d.body);ea()},setup:function(){j.addClass("loading");L.LP_removeAttr("style");
M.LP_removeAttr("style");N.LP_removeAttr("style");Y.LP_removeAttr("style");bg.is_user_debug_enabled()&&L.show();bg.have_binary()&&(M.show(),bg.g_is_win&&N.show());LPTools.hasProperties(bg.g_applications)&&Y.show();h=bg.getmatchingsites(!1,!0,!1);for(var a=0,b=h.length;a<b;++a)S[h[a].aid]=!0;(a=LPProxy.getPreference("toplevelmatchingsites",!1))||0===h.length?(O.LP_removeAttr("style"),P.addClass("divider")):(O.show(),P.removeClass("divider"));a?l("topLevelMatchingSites",function(){ga(ia,{autoExpandSingleItem:!1,
moreOptionsElement:d.getElementById("matchingSites"),moreOptionsState:e.TopLevelMatchingSitesState,addLastClass:!1},!0)})():0<h.length&&$("#matchingSiteCounter").text(h.length);ca();j.addClass("initialized");s.focus();setTimeout(function(){LPProxy.initializeModel();t=LPProxy.getIdentities();LPProxy.enableCurrentIdentity(t);if(0<t.length){var a=Z,a=Strings.translateString("Identities")+" ("+a.getName()+")",b=z.firstChild;3!==b.nodeType?(b=d.createTextNode(a),z.insertBefore(b,z.firstChild)):b.textContent=
a;for(var a=[],b=0,f=t.length;b<f;++b)a.push(t[b].newDisplayObject());(new IdentityContainer(a)).initialize(d.getElementById("identities"))}else $(z).hide();u=fa(LPProxy.getSites());u.setElement(k);v=fa(LPProxy.getNotes());v.setElement(k);B=new Container(LPProxy.getFormFills());B.setElement(k);C=new Container(LPProxy.getApplications());C.setElement(k);aa=new Container(LPProxy.getAllItems(),{moreOptionsState:e.SearchState});F=!0;j.removeClass("loading");for(var h in G)G[h]();(h=s.val())&&U(h);H()},
0)},setupUserSpecific:ca,State:e,isMatchingSite:function(a){return!0===S[a]},setGroupLabel:T}}(document);
