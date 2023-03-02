import axios from "axios";
// const baseUrl = 'https://reqres.in';

// function searchUser() {
// 	return axios.get(`${baseUrl}/api/users?per_page=12`)
// 		.then(res => {
// 			if (res.status !== 200) {
// 				throw new Error(res.status)
// 			}
// 			return res.data.data
// 		})
// }

// function getUserCard(id) {
// 	return axios.get(`${baseUrl}/api/users/${id}`)
// 		.then(res => {
// 			if (res.status !== 200) {
// 				throw new Error(res.status)
// 			}
// 			return res
// 		})
// }

// export { searchUser, getUserCard }


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import axios from "axios";
const apiKey = "73bd6bca6bd522830119f0c6decba840";

// const btnGet = document.getElementById(btnGet)
// const btnCurrent = document.getElementById(btnCurrent)


// btnGet.addEventListener('click', getWeater)
// btnCurrent.addEventListener('click', getLocation)


// function getLocation(event) {
// 	navigator.geolocation.getCurrentPosition()
// }

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

function searchweather() {
	return axios.get(`http://api.openweathermap.org/data/2.5/weather?id=524901&appid=${apiKey}`)
		.then(res => {
			return console.log(res.data);
		})
}

searchweather()

// function setPosition(position){
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
// 	console.log(latitude);
// 	console.log(longitude);
//    //  getWeather(latitude, longitude);
// }

// setPosition(position)

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;
	const latitude = crd.latitude;
	const longitude = crd.longitude;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
			  return data;
        })
		 .then(function (data) {
			  console.log(data)
            // weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            // weather.description = data.weather[0].description;
            // weather.iconId = data.weather[0].icon;
            // weather.city = data.name;
            // weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}
getWeather(latitude, longitude);

// const weather = {
// 	temperature: {
// 		value: 18,
// 		unit: "celsius"
// 	},
// 	description: "few clouds",
// 	iconId: "01d",
// 	city: "London",
// 	country: "GB"
// };

// iconElement.innerHTML = `<>`
// tempElement.innerHTML = 
// descElement.innerHTML = 
// locationElement.innerHTML = 

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       const { main, name, sys, weather } = data;
//       const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
//         weather[0]["icon"]
//       }.svg`;

//       const li = document.createElement("li");
//       li.classList.add("city");
//       const markup = `
//         <h2 class="city-name" data-name="${name},${sys.country}">
//           <span>${name}</span>
//           <sup>${sys.country}</sup>
//         </h2>
//         <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
//         <figure>
//           <img class="city-icon" src="${icon}" alt="${
//         weather[0]["description"]
//       }">
//           <figcaption>${weather[0]["description"]}</figcaption>
//         </figure>
//       `;
//       li.innerHTML = markup;
//       list.appendChild(li);
//     })
//     .catch(() => {
//       msg.textContent = "Please search for a valid city 😩";
//     });


// import { searchUser, getUserCard } from "./news_api_service";
// import { singleUserMurkap, userMarkup } from "./buildMarkup";

// const button = document.querySelector('.submitBtn')
// const userContainer = document.querySelector('.user-container')

// userContainer.addEventListener('click', onUserClick)
// button.addEventListener('click', onSearchUsers)

// function onUserClick(e) {
// 	const currentUser = e.target
// 	//витягуємо айді з юзера
// 	const currentUserId = Number(currentUser.dataset.id);
// 	getUserCard(currentUserId).then(user => {
// 		const userInfo = user.data.data
// 		return singleUserMurkap(userInfo)
// 	})

// }

// function onSearchUsers() {
// 	searchUser()
// 		.then(users => {
// 			return users.map(user => {
// 				userMarkup(user)
// 				return user
// 			})
// 		})
// 		.then(user => {
// 		// console.log(user);
// 		const userCard = document.querySelector('.user-card')
// 		// console.log(userCard);
// 	})
// 	.catch(error => {
// 		console.log(error);
// 	})
// }