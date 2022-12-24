import { render, screen , waitFor} from '@testing-library/react';
import PostPage from "./PostPage";
import { BrowserRouter } from 'react-router-dom';
import { server } from "../mocks/server";
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
    Navigator: () => mockedUsedNavigate
}));
describe("Test 1 - Basic render:",  ()=>{
    test("Check if PostPage page renders without problems", async()=>{
        const post = {
            body: "Post example",
            id: 0,
            title: "Title example",
            userId: 0,
            url: "http://example.com/"
        };
        localStorage.setItem("user", JSON.stringify({ user: "UserTest", password: "PasswordTest" }))
        render(<PostPage />, { wrapper: BrowserRouter })
        await waitFor(() => screen.getAllByRole("button"))
    })
})
