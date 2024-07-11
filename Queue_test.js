const prompt=require('prompt-sync')();
let size=5;
let arr=new Array(size);
let front=-1;
let rear=-1;
let ch;
let inesrt=console.log(" Press 1.Inerst the Elemet");
let del=console.log(" Press  2.delete the element");
let dis=console.log(" Press 3. Display"); 
while(1)
{ 
    
let choice=Number(prompt("Enter choick - ")); 
switch(choice)
{
    case 1:
        enqueue();
        break;
    case 2:
        dequeue();
        break;
        case 3:
        display();
        break;
        
        default:
     console.log("Wront Choice"); 
}
}

function enqueue()
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
        let ele=Number(prompt("Enter element"))
        rear++;
        arr[rear]=ele;
     }
}

function dequeue()
{
    if(front==-1)
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