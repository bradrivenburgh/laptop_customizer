import React, { Component } from "react";
import Option from "../Customizer/Option";
import slugify from "slugify";

export default class Feature extends Component {
  render() {
    const feature = this.props.feature;
    const options = this.props.allFeatures[feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <Option
          feature={feature}
          name={slugify(feature)} 
          allSelectedOptions={this.props.allSelectedOptions}
          item={item}
          key={itemHash}
          id={itemHash}
          onUpdateFeature={this.props.onUpdateFeature}
        />
      );
    });

    return (
      <fieldset className='feature' key={this.featureHash}>
        <legend className='feature__name'>
          <h3>{this.props.feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}
