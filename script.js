
function getWeather(city) {
    document.getElementById("cityName").innerText = city;
    
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText)

            document.getElementById("temp").textContent = response.main.temp;
            document.getElementById("feels_like").textContent = response.main.feels_like;
            document.getElementById("temp_min").textContent = response.main.temp_min;
            document.getElementById("temp_max").textContent = response.main.temp_max;
            document.getElementById("humidity").textContent = response.main.humidity;
            document.getElementById("sea_level").textContent = response.main.sea_level;


            console.log(this.responseText)
        }
    });

    xhr.open('GET', 'https://weather-api138.p.rapidapi.com/weather?city_name= ${encodeURIComponent(city)}');
    xhr.setRequestHeader('x-rapidapi-key', 'a1286e5097msh87b2e8b53ad183fp1ac5b1jsnacbda5535919');
    xhr.setRequestHeader('x-rapidapi-host', 'weather-api138.p.rapidapi.com');
    xhr.send();
}

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const city =
        document.getElementById("city").value;
    getWeather(city);

});
getWeather("Jalalabad")
