// A queue is an object that represents a data structure designed to have the element inserted at the end of the queue, and the element removed from the beginning of the queue.

let size=4;
let arr=new Array(size);
// console.log(arr.length)
let front=-1;
let rear=-1;

let oneque;

function queue(element)
{

    if(rear==size-1)
    {
        console.log("Queue is full ")
        return;
    }

    if(front==-1)
    {
        front=0;
    }
    rear++;
    arr[rear]=element;
}


function dequeue()
{
    if(front==-1||front>rear)
    {
    console.log("Queue is empty");

    }
    let element=arr[front];
    front++;
    return element;
}

queue(10)
queue(20)
queue(30);
console.log(dequeue())
console.log(dequeue())
console.log(dequeue())
// console.log(dequeue())