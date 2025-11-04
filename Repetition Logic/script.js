// Question 1 :
// 1 to 50 in even number
// for(let i=0; i<50; i++){
//    if(i%2==0){
//     console.log(i);    
//    } 
// }


// Question 2 :
// for(let i = 1; i <= 5; i++){
//   for(let j = i; j <= 5; j++){
//     if(j % 2 == 0) {
//       document.write(0);
//     }else{
//       document.write(1);
//     }
//   }
//   document.write("<br>");
// }



// Question 3 :
// 5 to 1 print
// for(let i=5; i>0; i--){
//     console.log(i);    
// }



// Question 4 :
// Table
// let num = Number(prompt("Enter your number :"));
// for(let i=1; i<=10; i++){
//     // console.log(num + " * " + i + " = " + num*i);   
//     console.log(`${i} x ${i} = ${i*num}`);   
// }



// Question 5 :
// 1 to 30 cube
// for(let i=1; i<=30; i++){
//    console.log(`${i} x ${i} x ${i} = ${i*i*i}`);   
// }


// Question 6 :
// 1 to 100 number devide by 7
// for(let i=1; i<100; i++){
//    if(i%7==0){
//     console.log(i);    
//    } 
// }



// Question 7 :
// let num = 0;
// while(num<5){
//     console.log(num);
//     num++;
// }



// Question 8 :
// let a = 23;

// if(a){
//     console.log("truthy");
// }else{
//     console.log("falsy");
// }



// Question 9 :
// Find even or odd number

// let num = Number(prompt("Enter your mark :"))

// if(num%2==0){
//     alert("Your number is odd...!")
// }else{
//     alert("Your number is even...!")
// }


// Question 10 :
// Swap Program

// let a = 10;
// let b = 20;
// let c;

// c = b;
// b = a;
// a = c;

// console.log(a);
// console.log(b);



// Question 11 :
// let mark = Number(prompt("Enter your marks : "));

// if(100<=mark){
//     alert("Your mark is invalid..!")
// }else if(90<=mark){
//     alert("Your grade is A...!")
// }else if(80<=mark){
//     alert("Your grade is B...!")
// }else if(70<=mark){
//     alert("Your grade is C...!")
// }else if(60<=mark){
//     alert("Your grade is D...!")
// }else{
//     alert("You are failed...!")
// }



// Question 12 :
// Find a value and Data type difference (== & ===)

// let a = "22";
// let b = 22;

// if(a==b){
//     console.log("Hello");
// }
// if(a===b){
//     console.log("Bye");
// }



// Question 13 :
// Sum of the number :
// let a = Number(prompt("Enter the first Number : "));
// let b = Number(prompt("Enter the second Number : "));
// let sum;
// alert(sum = a + b);



// Question 14 :
// Find a min number (By user)

// let x = Number(prompt("Enter first number : "));
// let y = Number(prompt("Enter second number : "));
// let z = Number(prompt("Enter third number : "));

// if(x<y){
//     if(x<z){
//         alert("x is min")
//     }else{
//         alert("z is min")
//     }
// }else{
//     if(y<z){
//         alert("y is min")
//     }else{
//         alert("z is min")
//     }
// }



// Question 15 :
// Find a two same number

let a = Number(prompt("Enter first number : "));
let b = Number(prompt("Enter second number : "));
let c = Number(prompt("Enter third number : "));

if(a>=b){
    if(a==b){
        alert(`${a} and ${b} both are equal`)
    }else if(a==c){
        alert("a and c both are equal")
    }else if(a>c){
        alert("a is max")
    }else{
        alert("c is max")
    }
}else{
    if(b==c){
        alert("B and c both are same")
    }else if(b>c){
        alert("b is max")
    }else{
        alert("c is max")
    }
}
