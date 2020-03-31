function Node(data) {
  this.data = data;
  this.next = next;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.add = function(data) {
  const node = new Node(data);
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  }

  this.tail.next = node;
  this.tail = node;
  this.length += 1;

  return node;
};

LinkedList.prototype.delete = function(node) {
  if (this.length === 1) {
    return false;
  }

  if (node instanceof Node) {
    for (let item = this.head; item !== null; item = item.next) {
      if ((item.next = node)) {
        item.next = node.next;
        this.length -= 1;
        return true;
      }
    }
  } else {
    for (let item = this.head; item !== null; item = item.next) {
      if ((item.next = this.tail)) {
        item.next = null;
        this.tail = item;
        this.length -= 1;
        return true;
      }
    }
  }
  return false;
};

LinkedList.prototype.clear = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

LinkedList.prototype.has = function(node) {
  for (let item = this.head; item !== null; item = item.next) {
    if (item === node) {
      return true;
    }
  }
  return false;
};
