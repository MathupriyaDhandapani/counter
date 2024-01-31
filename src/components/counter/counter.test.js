import Counter from "./counter"
import { render, screen } from "@testing-library/react"
import React from "react"

describe('Counter rendering', () => { 
  it("should render counter test", () => {
    const { getByText } = render(<Counter />)
    
    expect(getByText("Counter")).toBeTruthy()
  })

  test("should render initial value 0", () => {
    render(<Counter />)
    
    expect(screen.getAllByRole('heading')[1].textContent).toBe("0");
  })
 })