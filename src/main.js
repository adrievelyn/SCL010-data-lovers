/* Manejo del DOM */
/*Varibles para obtener data de cada país, ya separada*/
//console.log(WORLDBANK);
const chileData = window.WORLDBANK.CHL;
const peruData = window.WORLDBANK.PER;
const mexicoData = window.WORLDBANK.MEX;
const brasilData = window.WORLDBANK.BRA;

/*Lectura y manejo de la variable país*/
var urlParams = new URLSearchParams(window.location.search);
let selectCountry = urlParams.get("country");
// console.log(selectCountry);

let selectedData;
switch (selectCountry) {
  case "chile":
    selectedData = chileData;
    document.getElementById("bannerImg").classList.add("chileBanner");
    document
      .getElementById("bannerText")
      .appendChild(document.createTextNode("Chile"));
    break;
  case "peru":
    selectedData = peruData;
    document.getElementById("bannerImg").classList.add("peruBanner");
    document
      .getElementById("bannerText")
      .appendChild(document.createTextNode("Perú"));
    break;
  case "mexico":
    selectedData = mexicoData;
    document.getElementById("bannerImg").classList.add("mexicoBanner");
    document
      .getElementById("bannerText")
      .appendChild(document.createTextNode("México"));
    break;
  case "brasil":
    selectedData = brasilData;
    document.getElementById("bannerImg").classList.add("brasilBanner");
    document
      .getElementById("bannerText")
      .appendChild(document.createTextNode("Brasil"));
    break;
}

// For para recorrer la lista de indicadores y mostrarlos en el select
for (let i = 0; i < selectedData.indicators.length; i++) {
  let indicatorList = document.getElementById("indicatorsSelect");
  let option = document.createElement("option");
  option.value = i;
  option.text = selectedData.indicators[i].indicatorName;
  indicatorList.add(option);
}

document.getElementById("indicatorsSelect").addEventListener("change", () => {
  const selectIndicator = document.getElementById("indicatorsSelect").value;
  window.data.mostrarIndicador(selectIndicator, selectedData, graphPlaceholder);
  window.data.showDoughnutMaxValue(selectIndicator, selectedData, chartMax);
  window.data.showDoughnutAverageValue(
    selectIndicator,
    selectedData,
    chartAverage
  );
});

var graphPlaceholder = document
  .getElementById("indicatorsChart")
  .getContext("2d");
var chartMax = document.getElementById("doughnutMax").getContext("2d");

var chartAverage = document.getElementById("doughnutAverages").getContext("2d");
