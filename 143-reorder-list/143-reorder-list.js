/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
   
    //step 1: use fast/slow pointers to split the list into two lists
    
    let slow = head,
        fast = head.next;
    
    while (fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    //create the second list
    let second = slow.next;
    //split the fist list
    slow.next = null;
    
    //step 2: reverse the second list
    
    let prev = null;
    
    while (second){    
        let temp = second.next;
        second.next = prev;
        prev = second;
        second = temp;
    }
    
    //step 3: merge the two lists
    let first = head;
    second = prev;
    
    while(second){
        const [temp1, temp2] = [first.next, second.next];
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
    
    return first;
    
};