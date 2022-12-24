import { getPosts } from '../api/getPosts';
import { store, setPost } from "../app/ReduxStore";
import { useEffect, useState } from "react";
import { Post } from "../interfaces/Post";
import { GridCardPosts } from '../components/CardPost';
import { Navigate} from "react-router-dom";


function PostPage() {
    const [listPost, setListPost] = useState<Array<Post>>([])
    store.subscribe(() => setListPost(store.getState().listPosts))
    const getPostsF = async () => {
        const res = await getPosts();
        const resFormatted = res.map((post: Post, key: number) => {
            return { ...post, url: "https://picsum.photos/200/300/?random&rnd" + new Date().getTime() + key }
        })
        store.dispatch(setPost(resFormatted))
    }

    useEffect(() => {
        getPostsF();
    }, []);
    
    const user = localStorage.getItem("user")
    if (user){
        return (
            listPost ?
            (<GridCardPosts listPosts={listPost} />) 
            :
            (<p>Post not found</p>)
            
        );
    } else {
        return (<Navigate to="/"/>)
    }
}

export default PostPage;
