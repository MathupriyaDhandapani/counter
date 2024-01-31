import { cleanup, render } from '@testing-library/react';
import Home from './page';
import React from 'react';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it.skip('CheckboxWithLabel changes the text after click', () => {
  const { getByText } = render(
    <Home />,
  );

  expect(getByText(/Hello World/)).toBeTruthy();
});