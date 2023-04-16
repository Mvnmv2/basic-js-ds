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
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (this.sroot == null) {
            return null;
        }
        return this.sroot;
    }


add(/* data */)
{
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

has(/* data */)
{
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

find(/* data */)
{
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

remove(/* data */)
{
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

min()
{
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

max()
{
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}
}

module.exports = {
    BinarySearchTree
};