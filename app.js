const argv = require('./config/yargs').argv
const {getWeather, getForecast} = require('./weather/weather')

switch(argv._[0]) {
    case 'now':
        getWeather(argv.address)
            .then(console.log)
            .catch(console.log)
        break
    case 'fivedays':
        getForecast(argv.address)
            .then(resp => {
                console.log(`Pronóstico para ${argv.address.toUpperCase()}:`)
                console.log(resp)
            })
            .catch(console.log)
        break
    default:
        console.log(`Error: command ${argv._[0]} not known`)
        break
}
