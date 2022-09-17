//用数组
//将值存放在数组中，要存的值通过哈希函数计算出要放在数组中位置的下标值，但是值很多的话下标值冲突不可避免，然后再在数组上添加链表。也叫链地址法。还有一种是开放地址法。
//爲了效率

//哈希表
function HashTable() {
    //存放元素的数组
    this.storage = []
    //存放了多少个元素
    this.count = 0
    this.limit = 7
    /**哈希函数
     * @description 1.字符串转成数字 2.大的数字进行缩小
     * @param {string} str 字符串
     * @param {number} size 数组长度
     * @return {void}
     */
    HashTable.prototype.hash = function (str, size) {
        let hashCode = 0
        for (let i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i)
            // console.log(str.charCodeAt(i))
        }
        return hashCode % size
    }
    HashTable.prototype.put = function (key, value) {
        let index = this.hash(key, this.limit)
        console.log('put index: ', index);
        let bucket = this.storage[index]
        if (!bucket) {
            bucket = []
            this.storage[index] = bucket
        }
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[0] == key) {
                tuple[1] = value
                return
            }
        }
        bucket.push([key, value])
        this.count++
        this.resize()
    }
    HashTable.prototype.get = function (key) {
        let index = this.hash(key, this.limit)
        console.log('get index: ', index);
        let bucket = this.storage[index]
        if (!bucket) {
            return null
        }
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            console.log('tuple: ', tuple);
            if (tuple[0] == key) {
                return tuple
            }
        }
        return null
    }
    HashTable.prototype.remove = function (key) {
        let index = this.hash(key, this.limit)
        let bucket = this.storage[index]
        if (!bucket) {
            return null
        }
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[0] == key) {
                this.count--
                this.resize()
                return bucket.splice(i, 1)
            }
        }
        return null
    }
    HashTable.prototype.size = function () {
        return this.count
    }
    HashTable.prototype.isEmpty = function () {
        return this.count == 0
    }
    // 哈希表的扩容
    // 扩容之后，存储数据的位置就会改变
    // loaderFactor=this.count/this.limit
    // loaderFactor>0.75 就进行扩容
    HashTable.prototype.resize = function () {
        let newLimit=0
        if (this.count > this.limit * 0.75) {
            newLimit=this.limit*2
        }else if(this.limit > 7 && this.count < this.limit * 0.25){
            newLimit=this.limit / 2
        }else{
            newLimit=this.limit
            return 
        }
        while(!this.isPrime(newLimit)){
            newLimit++
        }
        this.limit = newLimit

        let oldStorage = this.storage
        this.storage = []
        this.count = 0

        for (let i = 0; i < oldStorage.length; i++) {
            let bucket = oldStorage[i]
            if (!bucket) {
                continue
            }
            for (let j = 0; j < bucket.length; j++) {
                let tuple = bucket[j]
                this.put(tuple)
            }
        }
    }
    /**判断是否是质数
     * @description
     * @param {number} num
     * @return {void}
     */
    HashTable.prototype.isPrime = function (num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false
            }
        }
        return true
    }
}

let hashTable = new HashTable()
hashTable.put("abc", "123")
hashTable.put("cba", "321")
hashTable.put("nba", "521")
hashTable.put("mba", "520")
console.log('hashTable: ', JSON.stringify(hashTable));
// console.log('hashTable.storage[0]: ', hashTable.storage[0]);
console.log('hashTable.get("abc"): ', hashTable.get("abc"));
hashTable.put("abc", "111")
console.log('hashTable.get("abc"): ', hashTable.get("abc"));
hashTable.remove("abc", "111")
console.log('hashTable.get("abc"): ', hashTable.get("abc"));

//冒泡







