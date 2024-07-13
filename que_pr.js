let size=5;
let front=-1;
let rear=-1;
let arr=new Array(size)


function push(ele)
{
    if(rear==size-1)
    {
        console.log("The Queue is overflow ")
    }
    else{

        // if(front==-1)
        // {
        //     front=0;
        // }
        rear++;
        arr[rear]=ele;
        console.log(arr[rear])
    }

}

function del()
{
    if(front==-1||front>rear)
    {
        console.log("Array is Empty ")

    }
    else{
        
    }
}
push(1)
push(2)
push(3)
push(4)
push(4)
 

















