export default function CancelButton(props) {
    const { className, onBtnClick } = props;
  
    return (
      <button  
        className={`btn cancel-btn ${className}`}
        onClick={onBtnClick}
      >
        <span className='material-icon'>close</span>
      </button>
    );
  }