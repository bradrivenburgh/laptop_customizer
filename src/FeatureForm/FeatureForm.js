import React, { Component } from "react";
import Feature from '../Feature/Feature';

export default class FeatureForm extends Component {
    static defaultProps = {
        features: {}
    }

    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <Feature 
                    features={this.props.features}
                    feature={feature} 
                    idx={idx}
                    className="feature"
                    selected={this.props.selected} 
                    key={featureHash}
                    updateFeature={this.props.updateFeature}
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