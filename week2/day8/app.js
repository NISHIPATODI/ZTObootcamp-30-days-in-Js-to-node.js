var calc= require('./add.js');
const path = require('path');

result =calc.add(4,5);
console.log(result);

const fname= path.join(__filename);
console.log(fname);
//const basename= path.basename()