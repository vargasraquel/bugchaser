import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title', () => {
  render(<App />);
  const linkElement = screen.getByText(/bug chaser/i);
  expect(linkElement).toBeInTheDocument();
});
