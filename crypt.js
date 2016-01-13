
  function dopass(str,key){
    var r = auth_code(true,str,key);
    return (r!="" && r!=undefined)?r:auth_code(false,str,key);
  }

  function auth_code(decode,str,key) {
    var ckey_length = 12;
    var tmp;
    str=escape(str);
    var SECKEY = "420da90a3e98af5b8481e659af1f8fdb8cecd974b9f3f29672376cc58cc68e3b";
    key = hex_md5(SECKEY + key);
    var md5_key = hex_md5(key);
    var keya = hex_md5(md5_key.substr(0,16));
    var keyb = hex_md5(md5_key.substr(16,16));
    var randKey = getRandKey(ckey_length);
    var keyc = decode?str.substr(0,ckey_length):randKey;

    var cryptkey = keya + hex_md5(keya + keyc);
    var key_length = cryptkey.length;

    var string = decode?base64decode(str.substr(ckey_length)):'0000000000'+hex_md5(str + keyb).substr(0,16) + str;
    var string_length = string.length;
    var result = "";
    var box = [];
    for(i = 0 ;i <= 255; i++){
      box[i] = i;
    }
    var rndkey = [];
    for(i = 0; i <= 255; i++) {
     rndkey[i] = ord(cryptkey[i % key_length]);
   }

   for(j = i = 0; i < 256; i++) {
     j = (j + box[i] + rndkey[i]) % 256;
     tmp = box[i];
     box[i] = box[j];
     box[j] = tmp;
   }  

   for(a = j = i = 0; i < string_length; i++) {
     a = (a + 1) % 256;
     j = (j + box[a]) % 256;
     tmp = box[a];
     box[a] = box[j];
     box[j] = tmp;
     result += chr(ord(string[i]) ^ (box[(box[a] + box[j]) % 256]));  
   }  

   var base64_str = base64encode(result);
   if(decode){
    var tmp = hex_md5(result.substr(26) + keyb);
    tmp = tmp.substr(0,16);
    if(result.substr(0,10) == 0 && result.substr(10,16) == tmp)
      return unescape(result.substr(26));
  }else
  return keyc + base64_str.replace(/=/, "");
}
function getRandKey(len){
  if(!len){len=16;}
  rcode='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  l=rcode.length;
  var ccode='';
  for(i=0;i<len;i++){ccode+=rcode.substr(parseInt(l*Math.random()),1);}
    return ccode;
}