/* Manejo de data */

function mostrarIndicador() {
  console.log(selectIndicator);
  console.log(selectedData.indicators[selectIndicator]);

  // Inicializamos los arreglos vacios.
  let arrayToChart = [];
  let labelArray = [];
  let indicatorNumber = selectIndicator;

  // Todo Investigar for para objetos.
  for (let key in selectedData.indicators[indicatorNumber].data) {
    if (selectedData.indicators[indicatorNumber].data[key] === "") {
      selectedData.indicators[indicatorNumber].data[key] = 0;
    }

    // Agregando al arreglo de los valores
    arrayToChart.push(selectedData.indicators[indicatorNumber].data[key]);
    // Agregando al arreglo de los años
    labelArray.push(key);
  }
  console.table(arrayToChart);

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
