class BinaryTree {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right
    }
    
    insertLeft(tree) {
        if (this.left) {
            let tmp = this.left
            this.left = tree;
            this.left.left = tmp;
        } else {
            this.left = tree;
        }
    }
    
    insertRight(tree) {
        if (this.left) {
            let tmp = this.right
            this.right = tree;
            this.right.right = tmp;
        } else {
            this.right = tree;
        }
    }
    
    getRootval() {
        return this.val;
    }
    
    setRootVal(val) {
        this.node(val) = val;
    }
    
    getLeftChild() {
        return this.left;
    }
    
    getRightChild() {
        return this.right;
    }
}
module.exports = BinaryTree;