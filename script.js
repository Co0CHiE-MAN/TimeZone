function updateTime() {
    // Get the current time in Colombo
    var colomboTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Colombo" });
    // Get the current time in Melbourne
    var melbourneTime = new Date().toLocaleString("en-US", { timeZone: "Australia/Melbourne" });

    // Update the time on the webpage
    document.getElementById("cmb").textContent = colomboTime;
    document.getElementById("mel").textContent = melbourneTime;
}

setInterval(updateTime, 1000); // Update the time every second