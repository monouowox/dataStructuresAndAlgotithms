//一颗树可以看成多个子树组成的。
//节点的度：这个节点有几个子节点就称这个节点有几度
//叶子节点：这个节点没有子节点
//兄弟节点：拥有共同的父节点
//路径：根节点到该节点的顺序
//路径的长度：根节点到该节点经历了几条线，3条，路径长度就为3
//层次：根节点的层次为1，根的子节点层次为2，依次类推。
//树的深度：最大层次为树的深度

//完美二叉树，所有层到倒数第二层都是满子节点
//完全二叉树，所有层到倒数第三层都是满子节点，倒数第二层a是可缺少右子节点
//二叉搜索树（BST，Binery Search Tree），也叫二叉排序树或二叉查找树

function BinerySearchTree() {
    this.root = null
    function Node(key) {
        this.key = key
        this.left = null
        this.right = null
    }
    BinerySearchTree.prototype.insert = function (key) {
        let newNode = new Node(key)
        if (this.root == null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    BinerySearchTree.prototype.insertNode = function (node, newNode) {
        if (node.key > newNode.key) {
            if (node.left == null) {
                node.left = newNode
                return
            }
            this.insertNode(node.left, newNode)
        } else {
            if (node.right == null) {
                node.right = newNode
                return
            }
            this.insertNode(node.right, newNode)
        }
    }
    BinerySearchTree.prototype.previousOrderTraversal = function (handler) {
        this.previousOrderTraversalNode(this.root, handler)
    }
    BinerySearchTree.prototype.middleOrderTraversal = function (handler) {
        this.middleOrderTraversalNode(this.root, handler)
    }
    BinerySearchTree.prototype.postOrderTraversal = function (handler) {
        this.postOrderTraversalNode(this.root, handler)
    }
    /**
     * @description 先序遍历
     * @param {string} node
     * @param {number} handler
     * @return {void}
     */
    BinerySearchTree.prototype.previousOrderTraversalNode = function (node, handler) {
        if (node != null) {
            handler(node.key)
            this.previousOrderTraversalNode(node.left, handler)
            this.previousOrderTraversalNode(node.right, handler)
        }
    }
    /**
    * @description 中序遍历
    * @param {string} node
    * @param {number} handler
    * @return {void}
    */
    BinerySearchTree.prototype.middleOrderTraversalNode = function (node, handler) {
        if (node != null) {
            this.middleOrderTraversalNode(node.left, handler)
            handler(node.key)
            this.middleOrderTraversalNode(node.right, handler)
        }
    }
    /**
    * @description 后序遍历
    * @param {string} node
    * @param {number} handler
    * @return {void}
    */
    BinerySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
        if (node != null) {
            this.postOrderTraversalNode(node.left, handler)
            this.postOrderTraversalNode(node.right, handler)
            handler(node.key)
        }
    }
    BinerySearchTree.prototype.max=function(){
        var node =this.root
        var key=null
        while(node!=null){
            key=node.key
            node=node.rights
        }
        return key
    }
    BinerySearchTree.prototype.min=function(){
        var node=this.root
        var key=null
        while(node!=null){
            key=node.key
            node=node.left
        }
        return key
    }
    BinerySearchTree.prototype.search=function(key){
        var node=this.root
        while(node!=null){
            if(key<node.key){
                node=node.left
            }else if(key>node.key){
                node=node.right
            }else{
                return true
            }
        }
        return false
    }
    BinerySearchTree.prototype.remove=function(key){
        var current=this.root
        var parent=null
        var isLeftChild=false
        while(current.key!=key){
            parent=current
            if(key<current.key){
                isLeftChild=true
                current=current.left
            } else {
                isLeftChild=false
                current=current.right
            }
            if(current==null){
                return false
            }
        }
        if(current==this.root){
            this.root=null 
            return
        }
        // if(isLeftChild){
        //     if(current.left==null&&current.right==null){
        //         parent.left=null
        //     }else if(current.right==null){
        //         parent.left=current.left
        //     }else if(current.left==null){
        //         parent.left=current.right
        //     }
        // }else{
        //     if(current.left==null&&current.right==null){
        //         parent.right=null
        //     }else if(current.right==null){
        //         parent.right=current.left
        //     }else if(current.left==null){
        //         parent.right=current.right
        //     }
        // }
        if(current.left==null&&current.right==null){
            if(isLeftChild){
                parent.left=null
            }else{
               parent.right=null 
            }
        }else if(current.right==null){
            if(isLeftChild){
                parent.left=current.left
            }else{
                parent.right=current.left
            }
        }else if(current.left==null){
            if(isLeftChild){
                parent.left=current.right
            }else{
                parent.right=current.right
            }
        }
    }
}

let bst = new BinerySearchTree()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(20)
bst.insert(20)
bst.insert(20)
bst.insert(20)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)
bst.insert(6)
bst.insert(6)
bst.insert(6)

let str = ""
bst.previousOrderTraversal(function (key) {
    str += key + " "
})
console.log('先序' + 'str: ', str);
str = ""
bst.middleOrderTraversal(function (key) {
    str += key + " "
})
console.log('中序' + 'str: ', str);
str = ""
bst.postOrderTraversal(function (key) {
    str += key + " "
})
console.log('后序' + 'str: ', str);
// str=""
bst.search(6)
console.log('bst.search(6): ', bst.search(1000));
function Tree() {
    this.root = null
    function Node(key) {
        this.key = key
        // Math.random()//[0,1)
        let random = Math.random() * 10//[0,9]
        this.count = Math.floor(random) + 1//[1,10]
        // console.log('count: ', this.count);
        this.arr = []
        for (let i = 0; i < this.count; i++) {
            this.arr[i] = null
        }
    }
    Tree.prototype.insert = function (key) {
        let newNode = new Node(key)
        // console.log('newNode: ', JSON.stringify(newNode));
        if (this.root == null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    Tree.prototype.insertNode = function (node, newNode) {
        // console.log("node: "+JSON.stringify(node))
        // console.log('node.arr.length: ', node.arr.length);

        // console.log('node.count: ', node.count);
        // console.log('node: ',JSON.stringify(node));
        for (let i = 0; i < node.count; i++) {
            if (node.arr[i] == null) {
                node.arr[i] = newNode
                return
            }
        }
        let random1 = (node.count) * Math.random()//[0,lenth)
        let wichIndex = Math.floor(random1)
        // console.log('wichIndex: ', wichIndex);
        // console.log('node.arr[wichIndex]: ', node.arr[wichIndex]);
        this.insertNode(node.arr[wichIndex], newNode)
    }
    Tree.prototype.previousOrderTraversal = function (handler) {
        this.previousOrderTraversalNode(this.root, handler)
    }
    Tree.prototype.previousOrderTraversalNode = function (node, handler) {
        if (node != null) {
            handler(node.key)
            for (let i = 0; i < node.count; i++) {
                this.previousOrderTraversalNode(node.arr[i], handler)
            }
        }
    }
    Tree.prototype.middleOrderTraversal = function (handler) {
        this.middleOrderTraversalNode(this.root, handler)
    }
    Tree.prototype.middleOrderTraversalNode = function (node, handler) {
        if (node != null) {
            for (let i = 0; i < node.count; i++) {
                if(i==parseInt(node.count/2)){
                    handler(node.key)
                }
                this.middleOrderTraversalNode(node.arr[i], handler)
            }
        }
    }
    Tree.prototype.postOrderTraversal = function (handler) {
        this.postOrderTraversalNode(this.root, handler)
    }
    Tree.prototype.postOrderTraversalNode = function (node, handler) {
        if (node != null) {
            for (let i = 0; i < node.count; i++) {
                this.postOrderTraversalNode(node.arr[i], handler)
            }
            handler(node.key)
        }
    }
}
let tree = new Tree()
tree.insert(3)
tree.insert(4)
tree.insert(7)
tree.insert(98)
tree.insert(24)
tree.insert(5)
tree.insert(7)
tree.insert(29)
tree.insert(102)
tree.insert(37)
tree.insert(46)
tree.insert(8)
tree.insert(2)
tree.insert(1)
tree.insert(3)
tree.insert(4)
tree.insert(7)
tree.insert(98)
tree.insert(24)
tree.insert(5)
tree.insert(7)
tree.insert(29)
tree.insert(102)
tree.insert(37)
tree.insert(46)
tree.insert(8)
tree.insert(2)
tree.insert(1)
tree.insert(3)
tree.insert(4)
tree.insert(7)
tree.insert(98)
tree.insert(24)
tree.insert(5)
tree.insert(7)
tree.insert(29)
tree.insert(102)
tree.insert(37)
tree.insert(46)
tree.insert(8)
tree.insert(2)
tree.insert(1)
let str1 = ""
tree.previousOrderTraversal(function (key) {
    str1 += key + " "
})
console.log('先序'+'str1: ', str1);
str1 = ""
tree.middleOrderTraversal(function (key) {
    str1 += key + " "
})
console.log('中序'+'str1: ', str1);
str1 = ""
tree.postOrderTraversal(function (key) {
    str1 += key + " "
})
console.log('后序'+'str1: ', str1);

let arr=[]
let obj={a:1}
arr.toString()
obj.toString()
// null.toString()
// console.log('null.toString(): ', null.toString());
console.log('arr.toString(): ', arr.toString());
console.log('obj.toString(): ', obj.toString());