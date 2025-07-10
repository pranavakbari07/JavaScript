let input = document.getElementById("inp")

function getValue(){
    // alert(input.value)
    document.querySelector("#heading").innerHTML = input.value
    input.value = ""
}

