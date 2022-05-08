import React, { Component } from "react";
import "./SearchSection.css";

import PropTypes from "prop-types";

class SearchSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: null,
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  updateCityName(e) {
    this.setState({ cityName: e.target.value }); //updating the state of cityName every time the value changes
  }

  handleSearchInput() {
    this.props.searchCity(this.state.cityName);
  }

  render() {
    return (
      <div className="mainSearchSection">
        <input
          className="inputLocation"
          placeholder="Enter City Name..."
          value={this.state.cityName}
          onChange={(e) => this.updateCityName(e)}
        />
        <button className="searchButton" onClick={this.handleSearchInput}>
          Search
        </button>
      </div>
    );
  }
}

SearchSection.propTypes = {
  searchCity: PropTypes.func,
};
export default SearchSection;
