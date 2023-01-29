import { render } from '@testing-library/react';
import App from './App';
import React from 'react';


describe("Renders properly when propped up",()=>{
  it('Goes to the homepage', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/Hi, I'm Daniel!/);
    expect(textElement).toBeInTheDocument();
  });

})

