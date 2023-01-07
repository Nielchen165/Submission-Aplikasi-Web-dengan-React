import React from 'react';
 
class NoteInput extends React.Component {
 constructor(props) {
   super(props);
 
   // inisialisasi state
   this.state = {
     title: '',
     body: '',
   }
 
   this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
   this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
   this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
 }
 
 onTitleChangeEventHandler(event) {
   this.setState(() => {
     return {
       title: event.target.value,
     }
   });
 }
 
 onBodyChangeEventHandler(event) {
   this.setState(() => {
     return {
       body: event.target.value,
     }
   });
 }
 
 onSubmitEventHandler(event) {
   event.preventDefault();
   this.props.addNote(this.state);
 }

 render() {
   return (
     <form className='note-input' onSubmit={this.onSubmitEventHandler}>
       <input className='note-input__title' maxLength={50} type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
       <input className='note-input__body' type="text" placeholder="Catatan.." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
       <button type="submit">Tambah</button>
     </form>
   )
 }
}
 
export default NoteInput;