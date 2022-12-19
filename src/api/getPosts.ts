
const urlPosts = "https://jsonplaceholder.typicode.com/posts"
export const getPosts = async() => {
    const res = await fetch(urlPosts);
    return res.json();
}