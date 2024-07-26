const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.querySelector('wind-speed');


async function checkWeather(city){

    const weather_data = await fetch(`https://api.weatherapi.com/v1/current.json?key=1516c116330e417987c135817242607&q=${city}`).then(response => response.json());

    temperature.innerHTML = `${Math.round(weather_data.current.feelslike_c)}°C`;

    console.log(weather_data);

    description.innerHTML = `${weather_data.current.condition.text}`;

    humidity.innerHTML = `${weather_data.current.humidity}%`;

    wind.innerHTML = `${weather_data.current.wind_kph} Km/hr`;

    switch(weather_data.current.condition.text){
        case 'Partly cloudy':
            weather_img.src='cloud.png';
            break;
        case 'Sunny':
            weather_img.src='clear.png';
            break;
        case 'Light rain shower':
            weather_img.src='thunder.png';
            break;
        case 'Fog':
            weather_img.src='mist.png';
            break;
        case 'Light snow':
            weather_img.src='mist.png';
            break;
        case 'Patchy rain nearby':
            weather_img.src='rain.png';
            break;

    }
}


searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});