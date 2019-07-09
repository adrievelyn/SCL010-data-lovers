global.window = global;
global.assert = require("chai").assert;
require("../src/data/worldbank/worldbank.js");
require("../src/data.js");
require("./data.spec.js");
