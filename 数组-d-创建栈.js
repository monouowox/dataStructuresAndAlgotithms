//栈
function Stack(){
    //栈的属性  数组
    this.items=[]
    // 栈的相关操作
    Stack.prototype.push=function(element){
        this.items.push(element)
    }
    Stack.prototype.pop=function(){
        this.items.pop()
    }
    Stack.prototype.peek=function(){
        return this.items[items.length-1]
    }
    Stack.prototype.isEmpty=function(){
        return items.length-1==0
    }
    Stack.prototype.size=function(){
        return items.length
    }
    Stack.prototype.toString=function(){
        let resultString=''
        for(let i=0;i<this.items.length;i++){
            resultString+=this.items[i]+' '
        }
        return resultString
    }
}
let stack=new Stack()
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)

console.log(stack.toString())