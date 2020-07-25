const { program } = require('commander');
const tweet = require('../commands/tweet-message');
require('colors');

program
    .command('message')
    .description('Tweet Message!')
    .action(tweet.sendTweet);

program.parse(process.argv);
