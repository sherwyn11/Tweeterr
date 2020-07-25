const Configstore = require('configstore');
var Twitter = require('twitter');

class KeyStore {

    constructor(){
        this.conf = new Configstore();
        this.client = null;
    }

    setKeys(consumer_key, consumer_secret, access_token_key, access_token_secret){
        this.client = new Twitter({
            consumer_key: consumer_key,
            consumer_secret: consumer_secret,
            access_token_key: access_token_key,
            access_token_secret: access_token_secret
        });

        console.log(this.client);

        this.conf.set('consumer_key', consumer_key);
        this.conf.set('consumer_secret', consumer_secret);
        this.conf.set('access_token_key', access_token_key);
        this.conf.set('access_token_secret', access_token_secret);

        return true;
    }

    checkIfKeysExist(){
        var consumer_key = this.conf.get('consumer_key');
        var consumer_secret = this.conf.get('consumer_secret');
        var access_token_key = this.conf.get('access_token_key');
        var access_token_secret = this.conf.get('access_token_secret');

        if (!consumer_key || !consumer_secret || !access_token_key || !access_token_secret){
            throw new Error('Keys not set!');
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