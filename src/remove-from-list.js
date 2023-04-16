const {NotImplementedError} = require('../extensions/index.js');

const {ListNode} = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */



function removeElement(l, k) {

    let current = l;

    if(current.value === k){
        current = current.next;
    } else {
        let prev = current;
        while(prev.next && prev.next.value !== k) {
            prev = prev.next;
        }
        if(prev.next){
            remove = prev.next;
            prev.next = remove.next
        }


    }
    return current;

}

function removeKFromList(l, k) {
    let cur = l;
    while(cur) {
        l = removeElement(l, k);
        cur = cur.next;
    }
    return l;

}

module.exports = {
    removeKFromList
};
