import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Select from '.';
import { BrowserRouter } from 'react-router-dom';

describe('SortPanel Select', () => {
  const options = ['option1', 'option2', 'option3'];

  it('render options', () => {
    render(<Select options={options} />, { wrapper: BrowserRouter });
    const items = screen.getAllByRole('listitem');
    const texts = [...items].map((i) => i.textContent);

    expect(texts).toEqual(options);
  });

  it('open on click', async () => {
    render(<Select options={options} />, { wrapper: BrowserRouter });
    const select = screen.getByTestId('select');
    const label = screen.getByTestId('label');

    expect(select).not.toHaveClass('opened');
    await userEvent.click(label);

    expect(select).toHaveClass('opened');

    await userEvent.click(global.window.document.documentElement);
    expect(select).not.toHaveClass('opened');
  });

  it('change label', async () => {
    render(<Select options={options} />, { wrapper: BrowserRouter });

    const label = screen.getByTestId('label');
    expect(label).toHaveTextContent(options[0]);

    await userEvent.click(label);
    const items = screen.getAllByRole('listitem');
    await userEvent.click(items[1]);

    expect(label).toHaveTextContent(options[1]);
  });
});
