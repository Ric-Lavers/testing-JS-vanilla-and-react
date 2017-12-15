import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../Counter';

describe('A counter', () => {
  it('should display the count', () => {
    const counter = renderer.create(<Counter ledgend="Count" count={34}/>)
    expect(counter.toJSON()).toMatchSnapshot();
  });
});

// `npx jest -u` use if the change is a legitimate change and the html snapshop needs to be updated.
