// const apiKey = "2f4f69b049bc5e4ff92b2e8eb38fb03b";
// const cityName = document.getElementById("city").value;

/*function search() {
    //I store the name of the city into a variable 
    
    
    //if the city is my current location then I must get my current location using navigator.getCurrentLocation
    if (cityName == "Current Location")
    {
        const success = (position) =>
        {
            console.log(position);
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
        }
        const error = (position) =>
        {
            console.log("Unable to retrieve location");
        }
        navigator.geolocation.getCurrentPosition(success, error);
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2f4f69b049bc5e4ff92b2e8eb38fb03b`;
    }
    //if it is not my current location then it takes the name of the variable
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function getWeather() {
    //I declared the variable that will the JSON data for the weather
    const response = await fetch(url);
    var data = await response.json();
    //////////////////////////////////////////////////////////////
    //I used the JSON data to get the weather icon using the element ID from the HTML
    document.getElementById("cloudIcon").src = `https://api.openweathermap.org/img/w/${icon}.png`;
    document.getElementsByClassName("cloud") = data.
    
    document.querySelector("description").innerHTML = data.weather.description;
    document.querySelector("temp").innerHTML = weatherData.main.temp;

}
*/
function search() {
    const apiKey = "2f4f69b049bc5e4ff92b2e8eb38fb03b";
    const cityName = document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const icon = data.weather[0].icon;
            const average = data.main.feels_like;

            document.getElementById("icon").src = `https://api.openweathermap.org/img/w/${icon}.png`;
            document.getElementById("description").textContent = data.weather[0].description;
            
            document.getElementById("temp").textContent = `${temp.toFixed(0)}°C`;
            document.getElementById("average").textContent = data.weather[0].average = `${average.toFixed(0)}°C`;

            document.getElementById("min").textContent = `${data.main.temp_min.toFixed(0)}°C`;
            document.getElementById("max").textContent = `${data.main.temp_max.toFixed(0)}°C`;
            
            document.getElementById("wind").textContent = `${data.wind.speed}KM/H`;
            document.getElementById("humid").textContent = data.main.humidity;
        })
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
        .then(response => response.json())
        .then(weatherData => {
            const date = new Date(weatherData.list[1].dt_txt);
            const month = date.getMonth();
            const day = date.getDay();
            
            
            switch (day)
            {
                case 0:
                    document.getElementById("day").textContent = `Sunday`;
                    break;
                case 1:
                    document.getElementById("day").textContent = `Monday`;
                    break;
                case 2:
                    document.getElementById("day").textContent = `Tuesday`;
                    break;
                case 3:
                    document.getElementById("day").textContent = `Wednesday`;
                    break;
                case 4:
                    document.getElementById("day").textContent = `Thursday`;
                    break;
                case 5:
                    document.getElementById("day").textContent = `Friday`;
                    break;
                default:
                    document.getElementById("day").textContent = `Saturday`;
                    break;
            }
            document.getElementById("date").textContent = date.getDate();
            switch (date.getMonth())
            {
                case 0:
                    document.getElementById("months").textContent = `JANUARY`;
                    break;
                case 1:
                    document.getElementById("months").textContent = `FEBRUARY`;
                    break;
                case 2:
                    document.getElementById("months").textContent = `MARCH`;
                    break;
                case 3:
                    document.getElementById("months").textContent = `APRIL`;
                    break;
                case 4:
                    document.getElementById("months").textContent = `MAY`;
                    break;
                case 5:
                    document.getElementById("months").textContent = `JUNE`;
                    break;
                case 6:
                    document.getElementById("months").textContent = `JULY`;
                    break;
                case 7:
                    document.getElementById("months").textContent = `AUGUST`;
                    break;
                case 8:
                    document.getElementById("months").textContent = `SEPTEMBER`;
                    break;
                case 9:
                    document.getElementById("months").textContent = `OCTOBER`;
                    break;
                case 10:
                    document.getElementById("months").textContent = `NOVEMBER`;
                    break;
                default:
                    document.getElementById("months").textContent = `DECEMBER`;
                    break;
                
                const icon2 = forecastData.list[index].weather[0].icon;
                document.getElementById(`weather_icon${index + 1}`).src = `https://api.openweathermap.org/img/w/${icon2}.png`;
                document.getElementById(`temp${index + 1}`).textContent = forecastData[index].main.temp;
                
            }})
           
}



