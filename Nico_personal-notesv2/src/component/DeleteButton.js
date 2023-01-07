import React from 'react';
 
function DeleteButton({ id, onDelete }) {
  return (
    <div className='control'>
      <button className='note-item__delete' onClick={() => onDelete(id)}>Delete</button>
    </div>
    )
}
 
export default DeleteButton;