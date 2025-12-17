# 🌤️ Weather Forecast Web Application

A modern, responsive weather forecast web application that provides real-time weather information for any city worldwide using the OpenWeatherMap API.

## ✨ Features

- **Real-time Weather Data**: Fetches current weather information from OpenWeatherMap API
- **Dynamic Backgrounds**: Background changes automatically based on weather conditions (thunderstorm, rain, snow, fog, clear, clouds)
- **Form Validation**: Ensures both country and city are entered before fetching data
- **Professional UI**: Modern glassmorphism design with backdrop blur effects
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Floating weather icons and fade-in transitions
- **Comprehensive Weather Info**:
  - Current temperature
  - Weather description
  - Feels like temperature
  - Humidity percentage
  - Geographic coordinates (latitude/longitude)

## 🚀 Live Demo

Simply open `index.html` in your browser to see the application in action.

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Fetch API for asynchronous data retrieval
- **OpenWeatherMap API**: Weather data provider

## 📦 Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/kashyapsharma07/Weather-Forecast-Webpage.git
```

2. Navigate to the project directory:
```bash
cd Weather-Forecast-Webpage/Weather-website
```

3. Open `index.html` in your browser:
```bash
open index.html
```

That's it! No dependencies or build process required.

## 🔑 API Configuration

The application uses OpenWeatherMap API. The API key is already configured in the code. If you want to use your own API key:

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Replace the key in `script.js`:
```javascript
let key = `YOUR_API_KEY_HERE`;
```

## 💻 Usage

1. Enter the **Country** name (e.g., US, GB, IN)
2. Enter the **City** name (e.g., London, Mumbai, New York)
3. Click the **Go** button
4. View real-time weather information with dynamic background

**Note**: Both country and city fields are required. The application will show an alert if any field is empty.

## 🎨 Features Breakdown

### Dynamic Weather Backgrounds
The application automatically changes backgrounds based on weather conditions:
- ⛈️ Thunderstorm (Weather ID < 250)
- 🌧️ Drizzle (Weather ID 250-349)
- ❄️ Snow (Weather ID 350-549)
- 🌧️ Rain (Weather ID 550-649)
- 🌫️ Fog/Smoke (Weather ID 650-799)
- ☀️ Clear Sky (Weather ID = 800)
- ☁️ Clouds (Weather ID > 800)

### Responsive Design
- Desktop: Full-width card layout with side-by-side elements
- Tablet: Adjusted spacing and sizing
- Mobile: Stacked layout with single-column grid

### UI/UX Enhancements
- Glassmorphism effect with backdrop blur
- Smooth hover effects on input fields and detail cards
- Floating animation on weather icons
- Purple gradient button with shadow effects
- Form validation with user-friendly alerts

## 📁 Project Structure

```
Weather-website/
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # JavaScript logic and API calls
├── README.md           # Project documentation
├── backgrounds/        # Weather background images
│   ├── clear.jpg
│   ├── smoke.jpg
│   └── ...
├── tempicons/          # Weather condition icons
│   ├── sun.svg
│   ├── clouds.svg
│   ├── rain.svg
│   └── ...
├── images/             # Additional images
└── fonts/              # Custom fonts
```

## 🌐 API Coverage

The OpenWeatherMap API provides weather data for:
- 200,000+ cities worldwide
- Real-time weather information
- Multiple languages support
- Metric and Imperial units

## 🔧 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📝 Future Enhancements

- [ ] 5-day weather forecast
- [ ] Geolocation for automatic city detection
- [ ] Temperature unit toggle (Celsius ↔ Fahrenheit)
- [ ] Search history with localStorage
- [ ] Loading indicator during API calls
- [ ] Error handling for invalid cities
- [ ] Wind speed and direction
- [ ] Sunrise/sunset times
- [ ] Air Quality Index (AQI)

## 👨‍💻 Author

**Kashyap Sharma**
- GitHub: [@kashyapsharma07](https://github.com/kashyapsharma07)

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons and design inspiration from modern UI trends
- Initial design concept from [Mithesh](https://github.com/Mithesh14/Weather-website)

---

⭐ Star this repository if you found it helpful!

