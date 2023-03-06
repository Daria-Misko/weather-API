import axios from "axios";
const apiKey = "73bd6bca6bd522830119f0c6decba840";
const KELVIN = 273;

const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const iconElement = document.querySelector(".weather-icon");
const dayElement = document.querySelector(".day p");
const dateElement = document.querySelector(".date p");
const button = document.querySelector(".weather-button");
const weatherWeek = document.querySelector(".weather-week__container");
const weatherCurrent = document.querySelector(".weather-current__container");
const closeBtn = document.querySelector(".weather-week-close-button")
const weatherWeekDayForecast = document.querySelector(".weather-week__forecast")

button.addEventListener('click', onClick)
closeBtn.addEventListener('click', onClose)

const date = new Date()
let currentdate = date.toLocaleDateString('en-gb', { day: "numeric", month: "short", year: "numeric" })
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let day = weekday[date.getDay()];

const weather = {
	temperature: {
		value: "",
		unit: "celsius"
	},
	description: "",
	iconId: "",
	city: "",
	country: "",
	day: `${date}`,
	data: `${day}`
};

// const currentMonth = new Date();
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log(months[currentMonth.getMonth()]);

// let currentDate = `${day}-${month}-${year}`;
// console.log(currentDate); // "17-6-2022"



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
		forecast(latitude, longitude);
	} else {
		console.log("Position data not available.");
	}

}

function showError(error) {
	console.log(`nothing`);
   //  notificationElement.style.display = "block";
   //  notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

function getWeather(latitude, longitude) {
   let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
			  return data;
        })
		 .then(function (data) {
			// console.log(data);
			weather.temperature.value = Math.floor(data.main.temp - KELVIN);
			weather.description = data.weather[0].description;
			weather.iconId = data.weather[0].icon;
			weather.city = data.name;
			weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

function displayWeather() {
	// const date = new Date()
	// let currentdate = date.toLocaleDateString('en-gb', { day: "numeric", month: "short", year: "numeric" })
	// const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	// let day = weekday[date.getDay()];
	// console.log(day);
	// console.log(currentdate);
   iconElement.insertAdjacentHTML('beforeend', `<img src="http://openweathermap.org/img/wn/${weather.iconId}@4x.png" height= "155"
	width= "165"/>`);
   tempElement.insertAdjacentHTML('beforeend', `${weather.temperature.value}°`);
   descElement.insertAdjacentHTML('beforeend', weather.description);
	locationElement.insertAdjacentHTML('beforeend', `${weather.city}`);
	dayElement.insertAdjacentHTML('beforeend', `${day}`); 
	dateElement.insertAdjacentHTML('beforeend', `${currentdate}`); 
}

function forecast(latitude, longitude) {
	const newKey = 'ba7fddf449339701f9df702aeb87be1d'
	// const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${newKey}`;
	const API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${newKey}`;
	// const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={newKey}`;
    
	fetch(API_URL)
  .then(response => response.json())
  .then(data => {
   //  const dailyData = data.daily.slice(1, 5);
	//   console.log(data);
	//   let dataArray = []
	//   for (let i = 0; i <= 50; i++) {
   //    const date = data.list[i].dt_txt;
   //    const temp = data.list[i].main.temp;
	// 	 const description = data.list[i].weather[0].description;
	// 	 const weatherIcon = data.list[i].weather[0].icon;
	// 	  console.log(`Дата: ${date}, Температура: ${temp}, Опис погоди: ${description}, ${weatherIcon}`);
	// 	  dataArray.push(data.list[i])
	// 	  console.log(dataArray);
	// 	  const dateArray = dataArray.filter(day => day.include(data.list[i].dt_txt));
	// 	  console.log(dateArray);
	//   }
	  const dataArray = data.list;
	  const groupedData = {};
	  for (let i = 0; i < dataArray.length; i++) {
      const date = dataArray[i].dt_txt.slice(0, 10);
      if (!groupedData[date]) {
			groupedData[date] = {
			date: date,
          minTemp: dataArray[i].main.temp,
          maxTemp: dataArray[i].main.temp,
          weather: dataArray[i].weather[0].description
        };
      } else {
        if (dataArray[i].main.temp < groupedData[date].minTemp) {
          groupedData[date].minTemp = dataArray[i].main.temp;
        }
        if (dataArray[i].main.temp > groupedData[date].maxTemp) {
          groupedData[date].maxTemp = dataArray[i].main.temp;
        }
      }
    }
	  console.log(groupedData);

	  const groupedDataPerDay = {
  "2022-03-05": {
    date: "2022-03-05",
    minTemp: 5,
    maxTemp: 10,
    weather: "Cloudy"
	 
  },
  "2022-03-06": {
    date: "2022-03-06",
    minTemp: 8,
    maxTemp: 12,
    weather: "Rainy"
  }
};
weatherWeekDayForecast.innerHTML = '';
// перебираємо ключі в об'єкті
	  Object.keys(groupedData).forEach(date => {
		  const data = groupedData[date];
		  const dateValue = data.date;
		  
			const datePotoch = new Date(dateValue);
			const formattedDate = datePotoch.toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

  const minTempValue = data.minTemp;
  const maxTempValue = data.maxTemp;
		  const weatherValue = data.weather;
  
		  
		  console.log(`Дата: ${formattedDate}, Мінімальна температура: ${minTempValue}, Максимальна температура: ${maxTempValue}, Опис погоди: ${weatherValue}`);
		  
		
	// weatherWeekDayForecast.insertAdjacentHTML('beforeend', `Дата: ${formattedDate}, Мінімальна температура: ${minTempValue}, Максимальна температура: ${maxTempValue}, Опис погоди: ${weatherValue}`);
		   const listItem = document.createElement('li');
        listItem.innerHTML = `Дата: ${formattedDate}, Мінімальна температура: ${minTempValue}, Максимальна температура: ${maxTempValue}, Опис погоди: ${weatherValue}`;
        weatherWeekDayForecast.appendChild(listItem);

});

	  
	  
	  
  })  
  .catch(error => console.log(error));
	}

	weatherWeek.classList.add('is-hidden');

function onClick(e) {
	e.preventDefault();
	weatherCurrent.classList.add('is-hidden');
	if (weatherWeek.classList.contains('is-hidden')) {
		weatherWeek.classList.remove('is-hidden')
	}
}

function onClose(e) {
	e.preventDefault();
	weatherWeek.classList.add('is-hidden');
	if (weatherCurrent.classList.contains('is-hidden')) {
		weatherCurrent.classList.remove('is-hidden')
	}
}