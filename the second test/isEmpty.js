var isEmpty = function(obj) {
    if (typeof obj=="object"){
        let a=Object.keys(obj);
        if(a[0]==null){
            return true;
        }else return false;
    }
    if (typeof obj!="object"){
        if (obj[0]==null){
            return true;
        }else return false;
    }
};
obj={"x":5,"y":42};
console.log(isEmpty(obj));
obj={};
console.log(isEmpty(obj));
obj=[null,false,0];
console.log(isEmpty(obj));

