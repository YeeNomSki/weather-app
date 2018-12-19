import React from "react";

class Weather extends React.Component {
  render() {
    return(
      <div>
      <div>
        { this.props.city && this.props.country &&
          <p className="location">{ this.props.city }, { this.props.country}
          </p>}
      </div>
        <div>
        { this.props.temperature &&
          <p className='temp_main'>Current Temperature: { this.props.temperature }&deg;C
          </p>}
        </div>
        <div>
          { this.props.temp_min &&
            <p className="temp_low">Daily Low: { this.props.temp_min }&deg;C
            </p>}
          { this.props.temp_max &&
            <p className="temp_high">Daily High: { this.props.temp_max }&deg;C
            </p>}
        </div>
        <div>
          { this.props.description &&
            <p className="condition">
              Current Condition: { this.props.description }
                <img id="wicon" src={this.props.iconurl} alt={this.props.iconcode}>
                </img>
            </p>}
          </div>
        <div>
          { this.props.wind_deg  && this.props.wind_speed  &&
            <p className="wind">Wind: {this.props.wind_speed}m/s at {this.props.wind_deg}&deg;
            </p>}
        </div>
        <div>
          { this.props.humidity &&
            <p className="humidity">Humidity: { this.props.humidity }&#37;
            </p>}
        </div>
        <div className="error_message">
          { this.props.error && <p>{ this.props.error }</p>}
        </div>
      </div>
    );
  }
};

export default Weather;
