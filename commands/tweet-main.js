const KeyStore = require('../lib/key-store');
const inquirer = require('inquirer');
const { isValid } = require('../utils/validate');
const TweetManager = require('../lib/tweet-manager');
require('colors');


const tweet = {
    async sendTweet(){
        const {consumer_key, consumer_secret, access_token_key, access_token_secret} = new KeyStore().getKeys();

        const tweetManager = new TweetManager(consumer_key, consumer_secret, access_token_key, access_token_secret);

        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'message',
                message: 'Tweet something!🐦: '.blue,
                validate: isValid
            }
        ]);

        var val = await tweetManager.tweetMessage(input.message);
        if(val){
            console.log('Tweeted successfully!'.green);
        }else{
            console.error('Some error occurred!'.red);
        }
    },

    showTweets(){
        const {consumer_key, consumer_secret, access_token_key, access_token_secret} = new KeyStore().getKeys();

        const tweetManager = new TweetManager(consumer_key, consumer_secret, access_token_key, access_token_secret);
        
        tweetManager.showTweets();
    },

    async searchTweets(){
        const {consumer_key, consumer_secret, access_token_key, access_token_secret} = new KeyStore().getKeys();

        const tweetManager = new TweetManager(consumer_key, consumer_secret, access_token_key, access_token_secret);
        
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'keyword',
                message: 'Type a keyword to search related tweets!🔍: '.blue,
                validate: isValid
            }
        ]);

        tweetManager.seachForTweets(input.keyword);
    }

}

module.exports = tweet;