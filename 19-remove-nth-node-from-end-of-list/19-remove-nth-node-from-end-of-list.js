/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    
    let fastNode = dummyHead,
        slowNode = dummyHead;
    
    for (let i = 0; i <= n; i++){
        fastNode = fastNode.next;
    }
    
    while (fastNode){
        fastNode = fastNode.next;
        slowNode = slowNode.next;
    }
    
    slowNode.next = slowNode.next.next;
    
    return dummyHead.next;
    
    
};