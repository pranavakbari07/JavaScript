function hello(){
    console.log("Hello");    
}

let btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    console.log("Hello event listner")
})

// let btns = document.getElementsByClassName("btn")
     
//  btns.forEach((btn)=>{
//      btn.addEventListener("click",()=>{
//          console.log();     
//      })
//  })

// Key press events