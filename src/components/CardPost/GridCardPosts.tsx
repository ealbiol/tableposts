import { Post } from "../../interfaces/Post";
import CardPost from "./CardPost";
import "./GridCardPosts.scss";
import { store, deletePost } from "../../app/ReduxStore";
import ModalCardPost from "./ModalCardPost/ModalCardPost";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Props {
    listPosts: Array<Post>
}
/**
 * This component is a grid card element
 * @param {Array<Post>} listPost - list of posts 
 * @returns <GridCardPosts></GridCardPosts>
 */
const GridCardPosts = ({ listPosts }: Props) => {

    const handleDeletePost = (id_post: number) => {
        const index = listPosts.findIndex((post: Post) => post.id === id_post);
        store.dispatch(deletePost(index));
    }
    const [modalStatus, setModalStatus] = useState(false);
    const [postSelected, setPostSelected] = useState<Post>({ userId: 0, id: 0, title: "", body: "", url: "" });
    const [nPostShown, setNPostShown] = useState<number>(10);

    const handleNPostsBack = () => {
        setNPostShown(nPostShown - 10)

    }

    const handleNPostsForward = () => {
        setNPostShown(nPostShown + 10)
    }

    return (
        <div>
            <div className="pagination-posts" data-testid="pagination-posts">
                <span>
                    {
                        nPostShown <= 10 ?
                            <IconButton disabled={true} >
                                <ArrowBackIosIcon style={{ color: "black" }} />
                            </IconButton>

                            :
                            <IconButton id="go-forward" onClick={() => handleNPostsBack()} >
                                <ArrowBackIosIcon style={{ color: "grey" }} />
                            </IconButton>
                    }
                </span>
                <span>
                    Page {Math.floor(nPostShown / 10)}
                </span>
                <span>
                    {
                        nPostShown < listPosts.length ?
                            <IconButton onClick={() => handleNPostsForward()}>
                                <ArrowForwardIosIcon style={{ color: "grey" }} />
                            </IconButton>
                            :
                            <IconButton disabled={true}>
                                <ArrowForwardIosIcon style={{ color: "black" }} />
                            </IconButton>
                    }
                </span>
            </div>
            <div className="grid-posts">
                <ModalCardPost singlePost={postSelected} modalStatus={modalStatus} setModalStatus={setModalStatus} />
                {listPosts.map((post: Post, key_id: number) => {
                    return (
                        <CardPost post={post} handleDeletePost={handleDeletePost} key={key_id} setPostSelected={setPostSelected} setModal={setModalStatus}></CardPost>
                    )
                }).slice(nPostShown - 10, nPostShown)}
            </div>
        </div>
    )
}

export default GridCardPosts
