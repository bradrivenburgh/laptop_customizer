import React, { Component } from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
import slugify from 'slugify';

export default class Feature extends Component {
    render(){
      const options = this.props.features[this.props.feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return(
          <FeatureItem
            feature={this.props.feature}
            selected={this.props.selected}
            item={item}
            key={itemHash}
            id={itemHash}
            handleUpdateFeature={this.props.handleUpdateFeature}
          />
        );
      });
    
        return (
          <fieldset className="feature" key={this.featureHash}>
            <legend className="feature__name">
              <h3>{this.props.feature}</h3>
            </legend>
            {options}
          </fieldset>
  
        );
    }
}