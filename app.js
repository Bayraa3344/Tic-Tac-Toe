var statusDiv = document.querySelector(".status");
var resetDiv = document.querySelector(".reset");
var cellDivs = document.querySelectorAll(".game-cell");

function cellReset() {
  statusDiv.textContent = "× is next";
  for (var cellDiv of cellDivs) {
    cellDiv.textContent = "";
  }
}

// for (var cellDiv of cellDivs) {
//   cellDiv.addEventListener("click", pressXO, { once: true });
// }

function pressXO(e) {
  if (
    statusDiv.textContent === "× is next" &&
    event.target.textContent === ""
  ) {
    e.textContent = "x";
    var x = event.target.textContent;
    statusDiv.textContent = "o is next";
  } else if (
    statusDiv.textContent === "o is next" &&
    event.target.textContent === ""
  ) {
    e.textContent = "o";
    statusDiv.textContent = "× is next";
  }
}

function checkStatus(e) {}
