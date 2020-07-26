var Twitter = require('twitter');
require('colors');

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

    showTweets(){
        this.client.get('statuses/user_timeline', function(error, tweets, response) {
            if (!error) {
                for (const tweet of tweets){
                    console.log(tweet.id_str.yellow)
                    console.log(tweet.created_at.blue);
                    console.log(tweet.text.green);
                    console.log('  ---------------  '.red);
                }
            }
        });
    }

    seachForTweets(searchParam){
        this.client.get('search/tweets', {q: searchParam.toString()}, function(error, tweets, response) {
            if (!error) {
                for (const tweet of tweets.statuses){
                    console.log(tweet.id_str.yellow)
                    console.log(tweet.created_at.blue);
                    console.log(tweet.text.green);
                    console.log('  ---------------  '.red);
                }
            }        
        });
    }
}

module.exports = TweetManager;