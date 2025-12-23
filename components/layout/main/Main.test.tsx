import { render, screen } from '@testing-library/react';
import MainSection from './Main';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('MainSection', () => {
  it('renders the main element', () => {
    render(<MainSection />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});

