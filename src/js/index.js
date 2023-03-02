import axios from "axios";
const apiKey = "73bd6bca6bd522830119f0c6decba840";

const btnCurrent = document.getElementById('btnCurrent')
console.log(btnCurrent);

btnCurrent.addEventListener('click', setPosition)

if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    console.log(error);
}

function setPosition(position) {
	if (position && position.coords) {
		let latitude = position.coords.latitude;
		let longitude = position.coords.longitude;

		getWeather(latitude, longitude);
	} else {
		console.log("Position data not available.");
	}

}

function showError(error) {
	console.log(`nothing`);
   //  notificationElement.style.display = "block";
   //  notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
		 .then(function (data) {
			  console.log(data);
            // weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            // weather.description = data.weather[0].description;
            // weather.iconId = data.weather[0].icon;
            // weather.city = data.name;
            // weather.country = data.sys.country;
        })
      //   .then(function(){
      //       displayWeather();
      //   });
}