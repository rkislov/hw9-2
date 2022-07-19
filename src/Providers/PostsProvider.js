import { useState } from 'react';

import PostsContext from '../contexts/PostsContext';
import useJsonFetch from '../hooks/useJsonFetch';

export default function PostsProvider(props) {
  const serverUrl = process.env.REACT_APP_URL;

  const [ 
    posts, 
    setPosts, 
    isLoading, 
    hasError, 
    fetchReqFlag, 
    setFetchReqFlag ] = useJsonFetch(`${serverUrl}posts`, 'GET');
  const [ inputValue, setInputValue] = useState('');
  const [ selectedPost, setSelectedPost] = useState('');

  return (
    <PostsContext.Provider 
      value={{
        posts,
        setPosts,
        isLoading,
        hasError,
        inputValue,
        setInputValue,
        selectedPost,
        setSelectedPost,
        fetchReqFlag,
        setFetchReqFlag,
      }
      }>
        <div className="posts-widget_container">
          {props.children}
        </div>
    </PostsContext.Provider>
  );
}