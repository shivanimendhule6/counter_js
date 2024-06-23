let count = 0;

function updateCountDisplay() {
  document.getElementById("count").textContent = count;
}

function handelIncrement() {
  if (count < 10) {
    count++;
    updateCountDisplay();
  } else if (count === 10) {
    alert("Counter has reached 10!");
  }
}

function handelDecrement() {
  if (count > 0) {
    count--;
    updateCountDisplay();
  } else if (count === 0) {
    alert("Counter has reached 0!");
  }
}

function ResetToDefault() {
  count = 0;
  updateCountDisplay();
}
