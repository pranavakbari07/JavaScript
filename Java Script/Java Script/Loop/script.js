// for Loop

// for(let i=0; i<51; i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

//tabel

// let a = Number(prompt("Enter your number"));

// for(let i=1; i<=10; i++){
//     console.log(`${a} x ${i} = ${i*a}`)

// }

//

// for(let i=0; i<100; i++){
//     if(i%7 == 0){
//         console.log(i);
//     }
// }

// for(let i=1; i<=30; i++){
//     console.log(`${i} x ${i} = ${i*i}`);
// }

// for(let i=1; i<=30; i++){
//     console.log(`${i} x ${i} x ${i} = ${i*i*i}`);
// }

// while Loop

// let num = 0;

// while (num < 5){
//   console.log(num);
//   num++;
// }

// Patten

// for (let i=0; i<5; i++){
//   for (let j = 0; j < i; j++){
//     console.log(j);
//   }
//   console.log();
// }



for (let i=1; i<=5; i++) {
    for (let j=i; j<=5; j++) {
    if (j%2 == 0) {
      document.write(0);
    }
    else{
      document.write(1);
    }
}
     document.write("<br>")
}




for(let i=1; i<=5; i++)
{
  for(let j=i; j<=5; j++)
  {
    document.write(j);
  }
  document.write("<br>")
}



for (let i=5; i>0; i--) {
    for (let j=i; j>0; j--) {
     document.write(j)
}
     document.write("<br>")
}



for(let i=1; i<=5; i++){
     for(let j=1; j<5; j++){
        if(i%2 == 0){
          document.write("0")
        }
        else{
          document.write("1")
        }
     }
   document.write("<br>")

}
