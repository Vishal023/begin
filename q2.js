const Handlebars = require('Handlebars')
var source = require('./xmlDoc')
var template = Handlebars.compile(source);
const jsonData = require('./json')
function JsonToXml() {
    var wrapper = { objects: jsonData };
    var result = template(wrapper);
    return result
}
JsonToXml()

module.exports=JsonToXml
