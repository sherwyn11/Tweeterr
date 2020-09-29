const { program } = require('commander');
const keys = require('../commands/keys');
require('colors');

program
    .command('set')
    .description('Set keys!')
    .action(keys.set);


program
    .command('get')
    .description('Get keys!')
    .action(keys.show);


program
    .command('delete')
    .description('Delete keys!')
    .action(keys.delete);


program.parse(process.argv);
