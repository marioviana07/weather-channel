function initpage() {
    const inputEl = document.getElementById("city-input")
    const searchEl = document.getElementById("search-button")
    const nameEl = document.getElementById("city-name")
    const clearEl = document.getElementById("clear")



    function getWeather(cityName) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
                cityName + "&appid=" + APIKey
            )
            .then(function(response) {
                console.log(response)
                return response.json();
            })
    }