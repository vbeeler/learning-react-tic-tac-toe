import { render, fireEvent } from '@testing-library/react';
import Square from './Square';

test('should render an empty Square', () => {
    const square = render(<Square value={null} />); // Line 1
    const button = square.getByRole('button'); // Line 2
    expect(button.innerHTML).toBe(''); // Line 3
  });

test('should render a Square with an "X"', () => {
    const square = render(<Square value='X' />); // Line 1
    const button = square.getByRole('button'); // Line 2
    expect(button.innerHTML).toBe('X'); // Line 3
  });

test('should call the specified onClick when square is clicked', () => {
    const onClick = jest.fn();
    const square = render(<Square value='X' onClick={onClick} />);
    const button = square.getByRole('button');

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
});