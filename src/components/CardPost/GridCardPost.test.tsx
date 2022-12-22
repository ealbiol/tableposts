import { render, screen } from '@testing-library/react';

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
        
    })
})

