let country = document.querySelector("#country");
let city = document.querySelector("#city");
let check = document.querySelector("#check");
let tempIcon = document.querySelector("#tempIcon");
let weatherCountry = document.querySelector("#weatherCountry");
let temperature = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");
let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");
let longitude = document.querySelector("#longitude");
let latitude = document.querySelector("#latitude");

check.addEventListener("click", () => {
    // Validation: Check if both fields are filled
    if (!country.value.trim() && !city.value.trim()) {
        alert("Please enter both Country and City!");
        return;
    }
    
    if (!country.value.trim()) {
        alert("Please enter Country name!");
        return;
    }
    
    if (!city.value.trim()) {
        alert("Please enter City name!");
        return;
    }
    
    let key = `bd4ea33ecf905116d12af172e008dbae`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&lang=en&units=metric&appid=${key}`;

    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        weatherCountry.innerText = `${data.name} / ${data.sys.country}`;
        temperature.innerHTML = `${data.main.temp}°<b>C</b>`;

        data.weather.forEach(items => {
            weatherDescription.innerText = items.description;
            
            // Change background based on weather condition
            if (items.id < 250) {
                // Thunderstorm
                document.getElementById('container').style.backgroundImage = "url('backgrounds/thunderstorm.jpg')";
                tempIcon.src = `tempicons/storm.svg`;
            } else if (items.id < 350) {
                // Drizzle
                document.getElementById('container').style.backgroundImage = "url('backgrounds/drizzle.jpg')";
                tempIcon.src = `tempicons/drizzle.svg`;
            } else if (items.id < 550) {
                // Snow
                document.getElementById('container').style.backgroundImage = "url('backgrounds/snow.jpg')";
                tempIcon.src = `tempicons/snow.svg`;
            } else if (items.id < 650) {
                // Rain
                document.getElementById('container').style.backgroundImage = "url('backgrounds/rain.jpg')";
                tempIcon.src = `tempicons/rain.svg`;
            } else if (items.id < 800) {
                // Atmosphere (fog, smoke, haze, mist)
                document.getElementById('container').style.backgroundImage = "url('backgrounds/smoke.jpg')";
                tempIcon.src = `tempicons/atmosphere.svg`;
            } else if (items.id === 800) {
                // Clear sky
                document.getElementById('container').style.backgroundImage = "url('backgrounds/clear.jpg')";
                tempIcon.src = `tempicons/sun.svg`;
            } else if (items.id > 800) {
                // Clouds
                document.getElementById('container').style.backgroundImage = "url('backgrounds/clouds.jpg')";
                tempIcon.src = `tempicons/clouds.svg`;
            }
        })

        feelsLike.innerText = `${data.main.feels_like}°C`;
        humidity.innerText = `${data.main.humidity}%`;
        latitude.innerText = `${data.coord.lat}`;
        longitude.innerText = `${data.coord.lon}`;
        
    })
    country.value = "";
    city.value = "";
})