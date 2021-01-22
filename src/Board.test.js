import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

test('should re-render the board on each click', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>);
    const buttons = board.queryAllByRole('button');

    expect(buttons[5].innerHTML).toBe('');
    fireEvent.click(buttons[5]);
    expect(buttons[5].innerHTML).toBe('X');
});

test('should re-render the board on each click, with alternating Xs and Os', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>);
    const buttons = board.queryAllByRole('button');

    fireEvent.click(buttons[5]);
    fireEvent.click(buttons[1]);
    expect(buttons[5].innerHTML).toBe('X');
    expect(buttons[1].innerHTML).toBe('O');
});

test('should re-render the board on each click, with alternating Xs and Os', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>);
    const buttons = board.queryAllByRole('button');

    fireEvent.click(buttons[5]);
    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[4]);
    expect(buttons[5].innerHTML).toBe('X');
    expect(buttons[1].innerHTML).toBe('O');
    expect(buttons[4].innerHTML).toBe('X');
});

/* This function does not have any 'expect' clauses since the getByText method will fail if there is
no text exactly matching the string given. Therefore, if this test passes without failure, the correct
status messages must be in display. */
test('should update status message to alternate between whose turn it is', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>);
    const buttons = board.queryAllByRole('button');
    
    status = board.getByText('Next player: X');
    fireEvent.click(buttons[5]);
    status = board.getByText('Next player: O');
    fireEvent.click(buttons[1]);
    status = board.getByText('Next player: X');
    fireEvent.click(buttons[4]);
});