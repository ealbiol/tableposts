
import { getPosts } from '../api/getPosts';
import { store, setPost } from "../app/ReduxStore";
import { useEffect, useState } from "react";
import { Post } from "../interfaces/Post";
import { GridCardPosts } from '../components/CardPost';

function PostPage() {
  const [listPost, setListPost] = useState<Array<Post>>([])
  store.subscribe(() => setListPost(store.getState().listPosts))
  const getPostsF = async () => {
    const res = await getPosts();
    store.dispatch(setPost(res))
  }

  useEffect(() => {
    getPostsF();
  }, [])




  return (
    <>
     <GridCardPosts listPosts={listPost} />
    </>
  );
}

export default PostPage;
