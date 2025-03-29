import React, { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;
    setError(""); // Clear previous errors

    try {
      const response = await axios.get(
        `http://localhost:5000/weather?city=${city}`
      );
      setWeather(response.data);
    } catch (err) {
      setError("Could not fetch weather data. Please try again.");
      setWeather(null);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌤️ Weather Forecast App</h1>
      <div style={styles.weatherBox}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={styles.input}
        />
        <button
          onClick={getWeather}
          style={styles.button}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
        >
          Get Weather
        </button>

        {error && <p style={styles.error}>{error}</p>}

        {weather && weather.location && weather.current ? (
          <div style={styles.weatherInfo}>
            <h2>{weather.location.name}, {weather.location.country}</h2>
            <p>🌡️ Temperature: {weather.current.temp_c}°C</p>
            <p>☁️ Condition: {weather.current.condition.text}</p>
            <img src={weather.current.condition.icon} alt="weather icon" />
          </div>
        ) : (
          <p style={{ marginTop: "10px", color: "gray" }}>
            Enter a city name to get weather data.
          </p>
        )}
      </div>
    </div>
  );
}

// 🎨 Styles
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
    background: "linear-gradient(to bottom, #a1c4fd, #c2e9fb)", // Soft blue gradient
    minHeight: "100vh",
  },
  title: {
    color: "#1e3a8a",
    fontSize: "2rem",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
  },
  weatherBox: {
    margin: "auto",
    marginTop: "20px",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "white",
    boxShadow: "3px 3px 15px rgba(0,0,0,0.1)",
    fontSize: "1.2rem",
    color: "#1e3a8a",
    textAlign: "center",
    width: "350px",
  },
  input: {
    padding: "10px",
    margin: "10px",
    borderRadius: "20px",
    border: "2px solid #1e3a8a",
    fontSize: "1rem",
    outline: "none",
    textAlign: "center",
    width: "250px",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#1e3a8a",
    color: "white",
    border: "none",
    borderRadius: "20px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "0.3s ease-in-out",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
  },
  buttonHover: {
    backgroundColor: "#3b82f6",
  },
  error: {
    color: "#b91c1c",
    fontSize: "1rem",
    marginTop: "10px",
    fontWeight: "bold",
  },
};

export default App;