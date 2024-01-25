const btnEL = document.getElementById("btn");
const resultEL = document.getElementById("result");
const inputBoxEl = document.getElementById("inputBox");

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const apiKey = "3bf0cfe66f0377a3ec78bc0434f4a8ee";

async function weatherApp(city) {
  if (inputBoxEl.value === "") {
    resultEL.style.display = "none";
  } else {
    resultEL.style.display = "block";
    resultEL.innerHTML = "Loading...";
    try {
      const fatch = await fetch(apiUrl + city + `&appid=${apiKey}`);
      const data = await fatch.json();
      console.log(data);
      resultEL.innerHTML = data.name + "  " + data.main.temp + "°C";
    } catch (error) {
      resultEL.style.display = "none";
      resultEL.style.display = "block";
      resultEL.innerHTML = "There is Problem in Network..";
      resultEL.style.color = "red";
    }
  }
}
btnEL.addEventListener("click", () => {
  weatherApp(inputBoxEl.value);
});

weatherApp(city);
