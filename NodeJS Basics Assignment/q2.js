const Handlebars=require('Handlebars')
var source =require('./xmlDoc')
var template = Handlebars.compile(source);
const jsonData=require( './json')
var wrapper  = {objects: jsonData};
var result = template(wrapper);
console.log(result)