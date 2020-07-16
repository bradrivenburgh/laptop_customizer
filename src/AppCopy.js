import React, { Component } from 'react';
import FeatureForm from './FeatureForm/FeatureForm';
import MainSummary from './MainSummary/MainSummary';
import './App.css';

class AppCopy extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );


    return (
      <div className="App">
      <header>
        <h1>ELF Computing | Laptops</h1>
      </header>
      <main>
        <FeatureForm
          selected={this.state.selected}
          features={this.props.features} 
          updateFeature={this.updateFeature}/>
          <MainSummary />
      </main>
    </div>
    );
  }
}

export default AppCopy;
