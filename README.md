## Weather App

A simple weather application built with HTML, CSS, and vanilla JavaScript that shows real‑time weather for any city using the WeatherAPI.com service.

### Features

- Search weather by city name with a clean, minimal interface.  
- Displays current temperature in °C, condition text, humidity, wind speed, and location (city and country).  
- Shows a condition icon fetched directly from the API response.  
- Handles invalid city names and API errors with a user‑friendly message.

## Screenshots

<img width="486" height="498" alt="Capture" src="https://github.com/user-attachments/assets/a15e6895-9ea9-4971-baa7-c14dbc015031" />
<img width="1366" height="768" alt="Screenshot (5)" src="https://github.com/user-attachments/assets/6cc0814c-759a-4aa4-bdf0-8d49679aa41c" />


### Tech Stack

- HTML for structure  
- CSS for styling and layout (responsive, centered card design)  
- JavaScript (ES6, async/await, fetch) for API calls and DOM updates  
- WeatherAPI.com current.json endpoint for live weather data

### How It Works

- The user enters a city name in the input field and clicks “Get Weather”.  
- The app calls `https://api.weatherapi.com/v1/current.json` with the provided city and an API key.  
- On success, it parses the JSON and updates the UI with location, temperature, condition, humidity, wind speed, and icon.  
- On failure (invalid city or API issue), it shows an error message in the result area.

### Getting Started

1. Clone or download the project files.  
2. Open the HTML file in any modern browser.  
3. Replace the placeholder API key in the script with your own WeatherAPI.com key:
   ```js
   const apiKey = 'YOUR_API_KEY_HERE';
   ```
4. Type a city name and click “Get Weather” to see the current conditions.

### Project Structure

- `index.html` – Main HTML file containing layout, styles, and script.  
- Inline `<style>` – Basic styling for the app container and elements.  
- Inline `<script>` – Core logic for fetching and displaying weather data.

### What I Learned

- Making API requests using fetch with async/await.  
- Reading and using JSON responses (nested objects like `data.location` and `data.current`).  
- Manipulating the DOM by dynamically inserting HTML based on API data.  
- Implementing simple error handling for bad input and failed network or API responses.

