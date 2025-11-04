let name = document.getElementById("name");
let age = document.getElementById("age");
let city = document.getElementById("city");
let btn = document.getElementById("btn");
let cards = document.getElementById("cards");

btn.addEventListener("click", () => {
  let oldRecord = JSON.parse(localStorage.getItem("Students")) || [];

  let obj = { id: Date.now(), name: name.value, age: age.value , city: city.value }; ;

  oldRecord.push(obj);

  localStorage.setItem("Students", JSON.stringify(oldRecord));

  name.value = "";
  age.value = "";  
  city.value = "";

  getData();
});

function getData() {
  let allData = JSON.parse(localStorage.getItem("Students")) || [];

  cards.innerHTML = "";

  allData.forEach((Students) => {
    let div = document.createElement("div");
    let Name = document.createElement("h1");
    let Age = document.createElement("h1");
    let city = document.createElement("h1");


    Name.innerText = Students.name;
    Age.innerText = Students.age;
    city.innerText = Students.city;

    div.classList.add("box");

    div.append(Name);
    div.append(Age);
    div.append(city);

    cards.append(div);
  });
}

getData();
