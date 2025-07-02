let img = document.querySelector("#img");
let arr = ["img-1.jpg", "img-2.jpg", "img-3.jpg", "img-4.jpg","img-5.jpg"];


let i = 0;

function slideRight() {
  i++;
  if (i >= arr.length) i = 0;
  img.src = arr[i];
}

function slideLeft() {
  i--;
  if (i < 0) i = arr.length - 1;
  img.src = arr[i];
}
