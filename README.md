#dopass

演示地址: [http://dopass.applinzi.com/](http://dopass.applinzi.com/)


Lastpass的dopass版本: [http://git.oschina.net/splot/dopass/tree/lastpass_v3.2/](http://git.oschina.net/splot/dopass/tree/lastpass_v3.2/)

支持chrome内核的浏览器都可安装(chrome、360、百度、搜狗...)

在lastpass的站点账号编辑页面可以方便的对信息进行加解密，有效保护信息安全

**lastpass已经对信息加解密过的，为什么还需要额外加解密？**
1. 个人强迫症，总担心黑客风险、lastpass自有bug等原因导致信息泄露
2. lastpass可以防别人，却防不住自己周围的人，一旦登录lastpass后，你的各种账号信息就完全呈现在电脑使用者面前。使用lastpass自有的密码加密，一是只能加密密码，而是解密太麻烦。

**Dopass的安全性高吗？**
1. 非常高，如果自定义内置key，则无法破解。
2. 查看dopass源码可以发现内置了一个key(crypt.js:16)，如果破解者知道是使用dopass算法进行加密的，那破解难度和用户的key成正比关系。
3. 但是如果破解者不知道是使用dopass加密或者**用户自行修改了内置key**，那么将无法破解，即使把全球所有的计算资源加起来，也不可破解。


