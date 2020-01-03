import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders get started link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/get started/i);
  expect(linkElement).toBeInTheDocument();
});
