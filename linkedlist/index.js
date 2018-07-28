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
  	// // self // working // 
  	// insertLast(data){
	// 	var node = this.head;
	// 	if(!node){
	// 		this.head = data;
	// 	}
	// 	while(node){
	// 		if(!node.next){
	// 			console.log(node);
	// 			node.next = {
	// 				data:data, next:null
	// 			};
	// 			break;
	// 		}
	// 		node = node.next
	// 	}
	// 	console.log(node);
	// }

  	insertLast(data){
	const last = this.getLast();
	if(last){
		last.next = new Node(data); 
	}else{
		this.head = new Node(data);
	}
	// console.log(this.head); 
	}

	// working but takes 20ms
	// getAt(index){
	// 	var node = this.head;
	// 	if(index>this.size()){
	// 		return null;
	// 	}else if(index==0){
	// 		console.log(node);
	// 		return node;
	// 	}else{
	// 		for(let i = 1; i <= index; i++ ){		
	// 			node = node.next;
	// 		}
	// 		console.log(node);
	// 		return node;
	// 	}
	// }

	//working and takes only 6ms // from tutorial
	getAt(index){
		var counter = 0;
		var node = this.head;
		while(node){
			if(counter == index){
				return node; 
			}
			counter++;
			node = node.next;
		}
		return null;
	}
	removeAt(index){
		var node = this.head;
		if(!node){
			return;
		}
		if(index==0){
			this.head = this.head.next;
			return;
		}
		const previous = this.getAt(index - 1);
		if(!previous || !previous.next){
			return null;
		}
		previous.next = previous.next.next;
		
	}
	insertAt(data,index){
		let node = this.head;
		if(!node || index==0){
			node = this.insertFirst(data);
		}
		if(node){
			let previous = this.getAt(index-1) || this.getLast();
			const node = new Node(data, previous.next);
			previous.next = node;

		}

		console.log(node);
	}

}
	
	
	const list = new LinkedList();
	list.head = new Node(10);
	list.insertFirst(20);
	list.insertFirst(30);
	console.log(list);
	// console.log(list.size());
// console.log(list.getFirst());
// console.log(list.getLast());
// console.log(list.clear());
// console.log(list);
// console.log(list.removeFirst());
// console.log(list.removeLast());
// list.insertLast(26);
// list.getAt(3);
// list.removeAt(0);
list.insertAt(32,3);
module.exports = { Node, LinkedList };
