
var fs = require('fs');
var xmlParser = require('xml-parser');
class Xmlparse {
    parse(path) {
        var xml = fs.readFileSync(path,'utf8');
        // var inspect = require('util').inspect;
        return xmlParser(xml);
        // return inspect(obj, { colors: true, depth: Infinity });
    }
}
module.exports = Xmlparse;