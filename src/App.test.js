import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Checkbox } from 'evergreen-ui';


Enzyme.configure({adapter: new EnzymeAdapter() });

describe('state controlled input field',() => {
  let setV = jest.fn((value) => {return value});
  beforeEach(() => {
     setV.mockClear();
     React.useState = jest.fn(() => [false, setV]);
    React.useState.mockClear();
  })
  
test('evergreen-ui checkbox onchange', () => {

  const wrapper = mount(<App/>);
// the evergreen-ui root node is a forwardref and not an input type - atleast to my knowledge
// this is why I have to query the evergreen-ui element and the input element nested within
  const cb = wrapper.find('[data-test="evergreen-ui-checkbox"]').find('input');;

  expect(cb).not.toBe(null);
  expect(cb.prop('checked')).toBe(false);
  cb.simulate('change', { target: {checked: true}});
  wrapper.update();
  expect(wrapper.find('[data-test="evergreen-ui-checkbox"]').find('input').prop('checked')).toBe(true);

  console.log(cb.debug());

  expect(setV).toHaveBeenCalledWith(true);

});

test('regular checkbox onchange', () => {

  const wrapper = mount(<App/>);
  const cb = wrapper.find('[data-test="regular-checkbox"]');
  console.log(cb.debug());
  expect(cb).not.toBe(null);
  expect(cb.prop('checked')).toBe(false);
  // console.log(box.debug());
  console.log(cb.debug());


  cb.simulate('change', { target: {checked: true}});
  wrapper.update();
  expect(wrapper.find('[data-test="regular-checkbox"]').prop('checked')).toBe(true);
  expect(setV).toHaveBeenCalledWith(true);

});
});


// test('checkbox 2', () => {
//   const setValue = jest.fn((value) => {
//     return value;
//   });
//   const wrapper = mount(<App/>);
//   console.log(wrapper.debug());
//   const box = wrapper.find("Checkbox");
//   console.log(box.debug());

//   console.log

//   box.simulate('change', {target: {value: true}})
//   // expect(setValue).toBeCalledWith(true);
//   expect(setValue).toHaveBeenLastCalledWith(true);



// });

