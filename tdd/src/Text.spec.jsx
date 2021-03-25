import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Text, SayHelloOnButtonClick, CallApiOnButtonClick } from './Text';

import { getToDoItems } from './api-client/apis';

jest.mock('./api-client/apis');

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

it("should call `getToDoItems` when the button is clicked", () => {
  // Arrange
  render(<CallApiOnButtonClick />);

  // Act
  const buttonElement = screen.queryByText('Click me!');
  fireEvent.click(buttonElement);

  // Assert
  expect(getToDoItems).toHaveBeenCalled();
});