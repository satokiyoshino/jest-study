import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import { UserForm } from "./UserForm"

describe('Test UserForm Component', () => {

  test('指定したデータが表示されるかのテスト', () => {
    render(<UserForm />)
    // const inputValue = screen.getByPlaceholderText('ID');
    const userName = screen.getByTestId('user_name');

    // userEvent.type(inputValue, '1');
    // await userEvent.click(screen.getByRole('button'));

    // expect(userName).toBe('John')
    expect(userName).toEqual('name')
  })

  // test('データがエラーになるテスト', () => {

  // })
})