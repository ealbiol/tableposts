import { fireEvent, render, screen } from '@testing-library/react';
import { listPostsMocked } from '../../mocks/mockPosts';
listPostsMocked
import GridCardPosts from './GridCardPosts';
describe("Test 1 - Basic render:", ()=>{
    test("Check if CardPost component renders without problems",()=>{
        const post = {
            body: "Post example",
            id: 0,
            title: "",
            userId: 0,
            url: ""
        }
      
        render(<GridCardPosts listPosts={[]}></GridCardPosts>)
        
    });
    test("checking on click to buttons", ()=>{
        render(<GridCardPosts listPosts={listPostsMocked}></GridCardPosts>)
        const button = screen.getAllByRole("button");
        fireEvent.click(button[1]);
        fireEvent.click(button[0]);  
    })
})

