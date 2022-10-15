import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserForm } from './UserForm';

describe('UserForm Component', () => {
  test('id-input should be typed', async () => {
    render(<UserForm />);

    const idInput = screen.getByTestId('id-input') as HTMLInputElement;
    userEvent.type(idInput, '4');

    expect(idInput).toHaveValue('4');
  });

  test('It should display name after submit', async () => {
    render(<UserForm />);

    // setup
    const idInput = screen.getByTestId('id-input') as HTMLInputElement;
    userEvent.type(idInput, '4');

    // test
    const submitButton = screen.getByTestId('submit-button') as HTMLButtonElement;
    userEvent.click(submitButton);

    await waitFor(() => {
      screen.getByTestId('loading');
    });

    const loading = screen.getByTestId('loading');
    expect(loading).toHaveTextContent('loading');

    await waitFor(() => {
      screen.getByTestId('name-display');
    });

    const nameDisplay = screen.getByTestId('name-display');
    expect(nameDisplay).toHaveTextContent('Micheal');
  });

  test('It should display loading after submit', async () => {
    render(<UserForm />);

    // setup
    const idInput = screen.getByTestId('id-input') as HTMLInputElement;
    userEvent.type(idInput, '4');

    // test
    const submitButton = screen.getByTestId('submit-button') as HTMLButtonElement;
    userEvent.click(submitButton);

    await waitFor(() => {
      screen.getByTestId('loading');
    });

    const loading = screen.getByTestId('loading');
    expect(loading).toHaveTextContent('loading');
  });

  test('It should display error after submit with disable value', async () => {
    render(<UserForm />);

    // setup
    const idInput = screen.getByTestId('id-input') as HTMLInputElement;
    userEvent.type(idInput, '100');

    // test
    const submitButton = screen.getByTestId('submit-button') as HTMLButtonElement;
    userEvent.click(submitButton);

    await waitFor(() => {
      screen.getByTestId('error');
    });

    const error = screen.getByTestId('error');
    expect(error).toHaveTextContent('error');
  });
});