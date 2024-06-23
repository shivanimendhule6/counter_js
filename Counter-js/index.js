let count = 0;

function updateCountDisplay() {
  document.getElementById("count").textContent = count;
}

function handelIncrement() {
  count++;
  updateCountDisplay();
}

function handelDecrement() {
  if (count > 0) {
    count--;
    updateCountDisplay();
  }
}
