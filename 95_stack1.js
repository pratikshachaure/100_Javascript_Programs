let max = 4;
let arr = new Array(max);
let top = -1;
 

function push(data) {
    if (top >= max - 1) {
        console.log("Stack overflow");
        return;
    }

    top++;
    arr[top] = data;
    // console.log(arr);
}

 

function display() {
    if (top == -1) {
        console.log("Array is empty");
    } else {
        for (let i = 0; i <= top; i++) {
            console.log("ele", arr[i]);  
        }
    }
}

function pop() {
    if (top == -1) {
        console.log("Stack is Empty");
        
    }

    let value = arr[top];
    top--;
    return value;
}



push(100);
push(200);
push(3000);
push(400);
// push(800);

let deleted_element = pop();
console.log("Deleted Element is:", deleted_element);

display();
console.log("Topmost Element:", arr[top]); 
