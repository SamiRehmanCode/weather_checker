// Date making 
const currentDateElement = document.getElementById('currentDate');
    const searchButton = document.getElementById('search-button');
    const currentWeatherElement = document.getElementById('currentWeather');
    const input = document.getElementById('locationInput');
    const country = document.getElementById('country');
    const output = document.querySelector('.output');
    output.innerText = 'error'

    // Simulated weather data (replace with actual data retrieval)
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.textContent = today.toLocaleDateString(undefined, options);
       

// addingevent forserach button
const cityval = document.getElementById('locationInput').value;



searchButton.addEventListener('click', async(event) => {
    event.preventDefault;
   
    if (cityval === ' ') {
        output.innerText = `please write correct name`
    } else {
       try {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=77c162c53730f79db93e24a35c542c86`;
        const response = await fetch(url);
        const data = await response.json()
        const arrData = [data]
         console.log(arrData);
        country.innerText = `${arrData[0].name} , ${arraData[0].sys.country} `
        currentWeatherElement.innerText = arrData[0].weather[0].main;
         
       } catch (error) {
          output.innerText = `please write correct city name`
       }
    }
     
});

