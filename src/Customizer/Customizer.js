import React, { Component } from "react";
import Feature from "../Customizer/Feature";
import './Customizer.css';

export default class Customizer extends Component {
  static defaultProps = {
    features: {},
  };

  render() {
    //Map over allFeatures to populate the Customizer with all features and options
    const renderAllFeatures = Object.keys(this.props.allFeatures).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      return (
        <Feature
          className='feature'
          //Pass allFeatures prop to Feature to render all feature Options
          allFeatures={this.props.allFeatures}
          //Drilling allSelectedOptions down to Options component
          allSelectedOptions={this.props.allSelectedOptions}
          feature={feature}
          key={featureHash}
          onUpdateFeature={this.props.onUpdateFeature}
        />
      );
    });

    return (
      <form className='main__form'>
        <h2>Customize your laptop</h2>
        {renderAllFeatures}
      </form>
    );
  }
}
