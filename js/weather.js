const API_KEY = "eac2f3c3d39db814745384af5d0f490e";

// 날씨 조회 성공 시 호출할 함수
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    
    fetch(url)  // 실제 url에 갈 필요 없이, 브라우저에서 url를 요청함
        .then(Response => Response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city    = document.querySelector("#weather span:last-child");
            city.innerText    = data.name;
            weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
            }); 
}

// 날씨 조회 실패 시 호출할 함수
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

// 날씨 함수 호출
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);