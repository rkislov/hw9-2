import { useContext } from 'react'; 
import PostsContext from '../../contexts/PostsContext';
import PostItem from '../posts/PostItem';
import ApplyButton from '../buttons/ApplyButton';
import CancelButton from '../buttons/CancelButton';

export default function SelectedPostPage({ match, history }) {
  const { selectedPost,
    setFetchReqFlag,
    setSelectedPost,
    setInputValue,
  } = useContext(PostsContext);

  const onEditBtnClick = (e) => {
    e.preventDefault();
    setInputValue(selectedPost.content);
    history.push(`${match.url}/editing`);
  }

  const onDelBtnClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_URL}posts/${selectedPost.id}`, 
        { method: 'DELETE' });      

      if (response.ok) {
        setFetchReqFlag((prev) => !prev);
        setSelectedPost('');
        history.push('/');
      }
    } catch (e) {
      console.log(e.message);
    }
  }
  
  const onCancelBtnClick = (e) => {
    e.preventDefault();
    setInputValue('');
    history.goBack();
  }

  return (
    <>
      <header className="page__title new-post_card_header">
        <h3>Просмотр поста</h3>
        <CancelButton 
            className='new-post-page_btn'
            onBtnClick={onCancelBtnClick}/>
      </header>

      <PostItem post={selectedPost} />
      <div className="btn_row">
         <ApplyButton 
            name='Изменить' 
            className='new-post-page_btn'
            onBtnClick={onEditBtnClick}/>

          <ApplyButton 
            name='Удалить' 
            className='new-post-page_btn'
            onBtnClick={onDelBtnClick}/>
      </div>
    </>
  );
}