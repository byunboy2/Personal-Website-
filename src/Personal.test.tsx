import React from 'react';
import { render } from '@testing-library/react';
import Personal from './Personal';

describe('personal component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Personal />);
    const headerText = getByText("About", { exact: false });
    const schoolText = getByText("Rithm School", { exact: false });
    const jobText = getByText("accountant", { exact: false });
    const majorLink = getByText("life sciences",  { exact: false });
    const keyWordLink = getByText("potential",  { exact: false });

    expect(headerText).toBeInTheDocument();
    expect(schoolText).toBeInTheDocument();
    expect(jobText).toBeInTheDocument();
    expect(majorLink).toBeInTheDocument()
    expect(keyWordLink).toBeInTheDocument()
  });
});
