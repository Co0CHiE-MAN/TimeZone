function updateTime() {
    // Get the current time in Colombo
    var colomboTime = new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Colombo" });
    // Get the current time in Melbourne
    var melbourneTime = new Date().toLocaleTimeString("en-US", { timeZone: "Australia/Melbourne" });

    var adelaideTime = new Date().toLocaleTimeString("en-US", { timeZone: "Australia/Adelaide" });

    var ukTime = new Date().toLocaleTimeString("en-US", { timeZone: "Europe/London" });

    // Get the current time in Colombo
    var colomboDate = new Date().toLocaleDateString("en-US", { timeZone: "Asia/Colombo" });
    // Get the current time in Melbourne
    var melbourneDate = new Date().toLocaleDateString("en-US", { timeZone: "Australia/Melbourne" });

    var adelaideDate = new Date().toLocaleDateString("en-US", { timeZone: "Australia/Adelaide" });

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