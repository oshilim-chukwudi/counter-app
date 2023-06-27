let count = 0;

// Select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// Set initial count value
value.textContent = count;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "red";
    }
    if (count < 0) {
      value.style.color = "#2196f3";
    }
    if (count == 0) {
      value.style.color = "#000";
    }
    value.textContent = count;
  });
});
