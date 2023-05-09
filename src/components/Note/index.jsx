import React from "react";

import style from './Note.module.scss'

function Note({ note, mode, onSave, onCancelEdit }) {
    const [title, setTitle] = React.useState(note.title);
    const [content, setContent] = React.useState(note.content);
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleContentChange = (e) => {
      setContent(e.target.value);
    };
  
    const handleSaveClick = () => {
      onSave(title, content);
    };
  
    const handleCancelClick = () => {
      onCancelEdit();
    };
  
    return (
      <div className={style.note}>
        {
            mode === 'view' ? 
        (
        <div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
        ) : (
          <div className={style.edit}>
            <input type="text" value={title} onChange={handleTitleChange} />
            <textarea value={content} onChange={handleContentChange} />
            <button onClick={handleSaveClick}>Зберегти</button>
            <button onClick={handleCancelClick}>Скасувати</button>
          </div>
        )
      } 
  </div>
  );
    };

export default Note;