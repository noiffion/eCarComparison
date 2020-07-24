import React from 'react';
import { render } from '@testing-library/react';
import CarBoard from '../Containers/CarBoard';

test('renders learn react link', () => {
  const { getByText } = render(<CarBoard />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
