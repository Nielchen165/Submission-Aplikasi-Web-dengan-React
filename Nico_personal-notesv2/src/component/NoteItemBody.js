import React from 'react';
import moment from 'moment'
const dateTime = new Date()
 
function NoteItemBody({ title, body }) {
 return (
   <div className="note-item__container">
     <h3 className="note-item__title">{title}</h3>
     <p className="note-item__time">{moment(dateTime).format('D MMM YYYY')}</p>
     <p className="note-item__body">{body}</p>
   </div>
 );
}
 
export default NoteItemBody;