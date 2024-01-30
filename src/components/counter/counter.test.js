const { render } = require("@testing-library/react")
const { default: Counter } = require("./counter")

describe('Counter rendering', () => { 
  it("should render counter test", () => {
    const { getByText } = render(<Counter />)
    
    expect(getByText("Counter")).toBeTruthy()
  })

  test("should render initial value 0", () => {
    render(<Counter />)
    
    expect(screen.getByRole('heading')).toHaveTextContent(0);
  })
 })