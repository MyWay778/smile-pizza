import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import CartLink from '.';
import { BrowserRouter } from 'react-router-dom';

describe('CartLink', () => {
  it('render cart button', () => {
    render(<CartLink count={3} price={224} to="cart" />, { wrapper: BrowserRouter });

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });

  it('render without selected items', () => {
    render(<CartLink count={0} price={0} to="cart" />, { wrapper: BrowserRouter });

    const price = screen.getByTestId('price');
    expect(price.textContent).toMatch('0');

    const count = screen.queryByTestId('count');
    expect(count).toBeNull();
  });

  it('redirect to', async () => {
    const toUrl = 'cart';

    render(<CartLink count={3} price={224} to={toUrl} />, { wrapper: BrowserRouter });

    const link = screen.getByRole('link');

    const user = userEvent.setup();
    await user.click(link);

    expect(global.window.location.pathname).toContain(toUrl);
  });
});
