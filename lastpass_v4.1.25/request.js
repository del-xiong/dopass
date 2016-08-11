LPRequest={};
(function(e){var f={},g=function(){for(var c in f)clearTimeout(f[c]);f={}};Topics.get(Topics.REFRESH_DATA).subscribe(g);Topics.get(Topics.CLEAR_DATA).subscribe(g);var j=0;e.getNewRequestID=function(){return++j};var k=function(c,a){return function(){for(var b=0,d=c.length;b<d;++b)c[b].unlock();a&&a.apply(window,arguments)}};e.makeRequest=function(c,a){if(a.confirm){var b=a.confirm;delete a.confirm;b.handler=function(){e.makeRequest(c,a)};Topics.get(Topics.CONFIRM).publish(b)}else{a.requestID=e.getNewRequestID();
b=null;LPTools.getOption(a,"showTimeWarning",!0)&&(b=setTimeout(function(){h(Strings.translateString("Sorry, this request is taking longer than normal."))},3E4),f[a.requestID]=b);if(a.items&&LPTools.getOption(a,"lockItems",!1)){var d=a.items;d instanceof Array||(d=[d]);var g=d,j=c;c=function(){for(var a=0,b=g.length;a<b;++a)g[a].lockForUpdate();j.apply(window,arguments)};a.success=k(d,a.success);a.error=k(d,a.error);a.confirm&&(a.confirm.closeHandler=k(d))}var m=b,n=function(l){try{Topics.get(Topics.REQUEST_SUCCESS).publish(a),
m&&(clearTimeout(m),delete f[a.requestID]),l&&Topics.get(Topics.SUCCESS).publish(l)}catch(b){LPPlatform.logException(b)}},d=a&&a.success?function(){var b=arguments,c=a.successMessage;0<b.length&&"string"===typeof b[0]&&(c="undefined"===typeof c?b[0]:c,b=Array.prototype.slice.call(b,1));try{a.success.apply(window,b)}catch(d){LPPlatform.logException(d)}n(c)}:n,h,p=b,q=function(b){try{switch(b||""){case "notoken":b=Strings.translateString("No token was provided. Request could not be completed.");break;
case "session_expired":b=Strings.translateString("ErrorSessionMsg");break;case "not_allowed":b=Strings.translateString("Your Shared Folder action failed. Please check your permissions before trying again");break;case "invalidxml":b=Strings.translateString("Invalid XML response.");break;case "invalidjson":b=Strings.translateString("Invalid JSON response.");break;case "offline":b=Strings.translateString("This request cannot be completed because you are currently offline.");break;case "":b=Strings.Vault.UNEXPECTED_ERROR}Topics.get(Topics.ERROR).publish(b);
Topics.get(Topics.REQUEST_ERROR).publish(a);p&&(clearTimeout(p),delete f[a.requestID])}catch(c){LPPlatform.logException(c)}};h=a&&a.error?function(b){q(b);a.error()}:q;a.params?b=[{params:a.params,requestArgs:a.requestArgs,success:d,error:h,status:a.status?function(b){Topics.get(Topics.REQUEST_STATUS).publish(b,a)}:null}]:(b=LPTools.getOption(a,"parameters",[]),b instanceof Array||(b=[b]),b.push(d),b.push(h));Topics.get(Topics.REQUEST_START).publish(a);try{c.apply(window,b)}catch(r){LPPlatform.logException(r),
h(Strings.Vault.UNEXPECTED_ERROR)}}};e.makeDataRequest=function(c,a){e.makeRequest(c,$.extend(!0,a,{dialogRequest:!1}))};e.makeUpdateRequest=function(c,a){e.makeRequest(c,$.extend(!0,a,{requestSuccessOptions:{incrementAccountsVersion:!0}}))};e.makeLockItemUpdateRequest=function(c,a){this.makeUpdateRequest(c,$.extend(a,{lockItems:!0}))}})(LPRequest);
