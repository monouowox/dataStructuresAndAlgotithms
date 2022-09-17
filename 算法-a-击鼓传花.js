// 击鼓传花游戏：一群人围成一圈传花，一个人敲鼓，一个人喊停，喊停之后，花在谁手里，谁表演节目。
// 击鼓传花算法：一群人围成一圈传花，一个人敲鼓，一个人喊停，喊停之后，花在谁手里，谁表淘汰，剩最后一个人获胜。

/**
 * @description 队列构造
 * @return {void}
 */
function Queue() {
    this.items = []
    Queue.prototype.enqueue = function (element) {
        this.items.push(element)
    }
    Queue.prototype.dequeue = function () {
        return this.items.shift()
    }
    Queue.prototype.front = function () {
        return this.items[0]
    }
    Queue.prototype.isEmpty = function () {
        return this.items.length - 1 == 0
    }
    Queue.prototype.size = function () {
        return this.items.length
    }
    Queue.prototype.toString = function () {
        let resultString = ''
        for (let i = 0; i < this.items.length; i++) {
            resultString += this.items[i] + ' '
        }
        return resultString
    }
}
/**
 * @description 击鼓传花算法
 * @param {Arry} arrPerson 人数
 * @param {string} stopIndex 喊停位置
 * @param {number} count 游戏经历了几轮
 * @return {Arry[i]} 游戏获胜人
 */
function passGame(arrPerson, stopIndex, count = 1) {
    if (stopIndex < 0 || arrPerson.length < 1 || stopIndex > arrPerson.length) {
        return console.log('数据有误')
    }
    // console.log('count: ', count);
    let queue = new Queue()
    count++
    for (let i = 0; i < arrPerson.length; i++) {
        queue.enqueue(arrPerson[i])
    }
    for (let i = 0; i < stopIndex - 1; i++) {
        queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
    // console.log('queue: ', queue);
    if (queue.size() > 1) {
        let random = Math.floor((Math.random()) * (queue.size()))
        // console.log('random: ', random);
        return passGame(queue.items, random, count)
    } else {
        return queue.front()
    }
}
console.log('获胜人是: ' + passGame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 7))
console.log('获胜人是: ' + passGame(['李磊','小函','紫雨','大神','赤膊','福分','课版'], 7))
