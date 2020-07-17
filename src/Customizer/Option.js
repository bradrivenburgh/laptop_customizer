import React, { Component } from "react";

export default class Option extends Component {
  render() {
    const itemHash = this.props.id;
    const feature = this.props.feature;
    const item = this.props.item;
    const allSelectedOptions = this.props.allSelectedOptions;

    const USCurrencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return (
      <div key={itemHash} className='feature__item'>
        <input
          className='feature__option'
          type='radio'
          checked={item.name === allSelectedOptions[feature].name}
          id={itemHash}
          onChange={(e) => this.props.onUpdateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className='feature__label'>
          {item.name} {USCurrencyFormat.format(item.cost)}
        </label>
      </div>
    );
  }
}
