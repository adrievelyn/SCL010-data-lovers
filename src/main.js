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

for (let i = 0; i < chileData.indicators.length; i++) {
  //   console.log(chileData.indicators[i].indicatorName);
  let indicatorSelect = document.getElementById("indicatorsSelect");
  let option = document.createElement("option");
  option.value = chileData.indicators[i].indicatorName;
  option.text = chileData.indicators[i].indicatorName;
  indicatorSelect.add(option);
}
