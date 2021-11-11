import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  test('should render Navbar component correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Navbar />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
