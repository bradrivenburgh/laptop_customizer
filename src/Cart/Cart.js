import React, { Component } from "react";
import CartItems from "../Cart/CartItems";
import CartTotal from "../Cart/CartTotal";
import './Cart.css';

export default class Cart extends Component {
  render() {
    //Converts number to a US currency format
    const USCurrencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    //Map over allSelectedOptions to populate cart
    const cartSummary = Object.keys(this.props.allSelectedOptions).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.allSelectedOptions[feature];

      return (
        <CartItems
          key={featureHash}
          id={featureHash}
          feature={feature}
          selectedOption={selectedOption}
          cost={USCurrencyFormat.format(selectedOption.cost)}
        />
      );
    });

    return (
      <section className='main__summary'>
        <h2>Your cart</h2>
        {cartSummary}
        <CartTotal 
          total={USCurrencyFormat.format(this.props.total)} />
      </section>
    );
  }
}
