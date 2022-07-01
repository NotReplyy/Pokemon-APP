// import { configure } from '@testing-library/react';
// import { shallow } from 'react-redux';
// import App from './App';
// import Landingpage from './Components/Landingpage/LandingPage';
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// // test('renders learn react link', () => {
// //   render(<Landingpage />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });

// configure({ adapter: new Adapter() });

// describe("<Langindpage />", () => {
//   let land;

//   beforeEach(() => {
//     land = shallow(<Landingpage />);
//   });

//   // it('Debería rederizar una "Img" con el texto "Welcome---"', () => {
//   //   expect(land.find("button").at(0).text()).toEqual(
//   //     "get into"
//   //   );
//   // });

//   it('Debería renderizar un "button"', () => {
//     expect(land.find("button").text()).toEqual("Start");
//   });
// });


import { getByAltText, render, screen } from "@testing-library/react";
import App from "./App";
import LandingPage from "./Components/LandingPage/LandingPage";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);

//   expect(linkElement).toBeInTheDocument();
// });

describe("<LangindPage />", () => {
  let land;

  beforeEach(() => {
    land = shallow(<LandingPage />);
  });

  it('Debería renderizar un "button"', () => {
    expect(land.find("button").text()).toEqual("Get Into");
  });
});