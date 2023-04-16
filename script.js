const apikey = `248c527187570a83ecbdc86980988314`;

const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");

const getWeather = async (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return showWeather(data);
}

const showWeather = (data) =>{

    if(data.cod == "404"){
        weather.innerHTML = `<h1>Sorry, City not found!</h1>`;
        return;
    }
    weather.innerHTML = `<div>
    <img src= "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>
    <h2>${Math.round(data.main.temp - 273.15)}°C</h2>
    <h4>${data.weather[0].main}</h4>
    <br>
    <h3>Wind Speed: ${Math.round(data.wind.speed * 3.6)} Km/hr</h3>
    <h3>Humidity: ${data.main.humidity}%</h3>
</div>`;
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value);
        event.preventDefault();
    }
)