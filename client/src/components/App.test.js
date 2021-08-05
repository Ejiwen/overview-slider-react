import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App.js';
import InfoProduct from '../components/InfoProduct.js';
import GaleryComponent from '../components/GaleryComponent.js';
import RatingComponent from '../components/RatingComponent.js';

import ProductStyles from '../components/ProductStyles.js';
import ProductSizes from '../components/ProductSizes.js';
import CheckBag from '../components/CheckBag.js';
import SocialShare from '../components/SocialShare.js';

import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

render(<App />);

it('should render a logo of the team', () => {
  expect(screen.getByText(/007LY/i)).toBeInTheDocument();
});

it('should render the InfoProduct Component', () => {
  const { container, getByText } = render(<InfoProduct />);
  expect(container).toBeInTheDocument();
});

it('should render Galery Component', () => {
  const { container, getByText } = render(<GaleryComponent />);
  expect(container).toBeInTheDocument();
});

it('should render Rating Component', () => {
  const { container, getByText } = render(<RatingComponent />);
  expect(container).toBeInTheDocument();
});

it('should render ProductStyles Component', () => {
  const { container, getByText } = render(<ProductStyles />);
  expect(container).toBeInTheDocument();
});

it('should render ProductSizes Component', () => {
  const { container, getByText } = render(<ProductSizes />);
  expect(container).toBeInTheDocument();
});

it('should render CheckBag Component', () => {
  const { container, getByText } = render(<CheckBag />);
  expect(container).toBeInTheDocument();
});

it('should render SocialShare Component', () => {
  const { container, getByText } = render(<SocialShare />);
  expect(container).toBeInTheDocument();
});
