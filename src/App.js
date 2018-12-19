import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const apiKey = "d971c616163c7ae140572ff2cc01b94e";

class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    humidity: undefined,
    iconcode: undefined,
    iconurl: undefined,
    temp_min: undefined,
    temp_max: undefined,
    wind_deg: undefined,
    wind_speed: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`);
    const data  = await apiCall.json();
    console.log(data);
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        iconcode: data.weather[0].icon,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        wind_deg: data.wind.deg,
        wind_speed: data.wind.speed,
        iconurl: "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        humidity: undefined,
        iconcode: undefined,
        iconurl: undefined,
        temp_min: undefined,
        temp_max: undefined,
        wind_deg: undefined,
        wind_speed: undefined,
        error: "Error: try again."
      });
    }
  }
  render() {
    return (
      <div>
      <div className="wrapper">
        <div className="main">
            <div className="row"></div>
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather}/>
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  humidity={this.state.humidity}
                  iconcode={this.state.iconcode}
                  iconurl={this.state.iconurl}
                  temp_min={this.state.temp_min}
                  temp_max={this.state.temp_max}
                  wind_deg={this.state.wind_deg}
                  wind_speed={this.state.wind_speed}
                  error={this.state.error}
                  />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
