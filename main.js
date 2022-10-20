// variable isMouseDown and addEventListeners to track if mouse is pressed or not currently.
let isMouseDown = false;

document.addEventListener("mousedown", () => {
  isMouseDown = true;
});
document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

// calling the dom elements
const grid = document.querySelector("#grid");
const gridSizeButton = document.querySelector("#gridSizeButton");
const resetGridButton = document.querySelector("#resetGridButton");

// we add event listener to gridSizeButton that calls deleteGrid to delete the existing grid and then createGrid function with user prompt as parameter
gridSizeButton.addEventListener("click", () => {
  deleteGrid();
  createGrid(prompt("what Size of canvas do you want to sketch on?"));
});
// event listener to a resetGridButton that makes all the divs inside the grid white to reset the grid state.
resetGridButton.addEventListener("click", () => {
  console.log("resetGrid button here! :D");
  const resetDivs = document.querySelectorAll(".banana");
  resetDivs.forEach((div) => {
    div.style.background = "white";
  });
});

//function to create the grid with wanted size, then creating all the needed divs to fill the grid and then coloring it .
function createGrid(size) {
  if (size <= 0) {
    alert("How you gonna sketch on that...? pls give a number larger than 0");
  } else if (size > 100) {
    alert("Wow! Slow down...Maximum grid size is 100!");
  } else {
    console.log("createGrid here!");
    grid.style.gridTemplateColumns = `repeat( ${size}, 1fr`;
    grid.style.gridTemplateRows = `repeat( ${size}, 1fr`;
  }

  // here we create the amount of divs we need to fill the grid
  gridDivCount = size * size;

  for (let i = 0; i < gridDivCount; i++) {
    const div = document.createElement("div");
    div.classList.add("banana");
    grid.appendChild(div);
  }

  // event listener for all the created divs to color them if isMouseDown variable is true
  colorDiv = document.querySelectorAll(".banana");
  colorDiv.forEach((apple) => {
    apple.addEventListener("mouseover", () => {
      if (isMouseDown) {
        apple.style.background = "black";
      }
    });
  });
}

// function that deletes all div with the selected class name inside the container
function deleteGrid() {
  console.log("deleteGrid here! :D");
  const div = document.querySelectorAll(".banana");
  div.forEach((div) => {
    grid.removeChild(div);
  });
}

// defines the starting grid size when the page is loaded
createGrid(16);
