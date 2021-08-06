import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App.js';
import GaleryComponent from '../components/GaleryComponent.js';
import RatingComponent from '../components/RatingComponent.js';
import InfoProduct from '../components/InfoProduct.js';
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

describe('all the components should rendred in App', () => {
  it('App should be rendred', () => {
    render(<App />);
  });
  it('Galery component should be rendred', () => {
    render(<GaleryComponent />);
  });
  it('Rating component should be rendred', () => {
    render(<RatingComponent />);
  });
  it('InfoProduct component should be rendred', () => {
    render(<InfoProduct />);
  });
  it('ProductStyles component should be rendred', () => {
    render(<ProductStyles />);
  });
  it('ProductSizes component should be rendred', () => {
    render(<ProductSizes />);
  });
  it('CheckBag component should be rendred', () => {
    render(<CheckBag />);
  });
  it('SocialShare component should be rendred', () => {
    render(<SocialShare />);
  });
});

describe('test the behavior of Galery Component', () => {
  it('The div container of galery have relative position', () => {
    render(<GaleryComponent />);
    const btn = document.getElementById('GalleyContainer');
    expect(btn).toHaveStyle(`position: relative`);
  });

  it('check if the fullScreenIcon is empty', () => {
    render(<GaleryComponent />);
    const btn = document.querySelector('#fullScreenIcon');
    expect(btn).not.toBeEmpty();
  });

  it('check if the fullScreenIcon has color white', () => {
    render(<GaleryComponent />);
    const btn = document.querySelector('#fullScreenIcon');
    expect(btn).toHaveStyle(`color: white`);
  });

  it('scroll thumbnails icon has the right class', () => {
    render(<GaleryComponent />);
    const btn = document.querySelector('.scrollClass');
    expect(btn).toHaveClass('scrollClass');
  });

  it('display the right icon to scroll top on the thumbnails', () => {
    render(<GaleryComponent />);
    const btn = document.querySelector('.scrollClassTop');
    expect(btn).toHaveTextContent('▲');
  });

  it('display the right icon to scroll bottom on the thumbnails', () => {
    render(<GaleryComponent />);
    const btn = document.querySelector('#scrollDown');
    expect(btn).toHaveTextContent('▼');
  });
});

describe('test the InfoProduct behavior', () => {
  it('Should display the name of category', async () => {
    render(<InfoProduct />);
    expect(screen.queryByText(/Jackets/)).toBeNull();
    expect(await screen.findByText(/Jackets/i)).toBeInTheDocument();
  });
});

describe('test the behavior of CheckBag component', () => {
  it('displaye checked if we add product to our bag', () => {
    render(<CheckBag />);
    const btn = screen.getByRole('button', { name: '+' });
    userEvent.click(btn);
    expect(btn).toHaveTextContent('✓');
  });

  it('fill the start if we add product to our favorite', () => {
    render(<CheckBag />);
    const btn = screen.getByRole('button', { name: '☆' });
    userEvent.click(btn);
    expect(btn).toHaveTextContent('★');
  });
});
