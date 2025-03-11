class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    search(value) {
        let current = this.root;

        while(current !== null) {
            if (value === current.value) return true;
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }

    inorderTraversal(node, result = []) {
        if (node !== null) {
            this.inorderTraversal(node.left, result);
            result.push(node.value);
            this.inorderTraversal(node.right, result);
        }
        return result;
    }

    findMin() {
        if (!this.root) return null;
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    }

    findMax() {
        if (!this.root) return null;
        let current = this.root;
        while (current.right !== null)
        {
            current = current.right;
        }
        return current.value;
    }


}

const bst = new BST();
bst.insert(50);
bst.insert(90);
bst.insert(40);
bst.insert(20);
bst.insert(10);
bst.insert(70);
bst.insert(1000);
// console.log(bst.findMax(bst));
console.log("Inorder Traversal of BST:", inorderTraversal(bst.root));
