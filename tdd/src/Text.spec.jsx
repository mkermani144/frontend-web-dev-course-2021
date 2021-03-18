import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Text, { SayHelloOnButtonClick } from './Text';

it('should show text accordingly', () => {

  // Arrange
  const text = 'this is some text';

  render(<Text string={text} />);

  // Act

  // Assert
  const textElement = screen.queryByText(text);

  expect(textElement).toBeInTheDocument();
});

it('should show "hello" when the button is clicked', () => {
  // Arrange
  render(<SayHelloOnButtonClick />);

  // Act
  const buttonElement = screen.queryByText('Click me!');
  fireEvent.click(buttonElement);

  // Assert
  const textElement = screen.queryByText('hello');
  expect(textElement).toBeInTheDocument();
});