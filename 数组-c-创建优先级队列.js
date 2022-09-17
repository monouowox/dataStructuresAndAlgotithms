/**
 * @description 优先级队列构造
 * @return {void}
 */
function PriorityQueue() {
    this.items = []
    // Queue.prototype.enqueue=function(element){
    //     this.items.push(element)
    // }
    PriorityQueue.prototype.dequeue=function(){
        return this.items.shift()
    }
    PriorityQueue.prototype.front=function(){
        return this.items[0]
    }
    PriorityQueue.prototype.isEmpty=function(){
        return this.items.length-1==0
    }
    PriorityQueue.prototype.size=function(){
        return this.items.length
    }
    PriorityQueue.prototype.toString=function(){
        let resultString=''
        for(let i=0;i<this.items.length;i++){
            resultString+=JSON.stringify(this.items[i]) + " "
        }
        return resultString
    }
    /**
     * @description 内部构造
     * @param {} element
     * @param {number} priority
     * @return {void}
     */
    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }
    PriorityQueue.prototype.enqueue = function (element, priority) {
        //使用内部构造
        let queueElement = new QueueElement(element, priority)
        if (this.items.length == 0) {
            this.items.push(queueElement)
        } else {
            if(queueElement.priority<this.items[0].priority){
                this.items.unshift(queueElement)
            }
            for (let i = 0; i < this.items.length; i++) {
                if (queueElement.priority > this.items[i].priority && (this.items[i + 1] == undefined || queueElement.priority < this.items[i + 1].priority)) {
                    this.items.splice(i+1, 0, queueElement)
                    break
                }
            }
        }
    }
}
let priorityQueue=new PriorityQueue()
priorityQueue.enqueue('a',1)
priorityQueue.enqueue('f',6)
priorityQueue.enqueue('c',3)
priorityQueue.enqueue('e',5)
priorityQueue.enqueue('b',2)
priorityQueue.enqueue('d',4)
console.log(priorityQueue.toString())
