import React from 'react';
import NoteItem from './NoteItem';
 
function NoteList({ notes, onDelete }) {
 if (notes.length) {
  return (
   <div className="note-list">
     {
       notes.map((note) => (
         <NoteItem key={note.id} 
         id={note.id}
         onDelete={onDelete}
         {...note} />
       ))
     }
      <style>{`
        .note-list{
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      `}
      </style>
   </div>
  );
 }
 else {
  return <p className='note-list-null'>
    Tidak ada Catatan!
  </p>;
 }
}
 
export default NoteList;