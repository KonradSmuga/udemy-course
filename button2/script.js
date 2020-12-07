const button = document.querySelector('button');
let number = 1;
button.addEventListener("click", function () {
    const li = document.createElement("li")
    li.textContent = number;
    const list = document.querySelector("ul")
    list.appendChild(li);
    number+=2;
    if(number%3 == 0){
      li.classList.add("big");
    }
    


  }

)