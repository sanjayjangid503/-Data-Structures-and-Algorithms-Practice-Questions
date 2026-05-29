// Problem Description
// You’re given two numbers represented by two linked lists, where each node contains a single digit. The digits are stored in forward order i.e the one’s digit is at the tail of the list. Write a function that adds the two numbers and returns the sum as a linked list in the same order.

// Input format
// There are 4 lines of input.

// First line contains N, the size of the first list

// Next line contains N space separated integers

// Third line contains M, the size of the second list

// Next line contains M space separated integers

// Output format
// Return the resultant list after adding given lists.

// Function definition
// The given function accepts two arguments - representing the heads of the two lists,and returns the new head.

// Constraints
// 1 <= N <= 1e5

// 1 <= M <= 1e5

// 0 <= value <= 9

// Sample Input 1
// 3

// 6 1 7

// 3

// 2 9 5

// Sample Output 1
// 9 1 2

// Explanation 1
// 617 + 295 = 912.

// Sample Input 2
// 2

// 4 9

// 1

// 5

// Sample Output 2
// 5 4

// Explanation 2
// 49 + 5 = 54.


function reverse(head) {
      let prev = null;
      let curr = head;
      while(curr !== null) {
            let nextNode = curr.next
            curr.next = prev
            prev = curr
            curr = nextNode
      }

      return prev
}

function sumLists2(head1, head2) {
      let l1 = reverse(head1)
      let l2 = reverse(head2)

      let dummy = new ListNode(-1)

      let tail = dummy;

      let carry = 0


      while(l1 !== null || l2 !== null || carry != 0) {
            let val1 = 0
            let val2 = 0

            if(l1 !== null) {
                  val1 = l1.val
            }

            if(l2 != null) {
                  val2 = l2.val
            }

            let sum = val1 + val2 + carry
            let digit = sum % 10
            carry = Math.floor(sum / 10)
            tail.next = new ListNode(digit)
            tail = tail.next
            if (l1 !== null) {
                  l1 = l1.next;
            }
            if (l2 !== null) {
                  l2 = l2.next;
            }
      }

      return reverse(dummy.next)

}