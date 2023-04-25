
const resultElem = document.querySelector("#resultTemp");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  resultElem.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertTemp();
});

function convertTemp() {
  let inputValue = degree.value;

if (tempType.value === "fahrenheit") {
    const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    resultElem.innerHTML = `${FahrenheitToCelsius.toFixed(1)} &deg;c`;
  } else if (tempType.value === "celcius") {
    const CelsiustoFahrenheit = (inputValue * 9) / 5 + 32;
    resultElem.innerHTML = `${CelsiustoFahrenheit.toFixed(1)} &deg;f`;
  }
}