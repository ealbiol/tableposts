import { Post } from "../../interfaces/Post"
import CardPost from "./CardPost"
import "./GridCardPosts.scss";
import {store, deletePost } from "../../app/ReduxStore";
import ModalCardPost from "./ModalCardPost/ModalCardPost";
import {useState} from "react";

interface Props {
    listPosts : Array<Post>
}

const GridCardPosts = ({listPosts}: Props)=> {

  const handleDeletePost = (id_post:number) => {
     const index = listPosts.findIndex((post:Post)=> post.id === id_post);
     store.dispatch(deletePost(index)); // === set
  }
  const [modalStatus, setModalStatus] = useState(false);
  const [postSelected, setPostSelected] = useState<Post>({userId:0, id:0, title: "", body:""});

  return (
    <div className="grid-posts">
         <ModalCardPost singlePost= {postSelected} modalStatus={modalStatus} setModalStatus={setModalStatus}/>
   
        {listPosts.map((post: Post, key_id:number) =>{
            return (
                <CardPost post={post} handleDeletePost={handleDeletePost} key={key_id} setPostSelected={setPostSelected} setModal={setModalStatus}></CardPost>
            )
        })}
        </div>
    )
}

export default GridCardPosts
