let name = document.getElementById("name");
let roll = document.getElementById("roll");
let branch = document.getElementById("branch");
let email = document.getElementById("email");
let phone = document.getElementById("number");
let add = document.getElementById("address");
let city = document.getElementById("city");

let btn = document.getElementById("btn");
let box = document.getElementById("box");

btn.addEventListener("click", () => {
  let oldrecord = JSON.parse(localStorage.getItem("record")) || [];

  let obj = {
    id: Date.now(),
    name: name.value,
    roll: roll.value,
    branch: branch.value,
    email: email.value,
    number: phone.value,
    add: add.value,
    city: city.value,
  };

  oldrecord.push(obj);
  localStorage.setItem("record", JSON.stringify(oldrecord));

  name.value = "";
  roll.value = "";
  branch.value = "";
  email.value = "";
  phone.value = "";
  add.value = "";
  city.value = "";

  getdata();
});

function getdata() {
    let allData = JSON.parse(localStorage.getItem("record")) || [];
    box.innerHTML = "";

    allData.forEach((inp) => {
        let div = document.createElement("div");
        let name = document.createElement("h4");
        let roll = document.createElement("h4");
        let branch = document.createElement("h4");
        let email = document.createElement("h4");
        let phone = document.createElement("h4");
        let address = document.createElement("h4");
        let city = document.createElement("h4");
        let deleteBtn = document.createElement("button");

        name.innerText = "Name : " + inp.name;
        roll.innerText = "Roll Number : " + inp.roll;
        branch.innerText = "Branch : " + inp.branch;
        email.innerText = "Email : " + inp.email;
        phone.innerText = "Phone : " + inp.number;
        address.innerText = "Address : " + inp.add;
        city.innerText = "City : " + inp.city;

        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete");
        deleteBtn.setAttribute("data-id", inp.id);

        deleteBtn.addEventListener("click", () => {
            let id = deleteBtn.getAttribute("data-id");
            let filteredData = allData.filter((item) => item.id != id);
            localStorage.setItem("record", JSON.stringify(filteredData));
            getdata(); 
        });

        div.classList.add("card");

        div.append(name, roll, branch, email, phone, address, city, deleteBtn);
        box.append(div);
    });
}
getdata(); 