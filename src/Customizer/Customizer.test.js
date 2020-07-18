import React from "react";
import { shallow } from 'enzyme';
import Customizer from "../Customizer/Customizer";
import Feature from "../Customizer/Feature";
import Option from "../Customizer/Option";

const FEATURES = {
    Processor: [
      {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      {
        name: 'Professor X AMD Fire Breather with sidewinder technology',
        cost: 1200
      }
    ],
    "Operating System": [
      {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      {
        name: 'Bodhi Linux',
        cost: 300
      }
    ],
    "Video Card": [
      {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      {
        name: 'Mind mild breeze 2000',
        cost: 1345
      }
    ],
    Display: [
      {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      },
      {
        name: '15.3" HGTV (3840 x 2160) Home makeover edition',
        cost: 1400
      },
    ]
  };  

  const item = {
    name: '15.3" HGTV (3840 x 2160) Home makeover edition',
    cost: 1400
  }

  const allSelectedOptions = {
      Processor: [
            {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
            }
      ]}

describe("Customizer Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Customizer         
        allFeatures={FEATURES}/>)
  });
});

describe("Feature Component", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<Feature 
            allFeatures={FEATURES} 
            feature="Processor"/>)
    })
})

describe("Option Component", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<Option 
            item={item}
            allSelectedOptions={allSelectedOptions}
            feature="Processor"/>)
    })
})