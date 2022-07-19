import { useContext } from 'react';
import PostsContext from '../../contexts/PostsContext';

export default function PostInput(props) {
  const { inputValue, setInputValue } = useContext(PostsContext);
  const { className } = props;

  const handleInputChange = (e) => {
    e.target.style.height = `${e.target.scrollHeight}px`;
    setInputValue(e.target.value);
  }

  return (
    <textarea
      placeholder="New text here..." 
      name='start-page_input' 
      className={`post_input ${className}`}
      onChange={handleInputChange}
      value={inputValue}></textarea>
  )
}