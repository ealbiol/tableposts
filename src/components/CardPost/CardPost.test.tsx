import { fireEvent, render, screen } from '@testing-library/react';
import CardPost from './CardPost';
import { Post } from "../../interfaces/Post";

describe("Test 1 - Basic render:", () => {
    const post = {
        body: "Post example",
        id: 0,
        title: "Title example",
        userId: 0,
        url: "http://example.com/"
    }
    const handleDeletePost = (id_post: number) => {
    }
    const setPostSelected = (post: Post) => { };
    const setModal = (isModalOpen: boolean) => { };
    test("Check if CardPost component renders without problems", () => {
        render(<CardPost post={post} handleDeletePost={handleDeletePost} setPostSelected={setPostSelected} setModal={setModal}></CardPost>)        
        expect(screen.getByText("Post example")).toBeTruthy();
        expect(screen.getByText("Title example")).toBeTruthy();
        const img: HTMLImageElement = screen.getByRole('img');
        expect(img.src == "http://example.com/").toBeTruthy;
    })
    test("checking on click to buttons", ()=>{
        render(<CardPost post={post} handleDeletePost={handleDeletePost} setPostSelected={setPostSelected} setModal={setModal}></CardPost>)
        const button = screen.getAllByRole("button");
        fireEvent.click(button[0]);
        fireEvent.click(button[1]);   
    })
})

