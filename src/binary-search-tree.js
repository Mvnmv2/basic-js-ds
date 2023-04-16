const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.sroot = null;
    }


    root() {
        if (this.sroot == null) {
            return null;
        }
        return this.sroot;
    }


    add(data) {
        this.sroot = addWithin(this.sroot, data);

        function addWithin(node, data) {
            if (!node) {
                return new Node(data);
            }
            if (node.data === data) {
                return node;
            }

            if (data < node.data) {
                node.left = addWithin(node.left, data);
            } else {
                node.right = addWithin(node.right, data);
            }

            return node;
        }
    }

    has(data) {
        return searchWithin(this.sroot, data);

        function searchWithin(node, data) {
            if (!node) {
                return false;
            }
            if (node.data === data) {
                return true;
            }

            return data < node.data ?
                searchWithin(node.left, data) :
                searchWithin(node.right, data);

        }


    }

    find(data) {
        return searchWithin(this.sroot, data);

        function searchWithin(node, data) {
            if (!node) {
                return null;
            }
            if (node.data === data) {
                return node;
            }

            return data < node.data ?
                searchWithin(node.left, data) :
                searchWithin(node.right, data);

        }
    }

    remove(data) {
        this.sroot = removeRoot(this.sroot, data);

        function removeRoot(node, data) {
            if (!node) {
                return null;
            }

            if (data < node.data) {
                node.left = removeRoot(node.left, data);
                return node;
            } else if (data > node.data) {
                node.right = removeRoot(node.right, data);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null;
                }

                if (!node.left) {
                    node = node.right
                    return node;
                }
                if (!node.right) {
                    node = node.left
                    return node;
                }

                let minFromRight = node.right;
                while (minFromRight.left) {
                    minFromRight = minFromRight.left
                }
                node.data = minFromRight.data;

                node.right = removeRoot(node.right, minFromRight.data);

                return node;

            }
        }

    }

    min() {
        if (!this.sroot) {
            return null;
        }
        let node = this.sroot;
        while (node.left){
            node = node.left
        }

        return node.data;
    }

    max() {
        if (!this.sroot) {
            return null;
        }
        let node = this.sroot;
        while (node.right){
            node = node.right
        }

        return node.data;
    }

}

module.exports = {
    BinarySearchTree
};