class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
  }
  
  class BinarySeachTree {
        constructor(){
          this.root = null
        }


    //function for insertion operation
    insert(value){
          var newNode = new Node(value);
          if(this.root === null){
              this.root = newNode;
              return this;
          }
          //console.log(this.root)
          let currentNode = this.root;
          while(currentNode){
              if(value < currentNode.value){
                  if(currentNode.left === null){
                      currentNode.left = newNode;
                      return this;
                  }
                  currentNode = currentNode.left;
              } else {
                  if(currentNode.right === null){
                      currentNode.right = newNode;
                      return this;
                  } 
                  currentNode = currentNode.right;
              }
          }
      }


      //finding function
       find(value){
        if(!this.root) return false
        
        let currentNode= this.root
        let found = false
        while(currentNode && !found){
              if(value < currentNode.value){
                currentNode= currentNode.left
               } 
               else if(value > currentNode.value){
                  currentNode= currentNode.right
               } 
               else{
                    found= currentNode
               } 
              }

          if(!found) return undefined;
          return found
        
    
    }

    Findmin(){
        let currNode =this.root;
        if(currNode===null){
            console.log("Empty")
            return -1;
        }

        while(currNode.left!=null){
            currNode=currNode.left;
        }
        return currNode.value
    }

    findmax(){
        let currNode =this.root;
        if(currNode===null){
            console.log("Empty")
            return -1;
        }

        while(currNode.rigth!=null){
            currNode=currNode.rigth;
        }
        return currNode.value
    }
  }
  

  let a = new BinarySeachTree();
  a.insert(9);
  a.insert(7);
  a.insert(2);
  a.insert(6);
  a.insert(4);
  a.insert(10);
  a.insert(12);
  a.insert(11);
  a.insert(15);
  console.log(a.insert(8));

  console.log(a.find(2));
  console.log(a.find(5));
  console.log(a.find(11));
  a.find(15)
  let aa = JSON.stringify(a.insert(13))
  console.log(aa);

  let bb = JSON.stringify(a.find(11))
  console.log(bb);

console.log(`Min =${a.Findmin()}`);
console.log(`Max =${a.findmax()}`);
//   //make it in the frontend
//    let divht= document.getElementById('divpart');
//    divht.innerHTML=bb;