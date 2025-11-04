let inp = document.getElementById("inp");
let img = document.getElementById("img");
let heading = document.getElementById("heading");

const getWeather = async ()=>{
    const inpValue = inp.value;
    const response = await fetch(`https://wttr.in/${inpValue}?format=j1`);
    const data = await response.json();
    heading.innerText = `${data.nearest_area[0].areaName[0].value} weather : ${data.current_condition[0].temp_C}°C `;
}