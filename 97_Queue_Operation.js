const prompt=require('prompt-sync')();
let size=5;
let arr=new Array(size);
let front=-1;
let rear=-1;
 

function push(ele)
{
      
     if(rear==size-1)
     {
        console.log("Queue is overflow");
     }
     else{

        if(front==-1)
        {
            front=0;
        } 
        rear++;
        arr[rear]=ele;
        console.log("rear",arr[rear])
        
     }

     
}

function pop()
{
    if(front==-1||front>rear)
    {
        console.log("Queue is empty  ");
    }
    else{
        console.log("Deleted:-",arr[front]);
        front++;
    }
}
 
function display()
{
    let i;
    if(front==-1)
    {
        console.log("Queue is empty ");
    }
    else{
        console.log("Elemets :-");

        for(i=front;i<=rear;i++)
        {
            console.log(i,"=",arr[i]);
        }
    }
}

 
 push(1)
 push(22);
 push(3)
 push(4)
 push(4)
 push(46)
 
 
 
// pop()
display()