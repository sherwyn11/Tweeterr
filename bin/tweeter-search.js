const { program } = require('commander');
const tweet = require('../commands/tweet-main');
require('colors');

program
    .command('tweets')
    .description('Search for tweets based on a keyword!')
    .action(tweet.searchTweets);

program.parse(process.argv);
