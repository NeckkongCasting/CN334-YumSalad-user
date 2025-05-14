import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from '../pages/login';

test('renders login form and handles submit', async () => {
  render(<LoginPage />);

  const usernameInput = screen.getByPlaceholderText('Username');
  const passwordInput = screen.getByPlaceholderText('Password');
  const submitButton = screen.getByText('SUBMIT');

  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

  fireEvent.click(submitButton);
});


jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: jest.fn(),
    prefetch: jest.fn(),
    route: '/',
    query: {},
    asPath: '/',
  })),
}));

