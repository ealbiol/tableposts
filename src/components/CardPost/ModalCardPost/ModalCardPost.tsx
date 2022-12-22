
import { Post } from "../../../interfaces/Post"
import { useState, useEffect } from "react";
import { store, updatePost } from "../../../app/ReduxStore";
import "./ModalCardPost.scss"
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface Props {
    singlePost: Post;
    modalStatus: boolean;
    setModalStatus: (modalStatus: boolean) => void;
}
const ModalCardPost = ({ singlePost, modalStatus, setModalStatus }: Props) => {


    const [title, setTitle] = useState(singlePost.title);
    const [body, setBody] = useState(singlePost.body)
    useEffect(() => {
        setTitle(singlePost.title);
        setBody(singlePost.body)
    }, [singlePost])

    const handleEditPost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("TENEMOS EL ESTADO TITULO", title, "VALUE:", body);
        const postToUpdate = {
            title: title,
            body: body,
            id: singlePost.id,
            userId: singlePost.userId,
            url: singlePost.url
        }
        store.dispatch(updatePost(postToUpdate));
        handleCloseModal();
    }

    const handleCloseModal = () => {
        setModalStatus(!modalStatus)
    }

    return (
        <>
            {modalStatus &&


                <form className="modal" onSubmit={(e) => handleEditPost(e)}>
                    <IconButton onClick={() => handleCloseModal()} size="large" style={{ position: "absolute", top: 0, right: 0 }}>
                        <HighlightOffIcon style={{ color: "white" }} />
                    </IconButton>
                    <p>Edit Title</p>
                    <input onChange={e => setTitle(e.target.value)} value={title} />
                    <p>Edit Content</p>
                    <textarea onChange={e => setBody(e.target.value)} value={body} />
                    <input type="submit" value="Submit" />
                </form>


            }
        </>

    )
}

export default ModalCardPost