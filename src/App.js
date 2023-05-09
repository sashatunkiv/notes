import React from 'react';
import macro from 'macro-css';
import './App.scss';

import Header from './components/Header';
import Note from './components/Note';


function App() 
{
  /*початкові дані sideleft */
  const [notes, setNotes] = React.useState([
    { id: 1, title: 'Розпорядок дня поїздки', content: 'Це була чудова подорож в незабутню країну , я відвідав всі місця якф запланував .' },
    { id: 2, title: 'Дочитати книгу', content: 'сьогодні я дочитаю останніх 20 сторінок книжки боротьба за вогонь' },
    { id: 3, title: 'Написати сайт', content: 'Розробити два компоненти сайту ecommerce' }
  ]);
  const [selectedNote, setSelectedNote] = React.useState(null);
  const [mode, setMode] = React.useState('view');

                    /*  функції header додавання видалення та редагування  */

  const handleAddNote = () => {
    const newNote = {
        id: notes.length + 1,
        title: 'Нові нотатки',
        content: 'Додати техст до своїх нотаток'
    }
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

                       /*  кінець функцій header  */


                       /*   функція slideright */
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
                   /*  кінець функції slideright */



                   /*   функція slideleft */

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setMode('view');
  };



  return (
    <div className='Wrapper'>
      <Header
      handleAddNote={handleAddNote}
      handleDeleteNote={handleDeleteNote}
      handleEditNote={handleEditNote}
      />
      <div className='content d-flex'>
        <div className='slideleft'>
            <ul>
            {notes.map(note => (
              <li 
              key={note.id} 
              onClick={() => handleNoteClick(note)}>
                {note.title}
              </li>
            ))}
          </ul>
        </div>
        <div className='sideright'>
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

export default App;