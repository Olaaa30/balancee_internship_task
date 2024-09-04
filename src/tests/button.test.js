// components/Button.test.js
import { render, screen } from '@testing-library/react';
import Button from '../app/Button';

test('renders the button', () => {
  render(<Button>Click me</Button>);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
