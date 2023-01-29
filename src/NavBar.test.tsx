import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { MemoryRouter } from 'react-router-dom';

describe('NavBar component', () => {
  it('renders properly', () => {
    render(<MemoryRouter><NavBar /></MemoryRouter>);
  });

  it('renders all the nav bar links', () => {
    render(<MemoryRouter><NavBar /></MemoryRouter>);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
  });
});
