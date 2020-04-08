## Aplicación de consola que consulta el clima y el pronóstico de una ciudad

Para instalar, en la carpeta del proyecto ejecutar:

```
npm install
```

Para su uso es necesario contar con una API KEY del servicio OpenWeatherMap (https://openweathermap.org/).
La API KEY se debe colocar en el arcivo ./keys/keys.js

Uso:

Para consulutar el clima actual de una ciudad, ejecutar:
```
node app now -a "Portoviejo"
```

Para consultar el pronóstico de los próximos 5 días de una ciudad, ejecutar:
```
node app fivedays -a "Barcelona"
```