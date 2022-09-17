function Queue(){
    this.items=[]
    Queue.prototype.enqueue=function(element){
        this.items.push(element)
    }
    Queue.prototype.dequeue=function(){
        return this.items.shift()
    }
    Queue.prototype.front=function(){
        return this.items[0]
    }
    Queue.prototype.isEmpty=function(){
        return this.items.length-1==0
    }
    Queue.prototype.size=function(){
        return this.items.length
    }
    Queue.prototype.toString=function(){
        let resultString=''
        for(let i=0;i<this.items.length;i++){
            resultString+=this.items[i]+' '
        }
        return resultString
    }
}
let queue=new Queue()
queue.enqueue("abc")
queue.enqueue("sd")
queue.enqueue("d")
queue.enqueue("fess")
console.log(queue.toString())