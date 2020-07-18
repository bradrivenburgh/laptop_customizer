import React, { Component } from "react";
import Feature from "../Customizer/Feature";
import './Customizer.css';

export default class Customizer extends Component {
  static defaultProps = {
    features: {},
  };

  render() {
    const renderAllFeatures = Object.keys(this.props.allFeatures).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      return (
        <Feature
          className='feature'
          allFeatures={this.props.allFeatures} 
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
