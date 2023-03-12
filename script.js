function updateTime() {
    // Get the current time in Colombo
    var colomboTime = new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Colombo" });
    // Get the current time in Melbourne
    var melbourneTime = new Date().toLocaleTimeString("en-US", { timeZone: "Australia/Melbourne" });
    // Get the current time in Adelaide
    var adelaideTime = new Date().toLocaleTimeString("en-US", { timeZone: "Australia/Adelaide" });
    // Get the current time in London
    var ukTime = new Date().toLocaleTimeString("en-US", { timeZone: "Europe/London" });

    // Get the current time in Colombo
    var colomboDate = new Date().toLocaleDateString("en-US", { timeZone: "Asia/Colombo" });
    // Get the current time in Melbourne
    var melbourneDate = new Date().toLocaleDateString("en-US", { timeZone: "Australia/Melbourne" });
    // Get the current time in Adelaide
    var adelaideDate = new Date().toLocaleDateString("en-US", { timeZone: "Australia/Adelaide" });
    // Get the current time in London
    var ukDate = new Date().toLocaleDateString("en-US", { timeZone: "Europe/London" });

    // Update the time on the webpage
    document.getElementById("cmbtime").textContent = colomboTime;
    document.getElementById("meltime").textContent = melbourneTime;
    document.getElementById("adeltime").textContent = adelaideTime;
    document.getElementById("uktime").textContent = ukTime;
    document.getElementById("cmbdate").textContent = colomboDate;
    document.getElementById("meldate").textContent = melbourneDate;
    document.getElementById("adeldate").textContent = adelaideDate;
    document.getElementById("ukdate").textContent = ukDate;
}

setInterval(updateTime, 1000); // Update the time every second

const countries = ["LK", "AU", "AU", "UK"]
const cities = ["colombo", "melbourne", "adelaide", "london"];
const divIds = ["cmb", "mel", "adel", "uk"];

const requestApi = (city, country, divId) => {
    const apikey = "00278ddfb583d66cf4c1b202aeb0b1e2"
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apikey}`;
    fetch(api).then(response => response.json()).then(result => weatherDetails(result, divId));
}

const weatherDetails = (info,divId) => {
    let tempCelcius = info.main.temp - 273.15  
    document.getElementById(divId).innerText = `${Math.round(tempCelcius)}°C`;
    document.getElementById(`${divId}image`).src=`icons/${info.weather[0].icon}.svg`;
    document.getElementById(`${divId}desc`).innerText = info.weather[0].description;
    // console.log(info.weather[0].description);
    // console.log(info.weather[0].icon)
}
const weatherLoop = (cities) => {
    for (num in cities) {
        requestApi(cities[num], countries[num], divIds[num])   
    }
}
weatherLoop(cities)
