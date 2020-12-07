const square = document.createElement('div');
let grow = true;
document.body.appendChild(square);
let size = 100;
square.style.width = size + "px";
square.style.height = size + "px";

//maksymalna wielkosc kwadratu
//window.innerWidgt *0.5;

window.addEventListener("scroll", function () {
    if (grow == true) {
      size += 5;
      square.style.width = size + "px";
      square.style.height = size + "px";
    } else {
      size -= 5;
      square.style.width = size + "px";
      square.style.height = size + "px";
    }
    if (size >= window.innerHeight / 2) {
      grow = false;
    }
    else if(size ==0){
      grow = true;
    }
  }



);