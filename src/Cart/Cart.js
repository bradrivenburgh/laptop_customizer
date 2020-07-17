import React, { Component } from "react";
import SummaryList from "../SummaryList/SummaryList";
import SummaryTotal from "../SummaryTotal/SummaryTotal";

export default class MainSummary extends Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.selected[feature];

      return (
        <SummaryList
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
        <SummaryTotal total={this.props.total} />
      </section>
    );
  }
}
