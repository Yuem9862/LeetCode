/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    

    //create a new linked list by creating a dummy head and a current node
    let dummyHead = new ListNode();
    let newCurrent = dummyHead;
    
    //use two pointerst to merge the two lists
    while(list1 && list2){
        if (list1.val > list2.val){
            newCurrent.next = list2;
            list2 = list2.next;
        }else{
            newCurrent.next = list1;
            list1 = list1.next;
        }
        newCurrent = newCurrent.next;
    }
   
    //when reaching the end of one of the list
    if (list1){
        newCurrent.next = list1;
    }else if (list2){
        newCurrent.next = list2;
    }
    
    //return the result
    return dummyHead.next;
};