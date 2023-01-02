const API_KEY = "8c1a5d338544c1188255d6f58b9073bf";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            const tempIcon = document.querySelector("#weather .temp-icon");
            const icon = data.weather[0].icon;
            const img = document.createElement("img");
            city.innerText = data.name;
            weather.innerText = `${Math.floor(data.main.temp)}°C`;
            img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            tempIcon.append(img);
        });
}
function onGeoError(){
    alert("위치를 찾을 수 없어요");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);