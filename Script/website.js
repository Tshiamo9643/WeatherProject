
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
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(weatherData => {
            console.log(weatherData.list);
            const date = new Date(weatherData.list[0].dt_txt);
            const month = date.getMonth();
            const day = date.getDay();
            switch (day) {
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
            switch (date.getMonth()) {
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
            weatherData.list.map = () => {
                for (i = 1; i < 4; i++) {
                    //Getting the date from each loop
                    const newDate = new Date(weatherData.list[i].dt_txt);
                    //The variable ID is day1, day2 and day3...The I serves as a link between JavaScript and Html where i represents the ID Variable
                    document.getElementById(`day${i}`).innerHTML = day2[newDate.getDay()];
                    //Same thing with the temperature variable
                    document.getElementById(`temp${i}`).innerHTML = `${weatherData.list[i].main.temp.toFixed(0)}°C`;
                    //Same thing with the temperature variable
                    document.getElementById(`weather_icon${i}`).innerHTML = weatherData.list[i].weather[0].icon;
                }
            }
             
        })                 
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////**


