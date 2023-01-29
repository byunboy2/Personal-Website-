import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<Home />);
    const headerText = getByText("Hi, I'm Daniel!", { exact: false });
    const subheaderText = getByText("Software Engineer", { exact: false });
    const locationText = getByText("Fullerton, CA", { exact: false });
    const githubLink = getByText('Github');
    const linkedinLink = getByText('Linkedin');


    expect(headerText).toBeInTheDocument();
    expect(subheaderText).toBeInTheDocument();
    expect(locationText).toBeInTheDocument();
    expect(githubLink.parentElement).toHaveAttribute('href', 'https://github.com/byunboy2');
    expect(linkedinLink.parentElement).toHaveAttribute('href', 'https://www.linkedin.com/in/daniel-b-75895424a/');

  });
});
