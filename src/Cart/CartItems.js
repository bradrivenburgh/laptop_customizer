import React, { Component } from "react";

export default class CartItems extends Component {
  render() {
    const featureHash = this.props.featureHash;
    const feature = this.props.feature;
    const selectedOption = this.props.selectedOption;
    const cost = this.props.cost;

    return (
      <div className='summary__option' key={featureHash}>
        <div className='summary__option__label'>{feature}</div>
        <div className='summary__option__value'>{selectedOption.name}</div>
        <div className='summary__option__cost'>
          {cost}
        </div>
      </div>
    );
  }
}
