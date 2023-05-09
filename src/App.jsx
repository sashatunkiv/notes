


import React, { useState } from 'react';
import './App.scss';

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Нотатка 1', content: 'Тут щось написано...' },
    { id: 2, title: 'Нотатка 2', content: 'Тут щось ще написано...' },
    { id: 3, title: 'Нотатка 3', content: 'Ще більше тексту...' }
  ]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [mode, setMode] = useState('view');

  const handleAddNote = () => {
    const newNote = {
      id: notes.length + 1,
      title: 'Нова нотатка',
      content: 'Тут можна щось написати...'
    };
    setNotes([...notes, newNote]);
    setSelectedNote(newNote);
    setMode('edit');
  };

  const handleDeleteNote = () => {
    if (selectedNote) {
      const newNotes = notes.filter(note => note.id !== selectedNote.id);
      setNotes(newNotes);
      setSelectedNote(null);
      setMode('view');
    }
  };

  const handleEditNote = () => {
    setMode('edit');
  };


  //start1

  
  const handleSaveNote = (title, content) => {
    const updatedNote = { ...selectedNote, title, content };
    const updatedNotes = notes.map(note =>
      note.id === selectedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    setSelectedNote(updatedNote);
    setMode('view');
  };

  const handleCancelEdit = () => {
    setMode('view');
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setMode('view');
  };

  return (
    <div className="App">
      <header>
        <button onClick={handleAddNote}>Додати нотатку</button>
        <button onClick={handleDeleteNote}>Видалити нотатку</button>
        <button onClick={handleEditNote}>Редагувати нотатку</button>
      </header>
      <div className="content">
        <div className="left">
          <ul>
            {notes.map(note => (
              <li key={note.id} onClick={() => handleNoteClick(note)}>
                {note.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          {selectedNote && (
            <Note
              note={selectedNote}
              mode={mode}
              onSave={handleSaveNote}
              onCancelEdit={handleCancelEdit}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function Note({ note, mode, onSave, onCancelEdit }) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

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
    <div className="note">
      {mode === 'view' ? (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  ) : (
    <div>
      <input type="text" value={title} onChange={handleTitleChange} />
      <textarea value={content} onChange={handleContentChange} />
      <button onClick={handleSaveClick}>Зберегти</button>
      <button onClick={handleCancelClick}>Скасувати</button>
    </div>
  )}
</div>
);
  }

  export default App;