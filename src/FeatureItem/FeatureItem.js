import React, { Component } from 'react';
import slugify from 'slugify';
  
export default class FeatureItem extends Component {
    render(){
        const itemHash = this.props.id;
        const feature = this.props.feature;
        const item = this.props.item;
        const selected = this.props.selected;

        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        });
      
        return(
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === selected[feature].name}
              onChange={e => this.props.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>

        );
    }
}