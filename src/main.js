/* Manejo del DOM */

/*Varibles para obtener data de cada país, ya separada*/
//console.log(WORLDBANK);
const chileData = WORLDBANK.CHL;
const peruData = WORLDBANK.PER;
const mexicoData = WORLDBANK.MEX;
const brasilData = WORLDBANK.BRA;

/*Lectura y manejo de la variable país*/
var urlParams = new URLSearchParams(window.location.search);
let selectCountry = urlParams.get("country");
console.log(selectCountry);
let selectedData;
switch (selectCountry) {
  case "chile":
    selectedData = chileData;
    break;
  case "peru":
    selectedData = peruData;
    break;
  case "mexico":
    selectedData = mexicoData;
    break;
  case "brasil":
    selectedData = brasilData;
    break;
}

for (let i = 0; i < selectedData.indicators.length; i++) {
  let indicatorList = document.getElementById("indicatorsSelect");
  let option = document.createElement("option");
  option.value = i;
  option.text = selectedData.indicators[i].indicatorName;
  indicatorList.add(option);
}

let selectIndicator;
document.getElementById("indicatorsSelect").addEventListener("change", () => {
  selectIndicator = document.getElementById("indicatorsSelect").value;
  mostrarIndicador();
});

var graphPlaceholder = document.getElementById("myChart").getContext("2d");
