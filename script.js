APIkey = "f7ea644e33a3f455ef668f4ce1d4418b"

//Hacer funcion de climas


const fetchData = position =>{
    const {latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}&lang=${'es'}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('ciudad').innerText = 'Clima en ' + data['name'] + ', ' + data['sys']['country'];

            document.getElementById('descripcion').innerText += " " + (data['weather'][0]['description'])
            document.getElementById('temperatura').innerText += " " + (data['main']['temp'] - 273).toFixed(2) + '°C'
            document.getElementById('temp_min').innerText +=  " " + (data['main']['temp_min'] - 273).toFixed(2) + '°C'
            document.getElementById('temp_max').innerText += " " + (data['main']['temp_max'] - 273).toFixed(2) + '°C'
            document.getElementById('humedad').innerText += " " + (data['main']['humidity']) + "%"
            document.getElementById('vientos').innerText += " " + ((data['wind']['speed'])*3.6).toFixed() + "K/H"
            document.getElementById('sen_termica').innerText += " " + (data['main']['feels_like']- 273).toFixed(2) + '°C'
            document.getElementById('nubosidad').innerText += " " + (data['clouds']['all']) + '%'

            
            
})
            
    
}

const onLoad = () =>{
    navigator.geolocation.getCurrentPosition(fetchData);
    
}




document.getElementById('boton').addEventListener('click', function() {
    const cityName = document.getElementById('ciudad-input').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=f7ea644e33a3f455ef668f4ce1d4418b' + '&lang=es')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ciudad').innerText = 'Clima en ' + data['name'] + ', ' + data['sys']['country'];
            document.getElementById('descripcion').innerText = 'Descripcion: ' + (data['weather'][0]['description'])
            document.getElementById('temperatura').innerText = 'Temperatura: ' + (data['main']['temp'] - 273).toFixed(2) + '°C'
            document.getElementById('temp_min').innerText = 'Minima: ' + (data['main']['temp_min'] - 273).toFixed(2) + '°C'
            document.getElementById('temp_max').innerText = 'Maxima: ' + (data['main']['temp_max'] - 273).toFixed(2) + '°C'
            document.getElementById('humedad').innerText = 'Humedad: ' + (data['main']['humidity']) + "%"
            document.getElementById('vientos').innerText = 'Vientos: ' + ((data['wind']['speed'])*3.6).toFixed() + "K/H"
            document.getElementById('sen_termica').innerText = 'Sensacion Termica' + (data['main']['feels_like']- 273).toFixed(2) + '°C'
            document.getElementById('presion_atmos').innerText = 'Presion Atmosferica: ' + (data['main']['pressure']) + " hPa"
            document.getElementById('nubosidad').innerText = "Nubosidad: " + (data['clouds']['all']) + '%'
            document.getElementById('precipitacion').innerText = "Precipitaciones" + (data['precipitation']['value']) + "mm"
            
        })
        
        
        /*.catch(() => {
            alert('Nombre de ciudad no encontrado, pruebe otra vez.');
        });*/
});