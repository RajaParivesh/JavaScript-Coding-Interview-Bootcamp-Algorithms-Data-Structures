// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
      this.data = data;
      this.next = next;
  }
}

class LinkedList {
  
  constructor(){
    this.head = null; 
  }

  insertFirst(data){
  	this.head = new Node(data, this.head);
  }
  
  size(){
  	let counter = 0;
  	let node = this.head;

  	while(node){
  		counter++;
  		node = node.next;
  	}
  	return counter;
  }
  
  getFirst(){
  	return this.head;
  }
  
  getLast(){
  	let node = this.head;
  	if(!node){
  		return null;
  	}
  	while(node){
  		if(!node.next){
  		  	return node;
  		}
  	node = node.next;
  	}
  }

  clear(){

  	this.head = null;
  	return "cleared";11

  }

  removeFirst(){
  	if(!this.head){
  		return;
  	}
  	return this.head = this.head.next;
  }


   removeLast(){
  	
  	if(!this.head){
  		return;
  	}

  	if(!this.head.next){
  		this.head = null;
  		return;
  	}
  
  	let previous = this.head;
  	let node = this.head.next;
  	while(node.next){
  		previous = node; 
  		node = node.next;
  	}
  	previous.next = null;
  }

  insertLast(data){
  	if(!this.head){
  		this.head = data;
  	}

  	if(!this.head.next){
  		this.head.next = data;
  	}
	// while(this.head){

		// if(!this.head.next){
		// 	return this.node;
  // 	// console.log(this.head);

		// // this. = data; 
		// break; 		
		// }
	// }
  	// return this.head;
  }

}

// LinkedList {
//   head: Node { data: 20, next: Node { data: 10, next: null } }
// }


const list = new LinkedList();
list.head = new Node(10);
list.insertFirst(20);
list.insertFirst(30);
// console.log(list);
// console.log(list.size());
// console.log(list.getFirst());
// console.log(list.getLast());
// console.log(list.clear());
// console.log(list);
// console.log(list.removeFirst());
// console.log(list.removeLast());
console.log(list.insertLast(25));
module.exports = { Node, LinkedList };
