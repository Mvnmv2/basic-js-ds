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

    find( data ) {
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

    remove(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    min() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    max() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }
}

module.exports = {
    BinarySearchTree
};