/* Manejo del DOM */

// /console.log(WORLDBANK);
const chileData = WORLDBANK.CHL;
const peruData = WORLDBANK.PER;
const mexicoData = WORLDBANK.MEX;
const brasilData = WORLDBANK.BRA;

/*Lectura y manejo de la variable país*/
var urlParams = new URLSearchParams(window.location.search);
let selectCountry = urlParams.get("country");


// for (let i = 0; i < chileData.indicators.length; i++) {
//  //   console.log(chileData.indicators[i].indicatorName);
//  let indicatorSelect = document.getElementById("indicatorsSelect");
//  let option = document.createElement("option");
//  option.value = chileData.indicators[i].indicatorName;
//  option.text = chileData.indicators[i].indicatorName;
//  indicatorSelect.add(option);
// }

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
 showDoughnutMaxValue();
 showDoughnutAverageValue();
});

var graphPlaceholder = document.getElementById("myChart").getContext("2d");

// *Código JavaScript del data.js:*
/* Manejo de data */

function mostrarIndicador() {
 // console.log(selectIndicator);
 // console.log(selectedData.indicators[selectIndicator]);

 // Inicializamos los arreglos vacios.
 let arrayToChart = [];
 let labelArray = [];
 let indicatorNumber = selectIndicator;

 // Estructura repetitiva para generar los puntos del gráfico en arreglo de objetos, a partir de la data.
 for (let year in selectedData.indicators[indicatorNumber].data) {
   if (selectedData.indicators[indicatorNumber].data[year] === "") {
     selectedData.indicators[indicatorNumber].data[year] = 0;
   }
   // Agregando al arreglo de los valores
   arrayToChart.push(selectedData.indicators[indicatorNumber].data[year]);
   // Agregando al arreglo de los años
   labelArray.push(year);
 }
 // console.table(arrayToChart);

 // Generando el Gráfico
 var chart = new Chart(graphPlaceholder, {
   type: "line",
   data: {
     labels: labelArray,
     datasets: [
       {
         label: selectedData.indicators[indicatorNumber].indicatorName,
         data: arrayToChart
       }
     ]
   }
 });
}
function addText(chart) {

  var canvas = document.getElementById(chart);
  var ctx = document.getElementById(chart).getContext("2d");
  var cx = canvas.width / 2;
  var cy = canvas.height / 2;
  // alert(cx+"  " +cy);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '14px verdana';
  ctx.fillStyle = 'black';
  ctx.fillText("Text Here", cx, cy);

}
//Agregando dona con el valor maximo
function showDoughnutMaxValue() {
	let indicatorNumber = selectIndicator;
	let maxValue = 0;
	let minValue = 0;
	for (let year in selectedData.indicators[indicatorNumber].data) {
		if (selectedData.indicators[indicatorNumber].data[year] != "") {
     if (selectedData.indicators[indicatorNumber].data[year] > maxValue) {
     		console.log(selectedData.indicators[indicatorNumber].data[year]+" es mayor "+maxValue);
     	 maxValue = selectedData.indicators[indicatorNumber].data[year]
     }
   }
	}
	minValue = 100 - maxValue;
	// alert(minValue);
	// alert(maxValue);
	var chart = document.getElementById('doughnutMax').getContext('2d');
	chart.font="36px verdana";
	chart.fillText("76",150,100);
var config = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [maxValue,minValue],
					backgroundColor: ['#6b48ff','#f9f9f9'],
				}],

			},
			options: {
				cutoutPercentage: 80,
				responsive: true,
				onAnimationComplete: addText('doughnutMax'),
				legend: {
					position: 'top',
				},
				tooltips: {
            enabled: false
        },
				title: {
					display: true,
					text: 'Valor Maximo',
					position: 'bottom'
				},
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
		};

	var doughnutMax = new Chart(chart, config);


	}

// Agrenado dona con valor promedio
function showDoughnutAverageValue() {
	let indicatorNumber = selectIndicator;
	let count = 0;
	let average = 0;
	let mount = 0;
	let minValue = 0;
	for (let year in selectedData.indicators[indicatorNumber].data) {
		if (selectedData.indicators[indicatorNumber].data[year] != "") {
     	mount = mount + selectedData.indicators[indicatorNumber].data[year];
     	count = count + 1;
   	}
	}
	average = mount / count;
	console.log(average);
	minValue = 100 - average;

	var chart = document.getElementById('doughnutAverages').getContext('2d');

var config = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [average,minValue],
					backgroundColor: ['#6b48ff','#f9f9f9'],
				}],

			},
			options: {
				cutoutPercentage: 80,
				responsive: true,
				onAnimationComplete: addText('doughnutAverages'),
				legend: {
					position: 'top',
				},
				tooltips: {
            enabled: false
        },
				title: {
					display: true,
					text: 'Valor Promedio',
					position: 'bottom'
				},
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
		};

	var doughnutMax = new Chart(chart, config);
}

