import React, { Component } from 'react';

export default class FeatureForm extends Component {
    const features = Object.keys(this.prop.features).map((feature, idx) = (
        <FeatureList />    
    ));

    render() {
        return(
            <form className="main__form">
            <h2>Customize your laptop</h2>
            {features} {/**map over propdata to create FeatureList */}
            <FeatureList />
          </form>

        );
    }
}