const address = {
    demand: true,
    alias: 'a',
    desc: 'Address to search'
}

const argv = require('yargs')
    .command('now', 'Search a city actual weather', {address})
    .command('fivedays', 'Search five days city weather forecast', {address})
    .help()
    .argv

module.exports = {
    argv
}