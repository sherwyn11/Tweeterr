const { program } = require('commander');
const tweet = require('../commands/tweet-main');
require('colors');

program
    .command('tweets')
    .description('Show Tweets!')
    .action(tweet.showTweets);

program.parse(process.argv);
