const display = document.getElementById('display');

function clearDisplay() {
  display.value = '';
}

function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}

function appendCharacter(char) {
  display.value += char;
  display.value = formatNumber(parseFloat(display.value.replace(/\./g, '').replace(',', '.')));
}

function calculate() {
  try {
    let value = display.value;
    value = value.replace(/%/g, '*0.01'); // Replace % with *0.01 for proper percentage calculation
    const result = eval(value);

    // Format the result with thousands separator
    display.value = formatNumber(result);
  } catch (error) {
    display.value = 'Error';
  }
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}