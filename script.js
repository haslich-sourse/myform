document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;

    // Отправляем запрос на сервер (PHP)
    fetch(`weather.php?city=${city}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
                return;
            }

            document.getElementById('location').textContent = `${data.city}, ${data.country}`;
            document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.icon}.png`;
            document.getElementById('weather-desc').textContent = data.weather;
            document.getElementById('temperature').textContent = `Температура: ${data.temp}°C`;

            document.getElementById('weather-info').style.display = 'block';
        })
        .catch(error => {
            alert('Ошибка получения данных.');
            console.error('Error:', error);
        });
});


fetch('https://example.com/api', {
    method: 'GET', // или 'POST', если требуется отправка данных
    headers: {
      'X-BIZONE-BUG-BOUNTY': 'your_user_name' // Ваш никнейм
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  
  
