var VaultToggle=function(){return{getVaultPage:function(){return g_newvault?"vault.html":"homelocal2.html"},useVault4_0:function(){return g_newvault},toggleVault4_0:function(a){g_newvault||(g_newvault=!0,drawIconAtRotation(0),a.close(),openvault())},toggleVault3_0:function(a){g_newvault&&(g_newvault=!1,drawIconAtRotation(0),a.close(),openvault())}}}(),g_newvault=!1;
