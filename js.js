const divs = document.querySelectorAll('div');

divs.forEach((element) => element.addEventListener('click', manipulateDivs));

function manipulateDivs(event) {
  divs.forEach((element) => element.className = event.target.innerHTML.toLowerCase());

  // if (event.target.innerHTML === "Row") {
  //   divs.forEach((element) => element.className = "");
  // }
  // else if(event.target.innerHTML === "Column") {
  //   divs.forEach((element) => element.className = "column");
  // }
  // else if (event.target.innerHTML === "Square") {
  //   divs.forEach((element) => element.className = "square");
  // }
  // else {
  //   divs.forEach((element) => element.className = "corners");
  // }
}
