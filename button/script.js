
let number = 1;
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  // console.log("klik!");
  const createDiv = document.createElement('div');
  createDiv.textContent =  number;

  if(number %5 ==0 ){
    createDiv.classList.add('circle');
  }
  document.body.appendChild(createDiv);
  number++;
  console.log(createDiv);
})