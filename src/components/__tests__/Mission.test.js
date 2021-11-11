import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Mission from '../Mission';

jest.mock('../Mission');

describe('Mission component', () => {
  test('should render Mission component correctly', () => {
    const component = render(
      <Mission
        missionId="exampleId"
        missionName="exampleName"
        description="descriptionExample"
        reserved="false"
      />,
    );
    expect(component.container).toHaveTextContent('exampleName');
    expect(component.container).toHaveTextContent('descriptionExample');
  });
  test('If reserved = "false" badge text should be, NOT A MEMBER', () => {
    const component = render(
      <Mission
        missionId="exampleId"
        missionName="exampleName"
        description="descriptionExample"
        reserved="false"
      />,
    );
    expect(component.container).toHaveTextContent('NOT A MEMBER');
  });
  test('If reserved = "true" badge text should be, ACTIVE MEMBER', () => {
    const component = render(
      <Mission
        missionId="exampleId"
        missionName="exampleName"
        description="descriptionExample"
        reserved="true"
      />,
    );
    expect(component.container).toHaveTextContent('ACTIVE MEMBER');
  });
  test('If reserved = "false" button text should be, Join Mission', () => {
    const component = render(
      <Mission
        missionId="exampleId"
        missionName="exampleName"
        description="descriptionExample"
        reserved="false"
      />,
    );
    expect(component.container).toHaveTextContent('Join Mission');
  });
  test('If reserved = "true" button text should be, Leave Mission', () => {
    const component = render(
      <Mission
        missionId="exampleId"
        missionName="exampleName"
        description="descriptionExample"
        reserved="true"
      />,
    );
    expect(component.container).toHaveTextContent('Leave Mission');
  });
});
