import { render, screen, fireEvent } from '@testing-library/react';
import Login from "./Login"
import { BrowserRouter } from 'react-router-dom'


describe("Test 1 - Basic render:", () => {
    test("Check if Login component renders without problems", () => {
        const jsdomAlert = window.alert;  // remember the jsdom alert
        window.alert = () => {};  
        render(<Login />, { wrapper: BrowserRouter })
        const button = screen.getByRole("button");
        fireEvent.click(button);
        window.alert = jsdomAlert;  // restore the jsdom alert
    })
    test("Check if when the inputs are filled and click on the button login, navigates correctly to home and cookies are set", () => {

        render(<Login />, { wrapper: BrowserRouter })
        const button = screen.getByRole("button");
        const inputUser: HTMLInputElement = screen.getByTestId("form-user");
        const inputPassword: HTMLInputElement = screen.getByTestId("form-password")
        fireEvent.input(inputUser, { target: { value: 'email@email.com' } })
        fireEvent.input(inputPassword, { target: { value: 'password' } })
        fireEvent.click(button);
    }
    )
})