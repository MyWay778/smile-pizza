import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Button from '.';

describe('PizzaList Button', () => {
  it('render button', () => {
    render(<Button count={0} />, { wrapper: BrowserRouter });

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Добавить');
    expect(button).not.toHaveTextContent('0');
  });

  it('render with count', () => {
    render(<Button count={2} />, { wrapper: BrowserRouter });

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('2');
    expect(button).toHaveClass('active');
  });

  it('click on button', async () => {
    const handler = jest.fn();
    render(<Button count={2} onClick={handler} />, { wrapper: BrowserRouter });
    const button = screen.getByRole('button');

    await userEvent.click(button);
    expect(handler).toBeCalled();
  });
});
