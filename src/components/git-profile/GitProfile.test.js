import { render, fireEvent } from "@testing-library/react"
import GitProfile from "./GitProfile"
import axios from axios;
import { when } from 'jest-when'

jest.mock("axios", () => {
    return { get: jest.fn() };
  });


describe('GitProfile test', () => {
    test('should render load data button', () => {
        const { getByRole } = render(<GitProfile />);
        const loadDataButton = getByRole('button', { name: 'Load data' })

        expect(loadDataButton).toBeInTheDocument()
    })

    test('should render loading when clicked on load data button', () => {
        const gitHubUrl = "myUrl";
        const { getByRole, getByText } = render(<GitProfile url={gitHubUrl} />);
        const loadDataButton = getByRole('button', { name: 'Load data' })

        fireEvent.click(loadDataButton);

        expect(getByText("Loading..")).toBeInTheDocument()
    })

    test('should render github data when clicked on load data button', async () => {
        const gitHubUrl = "myUrl";
        when(axios.get).calledWith(gitHubUrl).mockResolvedValue({
            data: {
                login: 'user1'
            }
        })
        const { getByRole, getByText } = render(<GitProfile url={gitHubUrl} />);
        const loadDataButton = getByRole('button', { name: 'Load data' })

        fireEvent.click(loadDataButton);

        expect(axios.get).toHaveBeenCalledWith(url);
    expect(axios.get).toHaveBeenCalledTimes(1);
        await waitFor(()=>expect("Hello user1!").toBeInTheDocument())
    })
})