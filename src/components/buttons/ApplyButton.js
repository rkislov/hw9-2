export default function ApplyButton(props) {
    const { className, name,  onBtnClick } = props;
  
    return (
      <button  
            className={`btn apply-btn ${className}`}
            onClick={onBtnClick}
      >
        {name}
      </button>
    );
  }