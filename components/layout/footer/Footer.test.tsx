import { render, screen } from '@testing-library/react';
import FooterSection from './Footer';

describe('FooterSection', () => {
  it('renders the footer element', () => {
    render(<FooterSection />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});

