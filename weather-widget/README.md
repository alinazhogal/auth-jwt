YOUR TASK: Develop a weather widget in React for a particular city.

Requirements:
<weather-module-default>
1. The input box at the top: User can type in the location/city to search for the weather information
   + Support clear input text
   + Should have placeholder
   + Due to the API limitation, there is no need for displaying location suggestion list and user will need to type in the exact city name
   + Request should be send by clicking submit button
2. The top of widget showing the weather information.
   + Location
   + Date & time
   + Overall weather description & icon
   + Temperature
   + Humidity
   + Wind speed
This section should show the latest weather information if the selected day is the current day, or the weather forecast for future days.
3. The bottom list showing information for the current
     day and the next 7 days:
    + Day in week
    + Icon for the overall weather
    + The highest/lowest temperature
<weather-module-farenheit>

4. User can change the unit measurement system
     between Metric and Imperial system by clicking
     at the F / C link beside the current temperature
    + Metric system uses Celcius (C) for temperature
       and kilometer per hour (KPH) for wind speed
    + Imperial system uses Farenheit (F) for temperature
       and miles per hour (MPH) for wind speed
<weather-module-select-day>

5. User can view the weather forecast for a specific
     day in the future by clicking at a cell at the bottom
    + The highest temperature in the selected day (except for the current day) should be displayed at the place of the current temperature (the biggest text beside the F / C link). If the current day is selected, then display the current temperature (not the highest temp.)

Use url http://api.openweathermap.org/geo/1.0/direct?q={city}&limit=5&appid={api_key} to get city latitude and longitude.

Use https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&&units=metric&appid={api_key} to get the current weather and 7 days weather broadcast of the city by latitude and longitude. Example of the response you can find on https://openweathermap.org/api/one-call-api.

Use http://openweathermap.org/img/wn/10d@2x.png url to get weather icon, where ‘10d’ - icon code from the weather response.
