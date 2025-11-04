let name = document.getElementById("name");
let age = document.getElementById("age");
let subbtn= document.getElementById("btn");

let cards = document.getElementById("cards");
let editindex = null

// Create
subbtn.addEventListener("click",() => {
    let oldRecord = JSON.parse(localStorage.getItem("Students")) || []

    if(editindex == null){
        let obj = {id: Date.now(), name: name.value, age: age.value}
        oldRecord.push(obj);
    }else{ 
        let singledata = oldRecord.find((student) => student.id == editindex);
        singledata.name = name.value;
        singledata.age = age.value;
    }

    localStorage.setItem("Students", JSON.stringify(oldRecord));
 
    name.value = "";
    age.value = "";
    editindex = null;
    subbtn.innerText = "Submit";
    getData()
})


// Read & Delete
function getData(){
    let allData = JSON.parse(localStorage.getItem("Students")) || []
    cards.innerHTML = "";

    allData.forEach((student)=>{
        let div = document.createElement("div");
        let Name = document.createElement("h1");
        let Age = document.createElement("h1");


        // Create buttons for delete and edit
        let deleteBtn = document.createElement("button");
        let editBtn = document.createElement("button");

        Name.innerText = student.name;
        Age.innerText = student.age;
        deleteBtn.innerText = "Delete";
        editBtn.innerText = "Edit";

        div.classList.add("box");
        deleteBtn.classList.add("deleteBtn");
        editBtn.classList.add("editBtn");

        deleteBtn.setAttribute("data-id", student.id);
        editBtn.setAttribute("data-id", student.id);
    
        div.append(Name, Age, deleteBtn, editBtn);
        
        cards.append(div);
    });

    // Delete
    
    let deleteBtns = document.querySelectorAll(".deleteBtn");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", ()=>{
            let id = btn.getAttribute("data-id"); // get the id from the button
            let allData = JSON.parse(localStorage.getItem("Students")); // get all data from localStorage
            let newData = allData.filter((student) => student.id != id); // filter out the student with the matching id
            localStorage.setItem("Students", JSON.stringify(newData)); // update localStorage with the new data
            getData();           
        })
    })

    let editBtns = document.querySelectorAll(".editBtn");
    editBtns.forEach((btn) => {        
        btn.addEventListener("click",()=>{
            let id = btn.getAttribute("data-id");
            let singledata = allData.find((student) => student.id == id);

            name.value = singledata.name;
            age.value = singledata.age; 
            subbtn.innerText = "Update";
            editindex = singledata.id;
    })
})

}
getData();