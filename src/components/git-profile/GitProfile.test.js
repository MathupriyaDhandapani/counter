import { render, fireEvent, waitFor } from "@testing-library/react"
import GitProfile from "./GitProfile"
import axios from "axios";
import { when } from 'jest-when'
import React from "react";
// import '@testing-library/jest-dom'

jest.mock("axios");


describe('GitProfile test', () => {
    test('should render load data button', () => {
        const { getByRole } = render(<GitProfile />);
        const loadDataButton = getByRole('button', { name: 'Load data' })

        expect(loadDataButton).toBeDefined()
    })

    test('should render loading when clicked on load data button', () => {
        const gitHubUrl = "myUrl";
        when(axios.get).calledWith(gitHubUrl).mockResolvedValue({
            data: {
                login: 'user1'
            }
        })
        const { getByRole, getByText } = render(<GitProfile url={gitHubUrl} />);
        const loadDataButton = getByRole('button', { name: 'Load data' })

        fireEvent.click(loadDataButton);

        expect(getByText(/Loading../)).toBeTruthy()
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

        expect(axios.get).toHaveBeenCalledWith(gitHubUrl);
    })
})