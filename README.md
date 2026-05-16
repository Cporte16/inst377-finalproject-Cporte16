# WeatherMap

## Description:
WeatherMap is a web-based app that allows users to check the current weather conditions for any city of their choice, accompanied by an interactive map. This website pulls real-time weather data from the OpenWeather API, ensuring accurate readings.

Currently, Weathermap is only intended for internet browsers like Firefox or Chrome, but potential remains for develomnt of mobile versions suited for operating systems like iOS or Android.

### Check it out on Vercel: https://inst377-finalproject-cporte16.vercel.app/ 

# For Developers:

### Installing app and dependencies:

Before installing, make sure you have Node.js and Git installed.

To install the app, simply clone the repository:
```
git clone https://github.com/Cporte16/inst377-finalproject-Cporte16.git
```

This application also uses:

* Express.js
* CORS
* Dotenv

which can all be installed by running this command:
```
npm install express cors dotenv
```

### Application API

This application calls from the OpenWeather API, meaning you will probably need to make an account at https://openweathermap.org/ to generate an API key.

The application uses these endpoints:
* **GET /api/cities**
    Which pulls a city's latitude and longitude from OpenWeather's Geocoding API.

* **GET /api/weather**:
    Which uses latitude and longitude coordinates to retrieve current weather data.

### Expectations and Development Roadmap

As of now, expectations for future development will include fixing bugs involving connectivity issues between frontend and backend especially when run on a live server or codespace.

As for future development, there is a lot of potential for additional features that expand the scope of the weather data given, such as giving a forecast rather than just the current weather, or adding more visuals such as charts, or even adding more interactive features to the map for more streamlined use.
