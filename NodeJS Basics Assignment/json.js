
const prods=[{
    "product":{
        "baseId":"1",
        "feature":{
             "1": "parent",       
             "2": "first entry" 
        },
        "contentType":{ 
            "1": {         
                "value": "pure"       
                },       
            "2": {         
                "value": "mix"       
                } 
        },
        "isActive":true,
        "childProducts":[
            {
                 "baseId": "1-1",         
                 "isActive": true 
            },
            {
                "baseId": "1-2",         
                "isActive": true,
                "feature": {           
                    "1": "parent",           
                    "2": "first entry"         
                    }, 
                "searchTerms": {           
                    "0": "glue",           
                    "1": "adhesive",           
                    "2": "stick"         
                    }
            }
        ]
    },
    "product":{
        "baseId":"2",
        "isActive":true,
        "searchTerms": {           
                    "0": "glue",           
                    "1": "adhesive",           
                    "2": "stick"         
                    },
        "childProducts":[
            {
                "baseId": "2-1",         
                "isActive": true 
            },
            {
                "baseId": "2-1",         
                "isActive": true 
            }
        ]
    }
}];



function createHtml(data){
    let rawTemp=document.getElementById("petsTemplate").innerHTML;

    let compiledTemp= Handlebars.compile(rawTemp);

    let generatedTemp=compiledTemp(data);

    let result=document.getElementById("result").innerHTML=generatedTemp;

}

