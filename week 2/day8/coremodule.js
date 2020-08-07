const path= require('path');

const fname= path.join(__filename);
console.log(fname);
const basename= path.basename(fname);
console.log(basename);
const extension= path.extname(__filename);
console.log(extension);