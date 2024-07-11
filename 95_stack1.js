 let max = 4;  
let arr = new Array(max);  
let top = -1;  
console.log(arr.length);  
function push(data) {
    if (top >= max-1) 
    {   
        console.log("Stack overflow"); 
        return;
    } 

    arr[top] = data; 
    top++; 
    console.log(arr); 
     
}

 
push(78);
push(200)
push(400)
push(98); 
 
 console.log("Topmost Element:- ",arr[-1]) 
//  console.log(arr[0])
//  console.log(arr[1])
//  console.log(arr[2])
 


 function display()
 {
    if(top==-1)
    {
        console.log("Array is empty ");

    }
    else{

        for(let i=0;i<top;i++)
        {
            console.log("ele",arr[i])
        }
    }
     
 }


 display();

//  function pop()
//  {
//      let value=arr[0]
//      for(let i=0;i<top;i++)
//      {
//          arr[i]=arr[i+1];
//           top-=1;
//          return value;
 
//      }

//      display()
    
//  }


 
 
// let Deleted_element= pop();
// console.log("Deleted Element is :- ",Deleted_element);



 