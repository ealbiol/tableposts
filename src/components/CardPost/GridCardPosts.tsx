import { Post } from "../../interfaces/Post"
import CardPost from "./CardPost"
import "./GridCardPosts.scss";
import {store, deletePost } from "../../app/ReduxStore";
interface Props {
    listPosts : Array<Post>
}
const GridCardPosts = ({listPosts}: Props)=> {
  const handleDeletePost = (id_post:number) => {
     const index = listPosts.findIndex((post:Post)=> post.id === id_post);
     store.dispatch(deletePost(index));
  } 
  return (
    <div className="grid-posts">
        {listPosts.map((post: Post, key_id:number) =>{
            return (
                <CardPost post={post} handleDeletePost={handleDeletePost} key={key_id}></CardPost>
            )
        })}
    </div>
    )
}

export default GridCardPosts
