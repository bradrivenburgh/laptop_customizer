import React from "react";
import { shallow } from 'enzyme';
import Cart from "../Cart/Cart";
import CartItems from "../Cart/CartItems";
import CartTotal from "../Cart/CartTotal";

const allSelectedOptions = {
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700,
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200,
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      },
    },
  };

  const selectedOption = {
    Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700,
      }
  }

  const total = Object.keys(allSelectedOptions).reduce(
    (acc, curr) => acc + allSelectedOptions[curr].cost,
    0
  );

describe("Cart Component", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<Cart 
            allSelectedOptions={allSelectedOptions}/>);
    });
});

describe("CartItems Component", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<CartItems 
            selectedOption={selectedOption}/>);
    });
});

describe("CartTotal Component", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<CartTotal 
            total={total}/>);
    });
});
