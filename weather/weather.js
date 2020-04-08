const axios = require('axios')
const {openWeatherMapAppId} = require('../keys/keys')

const baseUrl = 'https://api.openweathermap.org/data/2.5/'
const urlEnd = `&appid=${openWeatherMapAppId}&units=metric`

const getWeather = async (address) => {
    const resp = await axios.get(`${baseUrl}weather?q=${address}${urlEnd}`)
    const data = resp.data.main
    
    if(!data) {
        console.log(`No se pudo consultar el clima de ${address}`)
        return
    }
    
    return `En ${address.toUpperCase()} hay una temperatura de ${data.temp}ºC, una presión de ${data.pressure} y una humedad del ${data.humidity}%`
}

const getForecast = async (city) => {
    const resp = await axios.get(`${baseUrl}forecast?q=${city}${urlEnd}`)
    const data = resp.data.list
    
    if(!data) {
        console.log(`No se pudo consultar pronóstico de ${city}`)
        return
    }

    let final = []

    for(item of data) {
        let day = {
            'Fecha y hora': item.dt_txt,
            Temperatura: `${item.main.temp} ºC`,
            'Presión admosférica': item.main.pressure,
            Humedad: `${item.main.humidity}%`,
            Clima: item.weather[0].description
        }
        final.push(day)
    }
    
    return final
}

module.exports = {
    getWeather,
    getForecast
}