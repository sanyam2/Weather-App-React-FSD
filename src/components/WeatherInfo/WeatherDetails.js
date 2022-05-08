import React, { Component } from "react";
import CommentSection from "../Comment/CommentSection";
import "./WeatherDetails.css";
export class WeatherDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let dateNow = new Date(); // to get present date
    let weatherIcon =
      "http://openweathermap.org/img/w/" + this.props.weatherIcon + ".png"; //weatherIcon is get as a
    return (
      <div>
        <div className="WeatherDetailsMain">
          <span className="cityLocation">
            {this.props.cityName}, {this.props.cityCountry},{" "}
            {dateNow.toDateString()}
          </span>
          <br />

          <div className="detailsDiv">
            <div className="leftSide">
              <h1>
                <span className="weatherIcon">
                  {this.props.cityTemperature}&deg;C <img src={weatherIcon} />
                </span>
              </h1>
            </div>
            <div className="rightSide">
              <p className="weatherDetailsIndividual">
                Weather: <b>{this.props.cityWeatherDescription}</b>
                <br />
                Wind: <b>{this.props.cityWind} km/hr</b>
                <br />
                <br />
                Humidity: <b>{this.props.cityHumidity}%</b> <br />
                Pressure: <b> {this.props.cityPressure} Pa</b>
                <br />
                <br />
                Max Temp: <b>{this.props.cityMaxTmp}&deg;C </b>
                <br />
                Min Temp: <b>{this.props.cityMinTmp}&deg;C</b>
                <br />
                <br />
                Sunrise : <b> {this.props.citySunrise}</b>
                <br />
                Sunset: <b> {this.props.citySunset}</b>
                <br />
              </p>
            </div>
          </div>
        </div>

        {/* comment Section */}
        <div className="commentSection">
          <CommentSection />
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default WeatherDetails;
