// 1. Two sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function twoSum(nums, target) {
    const record = {};

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (record[target - element] != null) {
            return [record[target - element], index];
        }

        record[element] = index;
    }

    return [];
};

// twoSum([2,7,11,15], 9);

// 2. Add Two Numbers
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    
};