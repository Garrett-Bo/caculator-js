const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    try {
      output = eval(output);
    } catch (error) {
      output = "Error";
    }
  } else if (btnValue === "del") {
    output = output.slice(0, -1);
  } else if (btnValue === "clear") {
    output = "";
  } else {
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener('click', (e) => calculate(e.target.dataset.value));
});
