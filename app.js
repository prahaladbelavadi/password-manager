console.log("Starting Password manager");

var storage = require('node-persist');
storage.initSync();

storage.setItemSync('accounts',[{
    username: 'Prahalad',
    balance: 0
}]);

var accounts = storage.getItemSync('accounts');

// push items to array
accounts.push({
    username:'Jen',
    balance:100
})

storage.setItemSync('accounts',accounts)
console.log(accounts);
