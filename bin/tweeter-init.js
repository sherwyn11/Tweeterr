const { program } = require('commander');
const keys = require('../commands/keys');
require('colors');

program
    .command('set')
    .description('Set API keys!')
    .action(keys.set);


program
    .command('get')
    .description('Set API keys!')
    .action(keys.show);


program
    .command('set')
    .description('Set API keys!')
    .action(keys.remove);


program.parse(process.argv);
