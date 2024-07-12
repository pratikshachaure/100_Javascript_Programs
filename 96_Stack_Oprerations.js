let max = 4;  
let arr = new Array(max);  
let top = -1;  
console.log(arr.length);  

function push(data) {
    if (top >= max - 1) {   
        console.log("Stack overflow"); 
        return;
    } 
    arr[++top] = data; 
    console.log(arr); 
}

console.log("topmost Element in the array  is  this element ", arr[top]);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

function display() {
    if (top == -1) {
        console.log("Stack is empty");
    } else {
        for (let i = 0; i <= top; i++) {
            console.log("ele", arr[i]);
        }
    }
} 

function pop() {
    if (top == -1) {
        console.log("Stack is empty");
        return;
    } 
    let value = arr[0];
    for (let i = 0; i < top; i++) {
        arr[i] = arr[i + 1];
    }
    arr[top] = undefined;
    top--;
    return value;
}

push(10);
push(20);
push(30);
push(40); 

console.log("Topmost element in the stack is:", arr[top]);
console.log("Elements in the stack:");
display();

let resultPop = pop();
console.log("Deleted element is:", resultPop); 
console.log("After Delete :");
display();
