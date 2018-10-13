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
	this.getKeyFields=function(jsonArr){
		let res=[];
		for(let i=0;i<jsonArr.length;i++){
			res.push(jsonArr[i].channel);	
		}
		return res;
	}
}
let test=new MetadataParser();
test.set_channel('a');
test.set_keyField('channel');
test.set_version('2.0');

let dummyObjArr=[{'channel':'A'},{'channel':'B'},
{'channel':'C'}];







