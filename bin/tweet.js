#!/usr/bin/env node

const { program } = require('commander');
const package = require('../package.json');

program
    .version(package.version)
    .command('init', 'Manage API keys!')
    .parse(process.argv);

