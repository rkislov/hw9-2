import ApplyButton from '../buttons/ApplyButton';

export default function NotFoundPage({ history }) {  

  const onBackClick = () => {
    history.goBack();
  }

  return (
    <>
      <div>
        Такой страницы не существует
      </div>
      
      <ApplyButton 
        className='start-page_btn'
        name='Назад'
        onBtnClick={onBackClick}
      />
    </>
  );
}