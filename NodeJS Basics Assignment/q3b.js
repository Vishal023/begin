const request= require('request');
const fs=require('fs');
request('http://google.com').pipe(fs.createWriteStream('.\\GooglePage\\gpage.html'))