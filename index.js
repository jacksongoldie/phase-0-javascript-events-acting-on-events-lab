
//grab dodger element by id to manipulate
const dodger = document.getElementById("dodger");

//function created to create an end to how far left it can go
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

//event listener for the arrow keys conditional for left arrow
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });

//create right arrow movement  
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0 && left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}
