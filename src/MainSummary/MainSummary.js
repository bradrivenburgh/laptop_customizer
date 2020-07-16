import React, { Component } from 'react';
import SummaryList from '../SummaryList/SummaryList';

export default class MainSummary extends Component {
    render(){


        return(
            <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
          </section>
        );
    }
}

// For SummaryTotal
{/* <div className="summary__total">
<div className="summary__total__label">Total</div>
<div className="summary__total__value">
  {USCurrencyFormat.format(total)}
</div>
</div> */}
