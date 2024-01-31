const { render, screen, fireEvent } = require("@testing-library/react")

const { default: Counter } = require("./counter")

const React = require("react");

describe('Counter rendering', () => {

  test("should display countent text", () => {
    const { getByText } = render(<Counter />)

    expect(getByText("Counter")).toBeTruthy();
  });
  test("should render increment and decrement button with disabled state", () => {

    render(<Counter />)

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });

    expect(incrementButton).toBeDefined();
    expect(decrementButton).toHaveProperty('disabled', true)

  });

  test("should render counter with initial value as 0", () => {
    render(<Counter />)

    expect(screen.queryByText("0")).toBeTruthy();
  });
})

describe('Counter Functionalities', () => {
  test("should increment counter by 1 when increment button is clicked and enable decrement button", () => {

    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: 'Increment' });

    fireEvent.click(incrementButton);

    expect(screen.getByText("1")).toBeTruthy();

  });

  test("should decrement counter by 1 when decrement button is clicked", () => {

    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });

    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);

    expect(screen.getByText("0")).toBeTruthy();

  });

})