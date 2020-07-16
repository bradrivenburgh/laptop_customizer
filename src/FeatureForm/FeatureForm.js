import React, { Component } from "react";
import slugify from 'slugify';
import Feature from '../Feature/Feature';
import FeatureItem from '../FeatureItem/FeatureItem';

export default class FeatureForm extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <FeatureItem 
                        key={itemHash} 
                        className="feature__item"
                        id={itemHash} 
                        name={slugify(feature)}
                        checked={item.name === this.state.selected[feature].name}
                        handleUpdateFeature={this.updateFeature(feature, item)}
                        htmlFor={itemHash}
                    />);
              });
    
            return (
                <Feature 
                    features={features}
                    name={feature} 
                    className="feature" 
                    key={featureHash} 
                />
            );
        });    

    

      return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
      );
  }
}