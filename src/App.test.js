import App from './App';
import { shallow, mount, render } from 'enzyme';

describe('Component Testing', () => {
  let wrapper;
  beforeEach(() => {
    // shallowly render your component:
    wrapper = shallow(<App/>)
  })
  
  test('App component should have Provider Element with Redux Store implemented', () => {
    // find the path element using a css selector
    let reduxProvider = wrapper.find('Provider');
    // make assertion
    expect(reduxProvider.props().hasOwnProperty('store')).toBe(true);
  })
})
