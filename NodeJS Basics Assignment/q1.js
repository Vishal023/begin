
var fs = require('fs');
var pars = require('xml-parser');

class    Xmlparse{
    parse(path){
        var xml = fs.readFileSync(path, 'utf8',(err,data)=>{
                if(err){
                    console.log("***File Not Found***");
                   
                }
                else 
                return data;
            }
        );
        var inspect = require('util').inspect;
        var obj = pars(xml); 
        return inspect(obj, { colors: true, depth: Infinity }); 
    }
        
}

module.exports = Xmlparse;