function Set() {
    this.items = {}
    Set.prototype.add = function (value) {
        let flag=false
        if(Array.isArray(value)){
            if(value.length==0) return flag
            for(let i=0;i<value.length;i++){
                if(typeof value[i]=='object'){
                    this.add(value[i])
                    continue
                }
                if (this.has(value[i])) {
                    continue
                }
                this.items[value[i]] = value[i]
                flag=true
            }
        }else if(typeof value=='object'){
            let arr=Object.values(value)
            if(arr.length==0) return false
            for(let i=0;i<arr.length;i++){
                console.log('arr[i]: ', arr[i]);
                console.log('typeof arr[i]: ',typeof arr[i]);
                if(typeof arr[i]=='object'){
                    this.add(arr[i])
                   continue
                }
                if (this.has(arr[i])) {
                    continue
                }
                this.items[arr[i]] = arr[i]
                flag=true
            }
        }else{
            if(this.has(value)){
                return flag
            }
            this.items[value]=value
            flag=true
        }
        return flag
    }
    Set.prototype.has = function (value) {
        return this.items.hasOwnProperty(value)
    }
    Set.prototype.remove=function(value){
        if(this.has(value)){
            delete this.items[value]
            return true
        }
        return false
    }
    Set.prototype.clear=function(){
        this.items={}
        return true
    }
    Set.prototype.size=function(){
        return Object.keys(this.items).length
    }
    Set.prototype.values=function(){
        return Object.keys(this.items)
    }
    Set.prototype.intersection=function(value){
        let intersection=new Set()
        let arr1=value.values()
        let arr2=this.values()
        for(let i=0;i<arr1.length;i++){
            for(let j=0;j<arr2.length;j++){
                if(arr1[i]==arr2[j])
                intersection.add(arr1[i])
            }
        }
        return intersection
    }
    Set.prototype.difference=function(value){
        let difference=new Set()
        let arr1=value.values()
        let arr2=this.values()
        difference.add(arr2)
        for(let i=0;i<arr1.length;i++){
            for(let j=0;j<arr2.length;j++){
                if(arr1[i]==arr2[j])
                difference.remove(arr1[i])
            }
        }
        return intersection
    }
    Set.prototype.isSonSet=function(value){
        let arr=this.values()
        for(let i=0;i<arr.length;i++){
            if(value.has(arr[i])){
                continue
            }
            return false
        }
        return true
    }
}

let set=new Set()
console.log('set.add("abc"): ', set.add("abc"));
console.log('set.add("123"): ', set.add("123"));
console.log('set.add("123"): ', set.add("123"));
console.log('set.add("爆富"): ', set.add("爆富"));
console.log('set.add("爆富"): ', set.add([12,3,4,5]));
console.log('set.add("爆富"): ', set.add({a:1,b:2}));
console.log('set.add("爆富1"): ', set.add({a:1,b:2}));
console.log('set.add("爆富1"): ',JSON.stringify(set.add({a:{c:2,d:1},b:{e:1,f:2}})));
console.log('set.add("爆富1"): ',JSON.stringify(set.add({a:{c:2,d:1},b:{e:1,f:2},c:['账单','欲望','kjkkk']})));
console.log('set: ', set.remove(123));
// console.log('set: ', set.clear());
// console.log('set: ', set.values());
let set2=new Set()
set2.add([1,2,3,'zhjdfsjkadjf'])
console.log('set.intersection: ', set.intersection(set2).values());
console.log('set: ', set);
module.exports=Set