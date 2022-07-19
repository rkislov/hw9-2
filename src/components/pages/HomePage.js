import { useContext } from 'react';

import PostsContext from '../../contexts/PostsContext';

import EditableItem from '../EditableItem';
import PostInput from '../inputs/PostInput';
import ApplyButton from '../buttons/ApplyButton';
import PostsList from '../posts/PostsList';

export default function HomePage({ history, match}) {  
  const { posts, inputValue } = useContext(PostsContext);

  const onNewPostClick = (e) => {
    history.push(`/posts/new`);
  }

  return (
    <>
      <EditableItem className="start-page_editable">
        <PostInput className="new-post_input"/>
        <ApplyButton 
          className={`start-page_btn${!inputValue.trim() ? ' inactive' : ''}`}
          name='Создать пост'
          onBtnClick={onNewPostClick}
        />
      </EditableItem>
      
      <PostsList posts={posts} />
    </>
  );
}