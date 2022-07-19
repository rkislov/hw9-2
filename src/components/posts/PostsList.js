import { useContext } from 'react';


import PostsContext from '../../contexts/PostsContext';
import PostItem from './PostItem';
import Loader from '../loaders/Loader';

export default function PostsList({ posts }) {
  const { isLoading, hasError } = useContext(PostsContext);
  
  const element = !posts.length 
      ? <div className='empty-post_box'>У вас еще нет постов!</div> 
      : <div className='posts__box'>
          { isLoading ? <Loader /> :
            hasError ? <div>{hasError}</div> : 
            posts.map((post) => <PostItem key={post.id} post={post} />)}
        </div>;

  return (
    <>
      { element }      
    </>
  );
}