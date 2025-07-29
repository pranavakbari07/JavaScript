let count = document.getElementById("count");
let num = 0;
let timer;
function start()
{
    timer = setInterval(() => {
        count.innerText = num;
        num++;
    },1000)

}

function stop()
{
    clearInterval(timer)
}

function Restart()
{
    num = 0;
}