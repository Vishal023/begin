function MetadataParser(){
	let _version="";
	let _channel="";
	let _keyField="" ;
	this.set_version=function(val){
		_version=val;
	}
	this.set_channel= function(val){
		_channel=val;
	}
	this.set_keyField=function(val){
		_keyField=val;
	}
	this.getKeyFields=function(jsonArr,ch){
		let res=[];
		for(let i=0;i<jsonArr.length;i++){
			res.push(jsonArr[i][ch]);	
        }
        let unique = res.filter( this.onlyUnique ); 
		return unique;
    }
    this.groupObjectsBy=function(jsonArr,ch){
        let res=[];
        res=this.getKeyFields(jsonArr,ch);
        let final=[];
		for(let i=0;i<res.length;i++){
            let objArr=[];
			for(let j=0;j<jsonArr.length;j++){                
                if(jsonArr[j][ch]===res[i])
                    objArr.push(jsonArr[j]);
            }
            final[res[i]]=objArr;
		}
		return final;
    }
    this.onlyUnique=function(value, index, self) { 
        return self.indexOf(value) === index;
    }
    
}
let test=new MetadataParser();
test.set_channel('a');
test.set_keyField('channel');
test.set_version('2.0');

let dummyObjArr=[
    {
      "channel": "A",
      "name": "shoe"
    },
    {
      "channel": "A",
      "name": "electronics"
    },
    {
      "channel": "B",
      "name": "apparel"
    },
    {
      "channel": "C",
      "name": "electronics"
    }
  ];
  console.log(test.groupObjectsBy(dummyObjArr,'channel'));
  console.log(test.groupObjectsBy(dummyObjArr,'name'));