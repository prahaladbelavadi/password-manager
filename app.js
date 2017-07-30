console.log("Starting Password manager");

var storage = require('node-persist');
storage.initSync();

storage.setItemSync('accounts',[{
    username: 'Prahalad',
    balance: 0
}]);

var accounts = storage.getItemSync('accounts');
console.log(accounts);
