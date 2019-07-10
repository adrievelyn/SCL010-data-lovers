global.window = global;
global.assert = require("chai").assert;
require("../src/data.js");
require("../src/data/worldbank/worldbank.js");
require("./data.spec.js");

describe("data", () => {
  it(" data debería ser un objeto", () => {
    assert.equal(typeof window.data, "object");
  });

  const sampleData = {
    indicators: [
      {
        data: {
          "2002": "",
          "2003": "",
          "2004": "",
          "2005": "",
          "2006": "",
          "2007": "",
          "2008": "",
          "2009": 22.5900001525879,
          "2010": 31.9099998474121,
          "2011": 33.2400016784668,
          "2012": 33.310001373291,
          "2013": 33.0099983215332,
          "2014": 33.8300018310547,
          "2015": 32.9099998474121,
          "2016": 34.0999984741211,
          "2017": 33.7200012207031
        },
        countryName: "Chile",
        countryCode: "CHL",
        indicatorName:
          "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
        indicatorCode: "SL.TLF.PART.FE.ZS"
      },
      {
        data: {
          "2003": 52.7793006896973,
          "2004": "",
          "2005": "",
          "2006": 51.684700012207,
          "2007": "",
          "2008": "",
          "2009": 49.780101776123,
          "2010": 55.3550987243652,
          "2011": 57.0130996704102,
          "2012": 56.421501159668,
          "2013": 56.7743988037109,
          "2014": 56.8973007202148,
          "2015": 55.7249984741211,
          "2016": 55.8078994750977,
          "2017": 55.9445991516113
        },
        countryName: "Chile",
        countryCode: "CHL",
        indicatorName: "Fuerza laboral con educación intermedia (% del total)",
        indicatorCode: "SL.TLF.INTM.ZS"
      }
    ]
  };

  describe("data.mostrarIndicador", () => {
    it("debería ser una función", () => {
      assert.equal(typeof window.data.mostrarIndicador, "function");
    });

    it("debería retornar el objeto que contiene 2 arreglos de datos y labels", () => {
      let resultado = {
        arrayToChart: [
          22.5900001525879,
          31.9099998474121,
          33.2400016784668,
          33.310001373291,
          33.0099983215332,
          33.8300018310547,
          32.9099998474121,
          34.0999984741211,
          33.7200012207031
        ],
        labelArray: [
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017"
        ]
      };
      assert.deepEqual(window.data.mostrarIndicador(sampleData, 0), resultado);
    });
  });

  describe("data.showDoughnutMaxValue", () => {
    it("debería ser una función", () => {
      assert.equal(typeof window.data.showDoughnutMaxValue, "function");
    });

    // it('debería retornar "example"', () => {
    //   assert.equal(example(), "example");
    // });
  });

  describe("data.showDoughnutAverageValue", () => {
    it("debería ser una función", () => {
      assert.equal(typeof window.data.showDoughnutAverageValue, "function");
    });

    // it('debería retornar "example"', () => {
    //   assert.equal(example(), "example");
    // });
  });
});
