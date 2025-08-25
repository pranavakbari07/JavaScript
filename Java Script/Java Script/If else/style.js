//  normal if else

// let age = Number(prompt("Enter your age "))

// if(age>=18){
//     alert("You are aligible for vote")
// }else{
//     alert("You are not aligible for vote") 
// }


// let a = 10;
// let b = 20;
// let c;

// c = b
// b = a 
// a = c

// console.log(a)
// console.log(b)

// confirm function

// let choice = confirm("Can you play a game ?")

// if(choice){
//     alert("Let's Start")
// }else{
//     alert("Let's Over")
// }

// // leader if else


// let a = 25;
// let b = 35;
// let c = 55;
 
// if(a>b){
//    alert('a is max');
// }else{
//     alert('b is max')
// }


// let num = Number(prompt("Enter a number in 100 : "));

// if(num>=100){
//     alert("Inavlid marks")
// }else if(num>=90){
//     alert("A grade")}
// else if(num>=90){
//     alert("Invalid marks")
// }else if(num>=75){
//     alert("B grade")
// }else if(num>=60){
//     alert("C grade")
// }else if(num>=50){
//     alert("D grade")
// }
  


// let num = Number(prompt("Enter A number"))

// if(num%2 == 0){
//     alert("Your num is even")
// }else{
//     alert("Your num is odd")
// }


// nested if else 
// min or max number 

let a = Number(prompt("Enter a number 1 :"));
let b = Number(prompt("Enter a number 2 :"));
let c = Number(prompt("Enter a number 3 :"));


// if(a>b){
//     if(a>c){
//         alert("A is max")
//     }else{
//         alert("c is max")
//     }
// }else{
//     if(b>c){
//         alert("b is max")
//     }else{
//         alert("c is max")
//     }
// }

if(a>=b){
    if(a==b && a==c){
        alert("both are sam")
    }else if(a==b){
        alert("A and B are same")
    }else if(a>c){
        alert("A is max")
    }else{
        alert("c is max")
    }
}else{
    if(b>c){
        alert("b is max")
    }else if(b==c){
        alert("B and C is sam")
    }
    else{
        alert("c is max")
    }
}

// if(a<b){
//     if(a<c){
//         alert("A is min")
//     }else{
//         alert("c is min")
//     }
// }else{
//     if(b<c){
//         alert("b is min")
//     }else{
//         alert("c is min")
//     }
// }