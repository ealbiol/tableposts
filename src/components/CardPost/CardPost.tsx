
import { Post } from '../../interfaces/Post';
import "./CardPost.scss";
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';


interface Props {
  post: Post;
  handleDeletePost: (id_post: number) => void;
  setPostSelected: (postSelected: Post) => void;
  setModal: (modal_mode: boolean) => void;
}

/**
 * 
 * @param param0 {Post} post
 * @param param1 {Function} handleDeletePost
 * @returns 
 */
const CardPost = ({ post, handleDeletePost, setPostSelected, setModal }: Props) => {

  const handleSelected = () => {
    setPostSelected(post);
    setModal(true);
  };

  return (
    <div className='card-post'>
      <IconButton
        size="large"
        style={{ position: "absolute", top: -3, right: 0, color: "#E50914" }}
        onClick={() => handleDeletePost(post.id)}>
        <HighlightOffIcon />
      </IconButton>
      <IconButton onClick={() => handleSelected()} style={{ color: "white", position: "absolute", top: 0, right: 40 }}>
        <EditIcon />
      </IconButton>

      <h1 className='card-post__header'>
        {post.title}
      </h1>
      <img src={post.url} />

      <p className='card-post__body'>
        {post.body}
      </p>
      <p className='card-post__userid'>
        User {post.userId}
      </p>

    </div>
  )
}
export default CardPost;