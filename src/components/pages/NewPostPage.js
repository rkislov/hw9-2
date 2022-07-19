import { useContext } from 'react';
import PostsContext from '../../contexts/PostsContext';

import EditableItem from '../EditableItem';
import PostInput from '../inputs/PostInput';
import ApplyButton from '../buttons/ApplyButton';
import CancelButton from '../buttons/CancelButton';

export default function NewPostPage({ history }) {
  const { 
    inputValue, 
    setInputValue, 
    setFetchReqFlag, 
  } = useContext(PostsContext);
  
  const onNewPostClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_URL}posts`, 
        { method: 'POST',
        body: JSON.stringify({"id": 0, "content": inputValue}),  
      });

      if (response.ok) {
        setFetchReqFlag((prev) => !prev);
        setInputValue('');
        history.goBack();
      }
    } catch (e) {
      console.log(e.message);
    }     
  }

  const onCancelBtnClick = (e) => {
    e.preventDefault();

    history.goBack();
  }
  
  return (
    <EditableItem className="new-post_card" >
      <header className="page__title new-post_card_header">
        <h3>Создание нового поста</h3>
        <CancelButton 
            className='new-post-page_btn'
            onBtnClick={onCancelBtnClick}/>
      </header>

      <PostInput className='new-post-card_input'/>

      <div className="btn_row">
         <ApplyButton 
            name='Опубликовать' 
            className='new-post-page_btn'
            onBtnClick={onNewPostClick}/>
      </div>
    </EditableItem>    
  )
}