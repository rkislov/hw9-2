export default function EditableItem(props) {
    const { className } = props;
    
    return (
      <div className={className}>
        {props.children}
      </div>
    )
  }
  