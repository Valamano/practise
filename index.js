// LeetCode practise tasks

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}
const addTwoNumbersA = {
	val: 2,
	next: {
		val: 4,
		next: {
			val: 3,
			next: null
		}
	}
}
const addTwoNumbersB = {
	val: 5,
	next: {
		val: 6,
		next: {
			val: 4,
			next: null
		}
	}
}
const addTwoNumbers = function (l1, l2) {
	const createNode = (step1, step2, rest = 0) => {
		if (!step1 && !step2 && !rest) return null;
		const newVal = (step1?.val || 0) + (step2?.val || 0) + rest;
		const nextNode = createNode(step1?.next, step2?.next, Math.floor(newVal / 10));
		return new ListNode(newVal % 10, nextNode);
	}
	return createNode(l1, l2);
};
// console.log(addTwoNumbers(addTwoNumbersA, addTwoNumbersB))


// 3. maxLength Substring Without Repeating Characters
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfmaxLengthSubstring = function(s) {
	if (s.length == 0) return 0;

	let startIndx = 0;
	let	maxLength = 0;
	let	currentLength = 0;

	let charMap = {};

	for (i = 0; i < s.length; i++) {
		let val = s[i];

		if (charMap[val] == null) {
			charMap[val] = i;
		} else {
			if (charMap[val] >= startIndx) {
				currentLength = i - startIndx;

				if (maxLength < currentLength) {
					maxLength = currentLength;
				}

				startIndx = charMap[val] + 1;
			}
			charMap[val] = i;
		}
	}

	if (maxLength < i - startIndx) {
		maxLength = i - startIndx;
	}

	return maxLength;
};

var lengthOfLongestSubstring = function(s) {
	const setMap = new Set();
	let max = 0;
	let index = 0;
	for(let i = 0; i<s.length; i++){
			let key = s[i];
			while(setMap.has(key)){
					setMap.delete(s[index]);
					index++;
			}
			setMap.add(key);
			max = Math.max(max, setMap.size);
	}
	return max;
};


