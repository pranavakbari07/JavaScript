let box = document.querySelector("#box");
let btn = document.querySelector("#btn");

let arr = ["black","green","red","Brown","yellow","Pink"]

let i = 0;

function magic(){
    box.style.backgroundColor = arr[i];
    box.innerHTML = arr[i];
    if(i<arr.length){
        i += 1;
    }else{
        i = 0;
    }
}

// The forEach loop use to iterate the array, not return the new array
arr.forEach((item)=>{
    console.log(item);    
})

// The forEach loop use to iterate the array, return the new array
let arr2 = arr.map((item)=>{
    return item + " map";
})
console.log(arr2);


// return boolean data type
let naam = "Jensi";

console.log(naam.includes("ns"));
console.log(arr.includes("white"));
console.log(arr.includes("black"));
