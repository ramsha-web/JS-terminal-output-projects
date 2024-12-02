let weatherData = [];

// Function to add new weather record
function addWeatherRecord(date, temperature, condition) {
  weatherData.push({ 
    date: date, 
    temperature: temperature, 
    condition: condition });
  console.log(`Weather record added for ${date}: ${temperature}°C, ${condition}`);
}

// Function to calculate the average temperature over a range of dates
function calculateAverageTemperature(startDate, endDate) {
  let totalTemperature = 0;
  let count = 0;

  for (let i = 0; i < weatherData.length; i++) {
    if (new Date(weatherData[i].date) >= new Date(startDate) && new Date(weatherData[i].date) <= new Date(endDate)) {
      totalTemperature += weatherData[i].temperature;
      count++;
    }
  }

  if (count > 0) {
    return totalTemperature / count;
  } else {
    return null; 
  }
}

// Function to show days with specific weather conditions
function showDaysWithCondition(condition) {
  const daysWithCondition = weatherData.filter(record => record.condition.toLowerCase() === condition.toLowerCase());

  if (daysWithCondition.length > 0) {
    console.log(`Days with ${condition} weather:`);
    daysWithCondition.forEach(record => {
      console.log(`${record.date} - ${record.temperature}°C, ${record.condition}`);
    });
  } else {
    console.log(`No ${condition} weather records found.`);
  }
}

// Function to identify the hottest and coldest days
function findHottestAndColdestDays() {
  if (weatherData.length === 0) {
    console.log("No weather data available.");
    return;
  }

  // Find the hottest and coldest days 
  let hottestDay = weatherData.reduce((max, record) => (record.temperature > max.temperature ? record : max));
  let coldestDay = weatherData.reduce((min, record) => (record.temperature < min.temperature ? record : min));

  console.log(`Hottest Day: ${hottestDay.date} - ${hottestDay.temperature}°C, ${hottestDay.condition}`);
  console.log(`Coldest Day: ${coldestDay.date} - ${coldestDay.temperature}°C, ${coldestDay.condition}`);
}

addWeatherRecord("2024-12-01", 25, "Sunny");
addWeatherRecord("2024-12-02", 18, "Rainy");
addWeatherRecord("2024-12-03", 30, "Sunny");
addWeatherRecord("2024-12-04", 22, "Cloudy");
addWeatherRecord("2024-12-05", 17, "Rainy");
addWeatherRecord("2024-12-06", 17, "Thunderstorm");
addWeatherRecord("2024-12-07", 17, "Partly Cloudy");
addWeatherRecord("2024-12-08", 17, "Rainy");
addWeatherRecord("2024-12-09", 17, "Sunny");
addWeatherRecord("2024-12-10", 17, "Thunderstorm");


// Calculate average temperature from 2024-12-01 to 2024-12-03
const avgTemp = calculateAverageTemperature("2024-12-01", "2024-12-03");
console.log(`Average temperature from 2024-12-01 to 2024-12-03: ${avgTemp ? avgTemp.toFixed(2) : 'No data available'}`);

showDaysWithCondition("Thunderstorm");

// Find hottest and coldest days
findHottestAndColdestDays();
