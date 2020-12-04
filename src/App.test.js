import { render, screen } from '@testing-library/react';
import App from './App';
import Signup from './Signup';

test('renders learn react link', () => {
  render(<App />);
  //render(<Signup />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
