require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

const API_KEY = process.env.OPENWEATHER_KEY;

app.get("/api/cities", async (req, res) => {

    const city = req.query.city;

    if (!city) {
        return res.status(400).json({
            error: "City name required"
        });
    }

    try {

        const response = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
        );

        const cities = await response.json();

        res.json(cities);

        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: "Could not find cities"
        });
    }
});

app.get("/api/weather", async (req, res) => {

    const { lat, lon } = req.query;

    if (!lat || !lon) {
        return res.status(400).json({
            error: "Could not get coordinates"
        });
    }

    try {

        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`);

        const weather = await weatherResponse.json();

        res.json({
            description: weather.weather[0].description,
            temp: weather.main.temp,
            feelsLike: weather.main.feels_like,
            humidity: weather.main.humidity,
            windSpeed: weather.wind.speed,
            precipitation: weather.rain
                ? weather.rain["1h"] || 0
                : 0
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Could not retrieve weather"
        });
    }
});

module.exports = app;