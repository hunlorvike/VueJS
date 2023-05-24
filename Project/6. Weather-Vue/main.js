const app = new Vue({
  el: "#app",
  data: {
    APIKey: "8e665c03b2c9f232faef9d0297ab39e7",
    city: "",
    temp: "",
    description: "",
    humidity: "",
    wind: "",
    containerHeight: "",
    weatherBoxDisplay: "none",
    weatherDetailsDisplay: "none",
    error404Display: "none",
    weatherBoxImageSrc: "",
    show: null,
    show404: null,
    cod: "",
  },
  methods: {
    searchWeather() {
      const city = this.city.trim();
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.APIKey}`;
      axios
        .get(apiUrl)
        .then((response) => {
          this.show = true;
          this.weatherBoxDisplay = "";
          this.weatherDetailsDisplay = "";
          this.containerHeight = "590px";
          this.error404Display = "none";

          this.temp = response.data.main.temp + "°C";
          this.description = response.data.weather[0].description;
          this.humidity = response.data.main.humidity + "%";
          this.wind = response.data.wind.speed + " Km/h";
          console.log(
            this.temp,
            this.description,
            this.humidity,
            this.wind,
            this.cod,
            this.error404Display
          );
          switch (response.data.weather[0].main) {
            case "Clear":
              this.weatherBoxImageSrc = "images/clear.png";
              break;
            case "Rain":
              this.weatherBoxImageSrc = "images/rain.png";
              break;
            case "Snow":
              this.weatherBoxImageSrc = "images/snow.png";
              break;
            case "Clouds":
              this.weatherBoxImageSrc = "images/cloud.png";
              break;
            case "Haze":
              this.weatherBoxImageSrc = "images/mist.png";
              break;
            default:
              this.weatherBoxImageSrc = "";
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            // Xử lý lỗi 404
            this.containerHeight = "400px";
            this.weatherBoxDisplay = "none";
            this.weatherDetailsDisplay = "none";
            this.error404Display = "block";
            this.show404 = true;
            console.log("Error 404: Invalid location");
          } else {
            // Xử lý các lỗi khác
            console.log("Other error occurred:", error);
          }
        });
    },
  },
});
