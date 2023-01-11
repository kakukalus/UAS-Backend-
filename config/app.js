(function(){"use strict";var e=require("crypto"),n=require("base64url"),i=require("fs"),r=Date.now(),t=n(e.randomBytes(64));i.appendFile("./config/app.js","\n//UNIX="+r+"\n//APP_KEY="+t,function(e){if(e)throw e}),i.appendFile(".env","\n#UNIX="+r+"\n#APP_KEY="+t,function(e){if(e)throw e;process.exit(0)})}).call(this);

//UNIX=1673419360425
//APP_KEY=GiYFBFwfdLaIhotGSEd2gReC97vENBbqhcJMY0ATkypI9wG8QfD0JlHccIvthQGNHKwlmh1nBlsY0schSSYVdg