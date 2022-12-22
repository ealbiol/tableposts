import { render, screen } from '@testing-library/react';
import PostPage from './PostPage';

describe("Test 1 - Basic render:",  ()=>{
    test("Check if PostPage page renders without problems", ()=>{
        const post = {
            body: "Post example",
            id: 0,
            title: "Title example",
            userId: 0,
            url: "http://example.com/"
        };
    })
})
