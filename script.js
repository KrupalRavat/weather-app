const apikey = "74b0304c3b14e3d55cbbd18453b3b9ea";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weathericon = document.querySelector('.weather-icon')
  async function checkWeather(City){
    const response = await fetch(apiUrl + City + `&appid=${apikey}`);

    if(response.status == 404){
      document.querySelector('.error').style.display = 'block';
      document.querySelector('.weather').style.display = 'none';
    }
    else{

      
      var data = await response.json();

    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    if(data.weather[0].main == 'clouds'){
      weathericon.src = 'images/clouds.png';
      }
      else if(data.weather[0].main == 'Clear'){
        weathericon.src = 'images/clear.png';
      }
      else if(data.weather[0].main == 'Rain'){
        weathericon.src = 'images/rain.png';
      }
      else if(data.weather[0].main == 'Drizzle'){
        weathericon.src = 'images/drizzle.png';
      }
      else if(data.weather[0].main == 'Mist'){
        weathericon.src = 'images/mist.png';
      }
      
      document.querySelector('.weather').style.display = 'block';
      document.querySelector('.error').style.display = 'none';

    }
}
searchBtn.addEventListener('click', ()=>{


    checkWeather(searchBox.value);
})
