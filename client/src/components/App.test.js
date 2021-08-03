import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App.js';
import '@testing-library/jest-dom/extend-expect';

it('should render a form to the page', () => {
  render(<App />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
