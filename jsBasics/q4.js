function SortArray(arr){
    
    let originalArray=[];
    this.originalArray=arr;

    this.doSort=function(){
               this.originalArray.sort(
                   function(a,b) {
                       return a-b;
                   }
               );   
    }
    
    this.getSortedArray = function(){
        this.doSort();
        let res=[];
        res=this.originalArray;
        return res;
    }
}

function SortObjectArray(arr){
    SortArray.call(this,arr);
    this.doSortObj=function(key){
        this.originalArray=arr;
        this.originalArray.sort(
            function(a, b){
                let x = a[key];
                    let y = b[key];
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
            }
        );
        
    }
    this.getSortedArrayobj = function(key){
        this.doSortObj(key);
        let res=[];
        res=this.originalArray;
        return res;
    }
   
}

let test=new SortObjectArray([{'name':'vijay','age':24},
{'name':'das','age':42},
{'name':'sagar','age':27}
]);



