import { render, screen} from '@testing-library/react';
import CardPost from './CardPost';
import {Post} from "../../interfaces/Post";
describe("Test 1 - Basic render:",  ()=>{
    test("Check if CardPost component renders without problems", ()=>{
        const post = {
            body: "Post example",
            id: 0,
            title: "Title example",
            userId: 0,
            url: "http://example.com/"
        }
        const handleDeletePost = (id_post: number)=>{
             console.log("Hemos clicado en el boton de borrar");
        }
        const setPostSelected = (post :Post) => {};
        const setModal = (isModalOpen : boolean)=>{};
        render(<CardPost post={post} handleDeletePost={handleDeletePost} setPostSelected={setPostSelected} setModal={setModal}></CardPost>)

        expect(screen.getByText("Post example")).toBeTruthy();
        expect(screen.getByText("Title example")).toBeTruthy();
        const img: HTMLImageElement = screen.getByRole('img');
        expect(img.src == "http://example.com/").toBeTruthy;
    })
})

