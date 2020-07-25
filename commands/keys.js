const KeyStore = require('../lib/key-store');
const inquirer = require('inquirer');
const { isValid } = require('../utils/validate');
require('colors');

const keys = {
    async set(){
        const keyStore = new KeyStore();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'consumer_key',
                message: 'Enter CONSUMER KEY!'.yellow + ' -- https://developer.twitter.com/en',
                validate: isValid
            },
            {
                type: 'input',
                name: 'consumer_secret',
                message: 'Enter CONSUMER SECRET!'.yellow + ' -- https://developer.twitter.com/en',
                validate: isValid
            },
            {
                type: 'input',
                name: 'access_token_key',
                message: 'Enter ACCESS TOKEN KEY!'.yellow + ' -- https://developer.twitter.com/en',
                validate: isValid
            },
            {
                type: 'input',
                name: 'access_token_secret',
                message: 'Enter ACCESS TOKEN SECRET!'.yellow + ' -- https://developer.twitter.com/en',
                validate: isValid
            }   
        ]);

        var val = keyStore.setKeys(input.consumer_key, input.consumer_secret, input.access_token_key, input.access_token_secret);

        if(val){
            console.log('Keys are set!'.green);
        }
    },
    show(){
        try{
            const keyStore = new KeyStore();
            const API_KEY = keyStore.checkIfKeysExist();
            console.log(API_KEY);
        }catch(e){
            console.error(e.red);
        }
    },
    delete(){
        const keyStore = new KeyStore();
        var val = keyStore.deleteKeys();

        if(val){
            console.log('Keys deleted successfully!'.blue);
        }else{
            console.error('Some error occurred!'.red);
        }
    }
}

module.exports = keys;