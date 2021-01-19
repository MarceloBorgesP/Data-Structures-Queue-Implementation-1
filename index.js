class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first ? this.first.value : undefined;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    
    this.length++;
  }

  dequeue() {
    if (!this.length) {
      return undefined;
    }

    let first = this.first;

    if (this.length === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;

    return first;
  }

  isEmpty() {
    return !this.length;
  };
}

const myQueue = new Queue();
console.log(myQueue.peek())
myQueue.enqueue('Samir');
console.log(myQueue.peek());
myQueue.enqueue('Pavel');
console.log(myQueue.peek());
myQueue.enqueue('Matt');
console.log(myQueue.peek());
myQueue.enqueue('Joy');
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.enqueue('Samir');
console.log(myQueue.peek());

