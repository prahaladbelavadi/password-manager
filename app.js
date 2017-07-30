console.log("Starting Password manager");

var storage = require('node-persist');
storage.initSync();

// storage.setItemSync('name','Prahalad');
var name = storage.getItemSync('name');
console.log('Saved Name is '+name);
