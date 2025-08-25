let tittle = document.getElementById("tittle");
let image = document.getElementById("image");
let add = document.getElementById("add");
let cards = document.getElementById("cards");

// Create
btn.addEventListener("click", () => {
  let oldRecord = JSON.parse(localStorage.getItem("Imagecard")) || [];
  let obj = {
    id: Date.now(),
    tittle: tittle.value,
    image: image.value
  };
  oldRecord.push(obj);
  localStorage.setItem("Imagecard", JSON.stringify(oldRecord));
  tittle.value = "";
  image.value = "";
  getData();
});

// Read
function getData() {
  let allData = JSON.parse(localStorage.getItem("Imagecard")) || [];
  cards.innerHTML = "";
  allData.forEach((student) => {
    let div = document.createElement("div");
    div.classList.add("box");

    let img = document.createElement("img");
    img.src = student.image;

    let tittle = document.createElement("h2");
    tittle.innerText = student.tittle;

    div.append(img, tittle);
    cards.append(div);
  });
}
getData();