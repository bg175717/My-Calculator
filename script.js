const display = document.getElementById("display");

function clearDisplay() {
  display.textContent = "0";
}

function deleteLast() {
  display.textContent =
    display.textContent.length > 1 ? display.textContent.slice(0, -1) : "0";
}

function appendValue(value) {
  if (display.textContent === "0" && !isNaN(value)) {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function calculate() {
  try {
    const result = eval(display.textContent);
    display.textContent = result;
  } catch {
    display.textContent = "Error";
  }
}
