import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import OptionRow from '.';
import { BrowserRouter } from 'react-router-dom';

describe('PizzaList Item OptionRow ', () => {
  const options = [
    {
      title: 'option1',
      value: 'opt1',
      active: true
    },
    {
      title: 'option2',
      value: 'opt2'
    },
    {
      title: 'option3',
      value: 'opt3',
      disabled: true
    }
  ];

  it('render options', () => {
    render(<OptionRow options={options} />, { wrapper: BrowserRouter });

    const optionEls = screen.getAllByRole('button');
    optionEls.forEach((option, index) => {
      expect(option).toHaveTextContent(options[index].title);
    });

    expect(optionEls[0]).toHaveClass('active');
    expect(optionEls[1]).not.toHaveClass('active');
    expect(optionEls[2]).toBeDisabled();
  });

  it('click', async () => {
    const clickHandler = jest.fn();
    render(<OptionRow options={options} onClick={clickHandler} />, { wrapper: BrowserRouter });
    const optionEls = screen.getAllByRole('button');

    await userEvent.click(optionEls[1]);
    expect(clickHandler).toHaveBeenLastCalledWith(options[1].value);
  });

  it('click on disabled', async () => {
    const clickHandler = jest.fn();
    render(<OptionRow options={options} onClick={clickHandler} />, { wrapper: BrowserRouter });
    const optionEls = screen.getAllByRole('button');

    await userEvent.click(optionEls[2]);
    expect(clickHandler).not.toHaveBeenCalled();
  });
});
