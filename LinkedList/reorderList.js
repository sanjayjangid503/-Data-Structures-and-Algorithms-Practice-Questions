// Problem Description
// Given a linked list and an integer X, partition the LL around X, such that all nodes less than X come before all nodes greater than X. If X is contained within the list, then those nodes need

// to be after the elements less than X and before the elements greater than X, i.e. they should appear between the left and right partitions.


// You can also see if you can preserve the order for elements on either side of the partition. For instance, for given LL 2, 6, 5, 7, 1 and X = 5, the answer should be 2, 1, 5, 6, 7 only, instead of 1, 2, 5, 6, 7.

// Input format
// N - An integer denoting the number of nodes in the linked list.

// N integers follow where ith integer denotes the ith node value in the linked list

// X - An integer denoting the value that you must use to partition the given list

// Output format
// Return the head after partitioning the list

// Constraints
// 1 <= N <= 10^5

// -10^9 <= value, X <= 10^9

// Sample Input 1
// 7

// 3 5 8 5 10 2 1

// 5

// Sample Output 1
// 3 2 1 5 5 8 10

// Explanation 1
// The nodes [3], [1] and [2] are less than [5] so they are present before [8] and [10].

// There are also other possible answers for the same input.

// Sample Input 2
// 5

// 3 1 3 1 4

// 2

// Sample Output 2
// 1 1 3 3 4

// Explanation 2
// All nodes with values less than 2 come before all nodes with values greater than 2.

class LinkedList {
      constructor() {
            this.head = new ListNode(-1)
            this.tail = this.head
      }
      add(node) {
            this.tail.next = node;
            this.tail = node
      }
}

function partition(head, x) {
      const L1 = new LinkedList()
      const L2 = new LinkedList()
      const L3 = new LinkedList()
      let curr = head

      while(curr != null) {
            if(curr.val < x) {
                  L1.add(curr)
            } else if (curr.val == x) {
                  L2.add(curr)
            } else {
                  L3.add(curr)
            }

            curr = curr.next
      }

      L3.tail.next = null
      L2.tail.next = L3.head.next;
      L1.tail.next = L2.head.next

      return L1.head.next

}