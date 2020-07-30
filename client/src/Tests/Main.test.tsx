import React from 'react';
import { render } from '@testing-library/react';
import Main from '../Containers/Main';

test('renders learn react link', () => {
  const { getByText } = render(<Main car="electric" addOrRemove />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
