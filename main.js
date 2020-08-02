document.addEventListener("DOMContentLoaded", () =>{ 
    let name = document.getElementById('text');
    getMeteo(name.value);

     document.addEventListener('change', ()=>{
         getMeteo(name.value);
          
          
     });    
        
    

})
function getMeteo(city){
   const request = new XMLHttpRequest();//on utilise XMLHttpRequestpour faire une requete
   //j'ouvre ma request et j'ulise get
    request.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${city},fr&units=metric&APPID=a2ebd0871556e4cbaa61338e7a5b85fb&lang=fr`);
    request.send() //j'evoie ma requete
    request.addEventListener('load', (event) => {
       //j'affiche ma reponse dans la console
       let data = JSON.parse(request.response); 

        console.log(data)
       displayMeteo(data)
         
        
   });
}
  
 function displayMeteo(data){
    const city = document.getElementById('city');
    city.innerHTML = ""; 
    let cityCard = document.createElement("div");
    let cityName = document.createElement("span");
    let cityWeather = document.createElement("span");
    let cityTemp = document.createElement("span");
    let cityRes = document.createElement("span");
    let cityIcon = document.createElement("img");

    cityWeather.textContent = data.weather[0].description;
    cityName.textContent = data.name;
    cityTemp.textContent = "Température :" + data.main.temp + "°C";
    cityRes.textContent = "Température Ressentie :"+data.main.feels_like + "°C";
    cityIcon.src =  `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    cityCard.classList.add("city-card");
    cityName.classList.add("city-name");
    cityWeather.classList.add("city-weather");
    cityTemp.classList.add("city-temp");

    cityCard.appendChild(cityIcon); 
    cityCard.appendChild(cityName);
    cityCard.appendChild(cityWeather);
    cityCard.appendChild(cityTemp);
    cityCard.appendChild(cityRes);
    city.appendChild(cityCard);
          
 }
 

  