let mode = document.getElementById("body")

function day(){
    mode.classList.remove("bg-gray-900","text-white")
    mode.classList.add("bg-white","text-black")
}
function night(){
    mode.classList.remove("bg-white","text-black")
    mode.classList.add("bg-gray-900","text-white")
}