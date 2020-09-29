#!/usr/bin/env node

const { program } = require('commander');
const packageJson = require('../package.json');

program
    .version(packageJson.version)
    .command('keys', 'Manage keys!🔑')
    .command('tweet', 'Tweet something!🐦')
    .command('show', 'Show tweets!⬇️')
    .command('search', 'Search for tweets!🔍')
    .parse(process.argv);