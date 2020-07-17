import React, { Component } from "react";
import CartItems from "../Cart/CartItems";
import CartTotal from "../Cart/CartTotal";
import './Cart.css';

export default class MainSummary extends Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.selected[feature];

      return (
        <CartItems
          key={featureHash}
          id={featureHash}
          selected={selectedOption}
          feature={feature}
        />
      );
    });

    return (
      <section className='main__summary'>
        <h2>Your cart</h2>
        {summary}
        <CartTotal total={this.props.total} />
      </section>
    );
  }
}
