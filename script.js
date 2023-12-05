const apikey="85938c5fc77020460b697c44d9167764";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weather_icon=document.querySelector(".weather_icon");

async function Weather(city){
    const response=await fetch(apiurl + city +  `&appid=${apikey}`);
    let data=await response.json();
    console.log(data);
    document.querySelector("#cityName").innerHTML=data.name;
    document.querySelector("#temperature").innerHTML=Math.round(data.main.temp) + "°c";
    document.querySelector("#humidity_value").innerHTML=data.main.humidity + "%";
    document.querySelector("#wind_value").innerHTML=data.wind.speed + "km/h";

    if(data.weather[0].main=="Clouds")
    {
        weather_icon.src="assets/clouds.png";
    }
    else if(data.weather[0].main=="Clear")
    {
        weather_icon.src="assets/clear.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        weather_icon.src="assets/rain.png";
    }
    else if(data.weather[0].main=="Snow")
    {
        weather_icon.src="assets/snow.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weather_icon.src="assets/drizzle.png";
    }
    else if(data.weather[0].main=="Mist")
    {
        weather_icon.src="assets/mist.png";
    }
}
searchbtn.addEventListener("click",()=>{
    Weather(searchbox.value); //it will read the city value from here
})