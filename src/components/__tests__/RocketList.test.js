import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import RocketList from '../RocketList';

jest.mock('../RocketList');

describe('Rocket component', () => {
  test('should render Rocket component correctly', () => {
    const component = render(
      <RocketList
        rocketID="exampleId"
        rocketName="exampleName"
        description="descriptionExample"
        flickrImages="descriptionImage"
        reserved="false"
      />,
    );
    expect(component.container).toHaveTextContent('exampleName');
    expect(component.container).toHaveTextContent('descriptionExample');
  });
  test('If reserved = "false" button text should be, RESERVE ROCKET', () => {
    const component = render(
      <RocketList
        rocketID="exampleId"
        rocketName="exampleName"
        description="descriptionExample"
        flickrImages="descriptionImage"
        reserved="false"
      />,
    );
    expect(component.container).toHaveTextContent('RESERVE ROCKET');
  });
  test('If reserved = "true" button text should be, CANCEL RESERVATION', () => {
    const component = render(
      <RocketList
        rocketID="exampleId"
        rocketName="exampleName"
        description="descriptionExample"
        flickrImages="descriptionImage"
        reserved="true"
      />,
    );
    expect(component.container).toHaveTextContent('CANCEL RESERVATION');
  });
  test('If there are no props passed, it will show a loading message', () => {
    const component = render(
      <RocketList
        rocketID="exampleId"
        rocketName="rocketName"
        description="Rocket description"
        flickrImages="Images"
        reserved="true"
      />,
    );
    expect(component.container).toHaveTextContent('Loading');
  });
});
