const createNode = (data) => {
    return {
      data: data,
      next: null
    };
  };
  
  const createLinkedList = () => {
    return {
      head: null,
      tail: null,
      length: 0,
  
      add(data) {
        const newNode = createNode(data);
        if (this.head === null) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          this.tail.next = newNode;
          this.tail = newNode;
        }
        this.length++;
      },

      remove(data) {
        if (this.head === null) {
          return;
        }
  
        let current = this.head;
        let previous = null;
  
        while (current !== null) {
          if (current.data === data) {
            if (previous === null) {
              this.head = current.next;
              if (this.head === null) {
                this.tail = null;
              }
            } else {
              previous.next = current.next;
              if (current === this.tail) {
                this.tail = previous;
              }
            }
            this.length--;
            break;
          }
          previous = current;
          current = current.next;
        }
      },
  
      print() {
        let current = this.head;
        while (current !== null) {
          console.log(current.data);
          current = current.next;
        }
      }
    };
  };
  
  const linkedList = createLinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.print();
  linkedList.remove(2);
  linkedList.print();