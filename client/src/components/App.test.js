import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App.js';
import '@testing-library/jest-dom/extend-expect';

test('should render a form to the page', () => {
  render(<p> Hello Jest!</p>);
  expect(screen.getByText('Hello Jest!')).toBeInTheDocument();
});

it('renders App', () => {
  render(<App />);
});
