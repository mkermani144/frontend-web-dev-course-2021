import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

it('should render a "toggle" button', () => {
  // Arrange
  render(<App />);

  // Act
  const button = screen.queryByText('Toggle');

  // Assert
  expect(button).toBeInTheDocument();
});

it('should render 0 by default', () => {
  render(<App />);

  expect(screen.queryByText('0')).toBeInTheDocument();
});

it('should toggle value when button is clicked', () => {
  render(<App />);

  const button = screen.queryByText('Toggle');
  fireEvent.click(button);

  expect(screen.queryByText('0')).not.toBeInTheDocument();
  expect(screen.queryByText('1')).toBeInTheDocument();

  fireEvent.click(button);

  expect(screen.queryByText('1')).not.toBeInTheDocument();
  expect(screen.queryByText('0')).toBeInTheDocument();
});

it('should update localStorage value accordingly', () => {
  render(<App />);

  const button = screen.queryByText('Toggle');
  fireEvent.click(button);

  expect(window.localStorage['someKey']).toBe('1');

  fireEvent.click(button);

  expect(window.localStorage['someKey']).toBe('0');
});