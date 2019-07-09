/* Manejo de data */

window.data = {
  Chart: {},
  // CREACIÓN GRÁFICO DE LÍNEAS PARA LA DATA:
  mostrarIndicador: (selectIndicator, selectedData, graphPlaceholder) => {
    // console.log(selectIndicator);
    // console.log(selectedData.indicators[selectIndicator]);

    // Inicializamos los arreglos vacios.
    let arrayToChart = [];
    let labelArray = [];
    let indicatorNumber = selectIndicator;

    // Estructura repetitiva para generar los puntos del gráfico en arreglo de objetos, a partir de la data. (no incluye los valores que sean igual cero)
    for (let year in selectedData.indicators[indicatorNumber].data) {
      if (selectedData.indicators[indicatorNumber].data[year] !== "") {
        // Agregando al arreglo de los valores
        arrayToChart.push(selectedData.indicators[indicatorNumber].data[year]);
        // Agregando al arreglo de los años
        labelArray.push(year);
      }
    }

    // Generando el Gráfico
    // eslint-disable-next-line no-undef
    new Chart(graphPlaceholder, {
      type: "line",
      maintainAspectRatio: false,
      data: {
        labels: labelArray,
        datasets: [
          {
            label: selectedData.indicators[indicatorNumber].indicatorName,
            data: arrayToChart,
            borderColor: "#6B48FF",
            pointBackgroundColor: "#91CAC5",
            backgroundColor: "rgba(0, 0, 0, 0)"
          }
        ]
      }
    });

    // console.table(arrayToChart);
    return { arrayToChart, labelArray };
  },

  //Agregando dona con el valor maximo
  showDoughnutMaxValue(selectIndicator, selectedData, chartMax) {
    let indicatorNumber = selectIndicator;
    let maxValueOfIndicator = 0;
    let maxValueDifference = 0;
    for (let year in selectedData.indicators[indicatorNumber].data) {
      if (selectedData.indicators[indicatorNumber].data[year] !== "") {
        if (
          selectedData.indicators[indicatorNumber].data[year] >
          maxValueOfIndicator
        ) {
          maxValueOfIndicator = parseFloat(
            selectedData.indicators[indicatorNumber].data[year]
          ).toFixed("2");
        }
      }
    }
    maxValueDifference = 100 - maxValueOfIndicator;

    var config = {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [maxValueOfIndicator, maxValueDifference],
            backgroundColor: ["#6b48ff", "darkgray"]
          }
        ]
      },
      options: {
        layout: {
          padding: {
            left: 640,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        title: {
          display: true,
          text: "Valor Máximo",
          position: "bottom"
        },
        cutoutPercentage: 80,
        plugins: {
          doughnutlabel: {
            labels: [
              {
                text: maxValueOfIndicator + "%",
                font: {
                  size: "100"
                },
                color: "grey"
              }
            ]
          }
        }
      }
    };
    // eslint-disable-next-line no-undef
    new Chart(chartMax, config);

    return maxValueOfIndicator;
  },

  // Agrenado dona con valor promedio
  showDoughnutAverageValue(selectIndicator, selectedData, chartAverage) {
    let indicatorNumber = selectIndicator;
    let totalOfIndicators = 0;
    let averageValueOfIndicator = 0;
    let sumOfIndicatorsData = 0;
    let averageValueDifference = 0;
    for (let year in selectedData.indicators[indicatorNumber].data) {
      if (selectedData.indicators[indicatorNumber].data[year] !== "") {
        sumOfIndicatorsData =
          sumOfIndicatorsData +
          selectedData.indicators[indicatorNumber].data[year];
        totalOfIndicators = totalOfIndicators + 1;
      }
    }
    averageValueOfIndicator = parseFloat(
      sumOfIndicatorsData / totalOfIndicators
    ).toFixed("2");
    // console.log(averageValueOfIndicator);
    averageValueDifference = 100 - averageValueOfIndicator;

    var config = {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [averageValueOfIndicator, averageValueDifference],
            backgroundColor: ["#6b48ff", "darkgray"]
          }
        ]
      },
      options: {
        cutoutPercentage: 80,
        layout: {
          padding: {
            left: 0,
            right: 640,
            top: 0,
            bottom: 0
          }
        },
        title: {
          display: true,
          text: "Valor Promedio",
          position: "bottom"
        },
        plugins: {
          doughnutlabel: {
            labels: [
              {
                text: averageValueOfIndicator + "%",
                font: {
                  size: "100"
                },
                color: "grey"
              }
            ]
          }
        }
      }
    };
    // eslint-disable-next-line no-undef
    new Chart(chartAverage, config);

    return averageValueOfIndicator;
  }
};
