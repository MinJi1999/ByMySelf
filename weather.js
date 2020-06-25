const COORDS = "coords";
const API_KEY = "eeefe5acc39c4c4049be76dcb6b2bcc2";
const weather = document.querySelector(".js-weather");

function loadCoords(){
    const coords_LS = localStorage.getItem(COORDS);
    if(coords_LS === null){
        askCoords();
    }else{
        const parsedCoords = JSON.parse(coords_LS);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function askCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function handleGeoError(){
    alert(" 위치 정보에 접근할 수 없습니다!");
}

function handleGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const coordObj = {
        latitude : lat,
        longitude : lon
    };
    saveCoord(coordObj);
    getWeather(lat, lon);
}

function saveCoord(coordObj){
    localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}/${place}`;
    })
}
loadCoords();