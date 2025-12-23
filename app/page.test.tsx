import { render, screen } from '@testing-library/react';
import Home from './page';

// Mock the components
jest.mock('@/components/layout/header/Header', () => ({
  __esModule: true,
  default: () => <header data-testid="header">Header</header>,
}));

jest.mock('@/components/layout/main/Main', () => ({
  __esModule: true,
  default: () => <main data-testid="main">Main</main>,
}));

jest.mock('@/components/layout/footer/Footer', () => ({
  __esModule: true,
  default: () => <footer data-testid="footer">Footer</footer>,
}));

describe('Home Page', () => {
  it('renders all layout components', () => {
    render(<Home />);
    
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});

