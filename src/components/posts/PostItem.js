import { Link } from 'react-router-dom';
import { useContext } from 'react';
import moment from 'moment';


import PostsContext from '../../contexts/PostsContext';

export default function PostItem({ post }) {
  const { setSelectedPost } = useContext(PostsContext);

  const handlingPostClick = (post) => {
    setSelectedPost(post);
  }

  return (
    <Link to={`/posts/${post.id}`} className='post-item_box' onClick={() => handlingPostClick(post)}>
      <div className="post-item_header">
        <img className="post-item_avatar" 
          src={post.avatar} 
          alt={post.name} />
        
        <div className="post-item_info">
          <span className="post-item_info_name">{post.name}</span>
          <span className="post-item_info_time">
            {moment(post.created).format('DD-MM-YY hh:mm')}
          </span>
        </div>
      </div>

      <div className="post-item_content">{post.content}</div>
    </Link>
  );
}