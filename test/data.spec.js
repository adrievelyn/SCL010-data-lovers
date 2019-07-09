describe("data", () => {
  it(" data debería ser un objeto", () => {
    assert.equal(typeof window.data, "object");
  });
});

describe("data.mostrarIndicador", () => {
  it("debería ser una función", () => {
    assert.equal(typeof window.data.mostrarIndicador, "function");
  });

  // it('debería retornar "example"', () => {
  //   assert.equal(example(), "example");
  // });
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
