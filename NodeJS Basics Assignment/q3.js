var request = require('request')
  , path = require('path')
  , fs = require('fs')
  , URL_TO_REQUEST = 'https://www.google.com'
  , filename ='GPage.html'
;
request(URL_TO_REQUEST)
  .pipe(fs.createWriteStream(path.join('./GooglePage', filename)))