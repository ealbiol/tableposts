import { render, screen } from '@testing-library/react';
import ModalCardPost from './ModalCardPost';

  describe("Test 1 - Basic render:", ()=>{
    test("Check if ModalCardPost component renders without problems",()=>{
        const post = {
            body: "",
            id: 0,
            title: "",
            userId: 0,
            url: ""
        }
        let modalStatus = false;
        const setModalStatus = (updateStatus: boolean)=>{
            modalStatus = updateStatus;
        }
        render(<ModalCardPost singlePost={post} modalStatus={modalStatus} setModalStatus={setModalStatus}></ModalCardPost>)
        
    })
})
