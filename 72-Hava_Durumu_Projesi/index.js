console.clear();

let form = document.getElementById('weatherForm');
let weatherResult = document.getElementById('weatherResult');

// OpenWeatherMap API Key
let apiKey = 'db4c96a58be88ecb260aabc63072b4aa';

// Hava Durumu Verisi Getir
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    let city = document.getElementById('cityInput').value;
    weatherResult.textContent = "Veriler Yükleniyor...";

    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`);
        let data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            weatherResult.textContent = `Hata: ${data.message}`;
        }
    } catch (error) {
        weatherResult.textContent = 'Bir hata oluştu. Lütfen tekrar deneyin.';
    }
});

// Hava durumu verilerini ekranda göster
function displayWeather(data) {
    const { name, main, weather } = data;
    weatherResult.innerHTML = `
      <h2>${name}</h2>
      <p>Sıcaklık: ${main.temp}°C</p>
      <p>Hava: ${weather[0].description}</p>
    `;
}