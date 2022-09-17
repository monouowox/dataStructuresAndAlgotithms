function LinkedTable() {
    this.head = null
    this.length = 0
    function Node(data) {
        this.data = data
        this.next = null
    }
    /**
     * @description 在链表的最后添加数据
     * @param data 要添加的数据
     * @return {void}
     */
    LinkedTable.prototype.append = function (data) {
        let newNode = new Node(data)
        //判断是否为第一个节点
        if (this.length == 0) {
            this.head = newNode
        } else {
            let current = this.head
            //循环current.next不为空，让current指向下一个节点
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        this.length++
    }
    LinkedTable.prototype.toString = function () {
        let current = this.head
        let str = ""
        while (current) {
            str += current.data + " "
            current = current.next
        }
        return str
    }
    /**
     * @description
     * @param {number} 在具体的位置position插入数据
     * @param {string} 要插入的数据data
     * @return {Boolen}
     */
    LinkedTable.prototype.insert = function (position, data) {
        if (position < 0 || position > this.length) {
            return false
        }
        let newNode = new Node(data)
        console.log('newNode', newNode)
        if (position == 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let previous = null
            let current = this.head
            for (let i = 0; i < position; i++) {
                previous = current
                current = current.next
                console.log('current: ', current);
            }
            newNode.next = current
            previous.next = newNode
            // console.log("this", this);
        }
        this.length++
        return true
    }
    LinkedTable.prototype.getData = function (position) {
        if (position < 0 || position >= this.length) {
            return null
        }
        let current = this.head
        for (let i = 0; i < position; i++) {
            current = current.next
            console.log('current: ', current);
        }
        return current.data
    }
    LinkedTable.prototype.indexOf = function (data) {
        let current = this.head
        let index = -1
        while (current.data !== data) {
            index++
            if (current.next == null) {
                return -1
            }
            current = current.next
        }
        index++
        return index
    }
    LinkedTable.prototype.update = function (position, data) {
        if (position < 0 || position >= this.length) return false
        let current = this.head
        for (let i = 0; i < position; i++) {
            current = current.next
        }
        current.data = data
        return true
    }
    LinkedTable.prototype.removeAt = function (position) {
        if (position < 0 || position >= this.length) return null
        let current = this.head
        if (position == 0) {
            this.head = current.next
        } else {
            let previous = null
            for (let i = 0; i < position; i++) {
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.length--
        return current.data
    }
    LinkedTable.prototype.remove = function (data) {
        return this.removeAt(this.indexOf(data))
    }
    LinkedTable.prototype.isEmpty = function () {
        return this.length == 0
    }
    LinkedTable.prototype.size = function () {
        return this.length
    }
}
let linkedTable = new LinkedTable()
linkedTable.append('abc')
linkedTable.append('inio')
linkedTable.append('quan')
linkedTable.append('in')
linkedTable.insert(1, '替换')
linkedTable.getData(1)

// console.log('linkedTable: ', JSON.stringify(linkedTable));
console.log('linkedTable: ', linkedTable.getData(1));
console.log('linkedTable: ', linkedTable.indexOf('2323'));
console.log('linkedTable: ', linkedTable.update(1, 'djslk'));
console.log('linkedTable: ', linkedTable.removeAt(1));
console.log('linkedTable: ', linkedTable.remove('abc'));
console.log('linkedTable: ', linkedTable.toString());
