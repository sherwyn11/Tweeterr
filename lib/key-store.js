const Configstore = require('configstore');
const packageJson = require('../package.json');

class KeyStore {

    constructor(){
        this.conf = new Configstore(packageJson.name);
    }

    setKeys(consumer_key, consumer_secret, access_token_key, access_token_secret){
        this.conf.set('consumer_key', consumer_key);
        this.conf.set('consumer_secret', consumer_secret);
        this.conf.set('access_token_key', access_token_key);
        this.conf.set('access_token_secret', access_token_secret);

        return true;
    }

    getKeys(){
        return {
            consumer_key: this.conf.get('consumer_key'),
            consumer_secret: this.conf.get('consumer_secret'),
            access_token_key: this.conf.get('access_token_key'),
            access_token_secret: this.conf.get('access_token_secret')
        }        
    }

    checkIfKeysExist(){
        var consumer_key = this.conf.get('consumer_key');
        var consumer_secret = this.conf.get('consumer_secret');
        var access_token_key = this.conf.get('access_token_key');
        var access_token_secret = this.conf.get('access_token_secret');

        if (!consumer_key || !consumer_secret || !access_token_key || !access_token_secret){
            throw 'Keys not set!';
        }

        return consumer_key;
    }

    deleteKeys(){
        this.conf.delete('consumer_key');
        this.conf.delete('consumer_secret');
        this.conf.delete('access_token_key');
        this.conf.delete('access_token_secret');
        
        return true;    
    }
}

module.exports = KeyStore;