// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // pseudocode actual solution
  push(val) {
    const node = new Node(val)
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
}

// my attempt to solve pseudo code
push(val) {
  // this function should accept a value
  // create a new node using the value passed to the function
  const node = new Node(val)
  // if there is no head property on the list, set the head and tail to be the newly created node
  if (!head) {
    this.head = node;
    this.tail = node;
  }
  // Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
  // Increment the length by one
  else {
    node.next = this.tail;
    this.tail = node;
      length++;
  }
}

const list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")

// const first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")


