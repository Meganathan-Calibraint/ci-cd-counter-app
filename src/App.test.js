import { render, screen } from '@testing-library/react';
import App from './App';

test('renders counter app content', () => {
  render(<App />);
  const linkElement = screen.getByText(/counter app/i);
  expect(linkElement).toBeInTheDocument();
});
