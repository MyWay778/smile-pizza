import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import TabList from '.';

describe('TabList', () => {
  const tabs = ['tab1', 'tab2', 'tab3'];

  it('render tabs', () => {
    render(<TabList tabs={tabs} />, { wrapper: BrowserRouter });
    const tabEls = screen.getAllByText(/tab/i);

    expect(tabEls).toHaveLength(3);
  });

  it('first active by default', () => {
    render(<TabList tabs={tabs} />, { wrapper: BrowserRouter });
    const tabEls = screen.getAllByText(/tab/i);

    expect(tabEls[0]).toHaveClass('active');
    expect(tabEls[1]).not.toHaveClass('active');
    expect(tabEls[2]).not.toHaveClass('active');
  });

  it('click', async () => {
    render(<TabList tabs={tabs} />, { wrapper: BrowserRouter });
    const tabEls = screen.getAllByText(/tab/i);

    expect(tabEls[0]).toHaveClass('active');
    expect(tabEls[1]).not.toHaveClass('active');

    const user = userEvent.setup();
    await user.click(tabEls[1]);

    expect(tabEls[0]).not.toHaveClass('active');
    expect(tabEls[1]).toHaveClass('active');
  });
});
