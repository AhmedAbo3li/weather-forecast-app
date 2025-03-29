from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend requests

# Your RapidAPI WeatherAPI credentials
API_KEY = "9f5ecc8d06msh4244bab84db6717p180e6cjsnf6d5870e9da8"
API_HOST = "weatherapi-com.p.rapidapi.com"

@app.route('/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    
    if not city:
        return jsonify({"error": "City parameter is required"}), 400

    url = f"https://{API_HOST}/current.json?q={city}"

    headers = {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST
    }

    try:
        response = requests.get(url, headers=headers)
        data = response.json()

        if "error" in data:
            return jsonify({"error": "Invalid city name"}), 400

        return jsonify(data)

    except requests.exceptions.RequestException:
        return jsonify({"error": "Failed to fetch weather data"}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
