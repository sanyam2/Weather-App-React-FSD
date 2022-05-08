import React, { Component } from "react";
import "./HeadingSection.css";

class HeadingSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="heading">
        <span className="headingText">Weather App</span>
      </div>
    );
  }
}

export default HeadingSection;
