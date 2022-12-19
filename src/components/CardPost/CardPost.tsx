
import { Post } from '../../interfaces/Post'
import "./CardPost.scss";
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
interface Props {
    post : Post;
    handleDeletePost: (id_post: number)=>void;
}
const CardPost = ({post, handleDeletePost}: Props) => {

  return (
    <div className='card-post'>
        <IconButton size="large" style={{ position:"absolute",top:0, right:0}} className='card-post__icon-button' onClick={()=>handleDeletePost(post.id)}>
          <HighlightOffIcon/>
        </IconButton>
        <h1 className='card-post__header'>
        El titulo: {post.title} 
       
        </h1>
      
        <p className='card-post__body'>
        El Body: {post.body}
        </p>
      <p className='card-post__userid'>
        El usuario: {post.userId}
      </p>
      
    </div>
  )
}
export default CardPost;