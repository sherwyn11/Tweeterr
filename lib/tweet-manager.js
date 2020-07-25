var Twitter = require('twitter');
const { resolve } = require('path');
const { rejects } = require('assert');

class TweetManager{

    constructor(consumer_key, consumer_secret, access_token_key, access_token_secret){
        this.client = new Twitter({
            consumer_key: consumer_key,
            consumer_secret: consumer_secret,
            access_token_key: access_token_key,
            access_token_secret: access_token_secret
        });
    }

    async tweetMessage(message){
        this.client.post('statuses/update', {status: message}, function(error, tweet, response) {
            return new Promise((resolve, reject) => {
                if(!error){
                    resolve(true);
                }else{
                    resolve(false);
                }
            })
        });
        return true;
    }
}

module.exports = TweetManager;