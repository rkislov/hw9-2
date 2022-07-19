import { useContext } from 'react'; 
import PostsContext from '../../contexts/PostsContext';
import EditableItem from '../EditableItem';
import PostInput from '../inputs/PostInput';
import ApplyButton from '../buttons/ApplyButton';
import CancelButton from '../buttons/CancelButton';

export default function EditPostPage({ history }) {
  const { 
    inputValue,
    setInputValue,
    selectedPost,
    setSelectedPost,
    setFetchReqFlag,
  } = useContext(PostsContext);

  const onCancelBtnClick = (e) => {
    e.preventDefault();
    setInputValue('');
    history.goBack();
  }

  const onApplyChanges = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_URL}posts`, 
        { method: 'POST',
        body: JSON.stringify({"id": selectedPost.id, "content": inputValue}),  
      });

      if (response.ok) {
        setFetchReqFlag((prev) => !prev);        
        setSelectedPost((prev) => ({...prev, content: inputValue}));
        setInputValue('');
        history.goBack();
      }
    } catch (e) {
      console.log(e.message);
    }
  }
  
  return (
    <>
      <header className="page__title new-post_card_header">
        <h3>Редактирование поста</h3>
        <CancelButton 
            className='new-post-page_btn'
            onBtnClick={onCancelBtnClick}/>
      </header>

      <EditableItem className="new-post_card" >
      
      <PostInput className='new-post-card_input'/>

      <div className="btn_row">
         <ApplyButton 
            name='Применить' 
            className='new-post-page_btn'
            onBtnClick={onApplyChanges}/>
      </div>
    </EditableItem>      
    </>
  )
}