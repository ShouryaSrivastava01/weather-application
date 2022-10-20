console.log("loading javascript")
let weather = {
    apikey: "32b5ff4c23527855bb8c4e6d97b6250d",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apikey).then((response) => response.json()).then((data) => {
            this.displayWeather(data);
            this.forecast(data.coord);
        });
    },
    displayWeather: function(data) {
        const { lon, lat } = data.coord;
        console.log("longitude : " + lon + " Lattitude : " + lat);
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { temp_min, temp_max } = data.main;
        console.log("temp_min" + temp_min + "  temp_max" + temp_max)
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerHTML = `<span>${description}</span>`;
        document.getElementById("temp").innerHTML = `<span>Temperature : ${temp}</span>`;
        document.querySelector(".humidity").innerHTML = `<span>humidity : ${humidity}</span>`;
        document.querySelector(".wind").innerHTML = `<span>Wind : ${((speed*18)/5).toFixed(2)} km/h</span>`;
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
        console.log(document.querySelector(".search-bar").value)
    },



    forecast: function(coordinates) {
        const { lat, lon } = coordinates;
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=metric&appid=" + this.apikey).then((response) => response.json()).then(data => {
            console.log(data)
            let daily = data.daily;
            let html = "",
                temp, weather, date, i = 0,
                forecastHtml = "",
                wind;
            document.querySelector('.loader').style.display = "none"
            daily.forEach(element => {
                i++;
                temp = element.temp;
                wind = element.wind_speed;
                weather = element.weather[0];
                date = new Date(element.dt * 1000);
                const dayNames = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
                const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
                    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
                ];

                html += `<li>
            <span >${dayNames[date.getDay()]}, ${monthNames[date.getMonth()]} ${date.getDate()}</span>
            <div id="days">
                <div id="day-weather">
                 <img src="https://openweathermap.org/img/wn/${weather.icon}.png" alt="icon"/>
                    <span> ${parseInt(temp.min)}/${parseInt(temp.max)} </span>
                </div>
                <span class="weather-desc">${weather.description}</span>
                <span class="detail-btn" data-key=${i}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg></span>
               </div>
            </div> 
         </li>

       <div class="details" data-id=${i}>
       <div id="day-weather">
                
                 <img src="assets/morning.png" alt="morning-icon"/>
                 <span> ${parseInt(temp.day)}</span>
                 <img src="assets/moon.png" alt="night-icon"/>
                 <span> ${parseInt(temp.night)}</span>
                 <img src="https://openweathermap.org/img/wn/${weather.icon}.png" alt="icon"/>
                    <span> ${parseInt(temp.min)}/ ${parseInt(temp.max)} </span>
                </div>
                <span class="weather-desc">${weather.description}</span>
                <span>${wind}</span>
         <span class="detail-btn" data-key=${i}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
         <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
       </svg></span>
         </div>`

            });
            document.getElementById("forecast-list").innerHTML = html
            var detailBtn = document.querySelectorAll('.detail-btn');
            var opened = false;
            detailBtn.forEach(element => {
                element.addEventListener('click', () => {
                    const box = document.querySelector(`.details[data-id="${element.dataset.key}"]`)
                    if (!opened) {
                        box.classList.add('detail-open');
                        opened = true;
                    } else {
                        box.classList.remove('detail-open');
                        opened = false;
                    }
                })
            })






        })
    },
    geoweather: function() {
        const data = [];
        if (navigator)
            navigator.geolocation.getCurrentPosition((position) => {
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=` + this.apikey).then((response) => response.json()).then(data => this.fetchWeather(data.name))
            })
        else
            alert("no kr gsp")
        console.log(data)
    }



};
weather.geoweather();


document.querySelector(".search button").addEventListener("click", () => {
    weather.search();
});


document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
});