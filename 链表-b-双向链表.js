function TwoLinkedTable() {
    this.head = null
    this.tail = null
    this.length = 0
    function Node(data) {
        this.pre = null
        this.data = data
        this.next = null
    }
    TwoLinkedTable.prototype.append = function (data) {
        let newNode = new Node(data)
        //判断是否为第一个节点
        if (this.length == 0) {
            this.head = newNode
            // newNode.pre=this.head
            this.tail = newNode
            // newNode.next=this.tail
        } else {
            this.tail.next = newNode
            newNode.pre = this.tail
            this.tail = newNode
        }
        this.length++
    }
    TwoLinkedTable.prototype.insert = function (position, data) {
        if (position < 0 || position >= this.length) return false
        let newNode = new Node(data)
        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            if (position == 0) {
                newNode.next = this.head
                newNode.next.pre = newNode
                this.head = newNode
            } else if (position == this.length - 1) {
                newNode.pre = this.tail
                newNode.pre.next = newNode
                this.tail = newNode
            } else {
                let current = null
                if (position <= this.length / 2) {
                    current = this.head
                    for (let i = 0; i < position; i++) {
                        current = current.next
                    }
                } else {
                    current = this.tail
                    for (let i = this.length - 1; i > position; i--) {
                        current = current.pre
                    }
                }
                newNode.pre = current.pre
                newNode.pre.next = newNode
                newNode.next = current
                current.pre = newNode
            }
        }
        this.length++
        return true
    }
    TwoLinkedTable.prototype.backwardSring = function () {
        let str = ''
        let current = this.head
        while (current) {
            str += current.data + " "
            current = current.next
        }
        return str
    }
    TwoLinkedTable.prototype.forwardSring = function () {
        let str = ''
        let current = this.tail
        while (current) {
            str += current.data + " "
            current = current.pre
        }
        return str
    }
    TwoLinkedTable.prototype.toSring = function () {
        return this.backwardSring()
    }
    TwoLinkedTable.prototype.getData = function (position) {
        if (position < 0 || position >= this.length) return null
        if (this.length == 0) {
            return null
        } else {
            if (position == 0) {
                return this.head.data
            } else if (position == this.length - 1) {
                return this.tail.data
            } else {
                let current = null
                if (position <= this.length / 2) {
                    current = this.head
                    for (let i = 0; i < position; i++) {
                        current = current.next
                    }
                } else {
                    current = this.tail
                    for (let i = this.length - 1; i > position; i--) {
                        current = current.pre
                    }
                }
                return current.data
            }
        }

    }
    TwoLinkedTable.prototype.indexOf = function (data) {
        if (this.length == 0) {
            return -1
        } else {
            let current = this.head
            for (let i = 0; i < this.length; i++) {
                if (current.data == data) return i
                current = current.next
            }
            return -1
        }
    }
    TwoLinkedTable.prototype.update = function (position, data) {
        if (position < 0 || position >= this.length) return false
        if (position == 0) {
            this.head.data = data
        } else if (position == this.length - 1) {
            this.tail.data = data
        } else {
            let current = null
            if (position < this.length / 2) {
                current = this.head
                for (let i = 0; i < position; i++) {
                    current = current.next
                }
            } else {
                current = this.tail
                for (let i = this.length - 1; i > position; i--) {
                    current = current.pre
                }
            }
            current.data = data
        }
        return true
    }
    TwoLinkedTable.prototype.removeAt = function (position) {
        if (position < 0 || position >= this.length) return null
        let current = null
        if (this.length == 1) {
            current = this.head
            this.head = null
            this.tail = null
            return this.head.data
        } else {
            if (position == 0) {
                current = this.head
                this.head.next.pre = null
                this.head = this.head.next
            } else if (position == this.length - 1) {
                current = this.tail
                this.tail.pre.next = null
                this.tail = this.tail.pre
            } else {
                let previous = null
                let next = null
                if (position < this.length / 2) {
                    current = this.head
                    for (let i = 0; i < position; i++) {
                        previous = current
                        current = current.next
                        next = current.next
                    }
                } else {
                    current = this.tail
                    for (let i = this.length - 1; i > position; i--) {
                        next = current
                        current = current.pre
                        previous = current.pre
                    }
                }
                previous.next = next
                next.pre = previous
            }
        }
        this.length--
        return current.data
    }
    TwoLinkedTable.prototype.remove = function (data){
        return this.removeAt(this.indexOf(data))
    }
    TwoLinkedTable.prototype.isEmpty = function (data){
        return this.length==0
    }
    TwoLinkedTable.prototype.size = function (data){
        return this.length
    }
    TwoLinkedTable.prototype.getHead = function (data){
        return this.head.data
    }
    TwoLinkedTable.prototype.getTail = function (data){
        return this.tail.data
    }
}
let twoLinkedTable = new TwoLinkedTable()

twoLinkedTable.append('abc')
twoLinkedTable.append('爆富')
twoLinkedTable.append('123')
twoLinkedTable.insert(1, '开心')
twoLinkedTable.insert(1, '涨薪')
twoLinkedTable.insert(1, 'test1')
twoLinkedTable.insert(1, 'test2')
twoLinkedTable.insert(1, 'test3')
twoLinkedTable.insert(5, 'test4')
twoLinkedTable.insert(5, 'test5')
twoLinkedTable.insert(5, 'test6')
twoLinkedTable.insert(3, '红颜知己')

console.log('twoLinkedTable: ', twoLinkedTable.toSring());
console.log('twoLinkedTable: ', twoLinkedTable.forwardSring());
console.log('getData: ', twoLinkedTable.getData(3))
console.log('indexOf: ', twoLinkedTable.indexOf('涨薪'));
console.log('indexOf: ', twoLinkedTable.indexOf('第三次'));
console.log('update: ', twoLinkedTable.update(1, '成功'));
console.log('update: ', twoLinkedTable.update(4, '爱我'));
console.log('update: ', twoLinkedTable.update(6, '买大House'));
console.log('removeAt: ', twoLinkedTable.removeAt(7));
console.log('removeAt: ', twoLinkedTable.removeAt(7));
console.log('remove: ', twoLinkedTable.remove('test2'));
console.log('twoLinkedTable: ', twoLinkedTable.toSring());