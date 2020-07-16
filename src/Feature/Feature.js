import React, { Component } from 'react';

export default class Feature extends Component {
    render(){
        return (
            <fieldset className="feature" key={this.featureHash}>
            <legend className="feature__name">
              <h3>{this.props.feature}</h3>
            </legend>
          </fieldset>
  
        );
    }
}