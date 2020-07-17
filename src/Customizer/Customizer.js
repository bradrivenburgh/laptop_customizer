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
          allFeatures={this.props.allFeatures} 
          feature={feature}
          allSelectedOptions={this.props.allSelectedOptions}
          idx={idx}
          className='feature'
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
