
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
            document.getElementById("humid").textContent = `${data.main.humidity}%`;
        })
    //My forecast data
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(weatherData =>
        {
            console.log(weatherData.list);  
            const date = new Date(weatherData.list[0].dt_txt);
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
            }    
        ///////////////////////////////////////////////////////////////////////////////////**
            ///the next date my most challenging part of the code////
            const day2 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            weatherData.list.map = () =>
            {
                
                for (i = 0; i < 3; i++)
                {
                           day2Div.innerHTML +=`<div class="day2Div" id="day2Div">
                                                    <h4 id="day1">${weatherData.list[i + 5].dt_txt.slice(8, 11)}</h4>
                                                    <img src="https://api.openweathermap.org/img/w/${weatherData.list[i + 5].weather[0].icon}.png" alt="" id="weather_icon1">
                                                    <h4 id="temp1">${weatherData.list[i + 5].main.temp.toFixed(0)}°C</h4>
                                                </div>
                                                <div class="day3Div" id="day2Div">
                                                    <h4 id="day2">${weatherData.list[i + 11].dt_txt.slice(8, 11)}</h4>  
                                                    <img src="https://api.openweathermap.org/img/w/${weatherData.list[i + 11].weather[0].icon}.png" alt="" id="weather_icon2"></div>
                                                    <h4 id="temp2">${weatherData.list[i+11].main.temp.toFixed(0)}°C</h4>    
                                                </div>
                                                <div class="day4Div" id="day2Div">
                                                    <h4 id="day3">${weatherData.list[i + 20].dt_txt.slice(8, 11)}</h4>
                                                    <img src="https://api.openweathermap.org/img/w/${weatherData.list[i + 20].weather[0].icon}.png" alt="" id="weather_icon3">
                                                    <h4 id="temp3">${weatherData.list[i + 20].main.temp.toFixed(0)}°C</h4>
                                                </div>`    
                }
            
            }
            weatherData = weatherData.list.map();
             
        })                 
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////**


