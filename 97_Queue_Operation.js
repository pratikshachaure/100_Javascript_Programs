const prompt=require('prompt-sync')();
let size=5;
let arr=new Array(size);
let front=-1;
let rear=-1;
 

function enqueue(ele)
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
        // let ele=Number(prompt("Enter element"))
        rear++;
        arr[rear]=ele;
        
     }
     
}

function dequeue()
{
    if(front==-1||front>rear)
    {
        console.log("Underflow ");
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
            console.log(arr[i]);
        }
    }
}

 
 enqueue(1)
 enqueue(22)
 enqueue(3)
 enqueue(4)
 
 
dequeue()
display()