import { render, screen } from '@testing-library/react';
import PostPage from "./PostPage";
import { BrowserRouter } from 'react-router-dom';
import { server } from "../mocks/server";
describe("Test 1 - Basic render:",  ()=>{
    test("Check if PostPage page renders without problems", ()=>{
        const post = {
            body: "Post example",
            id: 0,
            title: "Title example",
            userId: 0,
            url: "http://example.com/"
        };
        render(<PostPage />, { wrapper: BrowserRouter })
    })
})
