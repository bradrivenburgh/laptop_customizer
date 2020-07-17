import React, { Component } from "react";
import Option from "../Customizer/Option";
import slugify from "slugify";

export default class Feature extends Component {
  render() {
    const options = this.props.features[this.props.feature].map((item) => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <Option
          feature={this.props.feature}
          selected={this.props.selected}
          item={item}
          key={itemHash}
          id={itemHash}
          updateFeature={this.props.updateFeature}
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
