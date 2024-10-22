import './App.css';
import React, { useState, useContext } from 'react';
import { ThemeContext } from './themeContext';
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module


export const StickyNotes = () => {
    // your code from App.tsx
  const [favorites, setFavorites] = useState<string[]>([]);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [notes, setNotes] = useState(dummyNotesList);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const toggleFavorite = (noteTitle: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(noteTitle)
        ? prevFavorites.filter((title) => title !== noteTitle)
        : [...prevFavorites, noteTitle]
    );
  };

  
  const initialNote = {
     id: -1,
     title: "",
     content: "",
     label: Label.other,
   };
  const [createNote, setCreateNote] = useState(initialNote);

   // Function to create a note
  const createNoteHandler = (event: React.FormEvent) => {
     event.preventDefault();
     console.log("title: ", createNote.title);
     console.log("content: ", createNote.content);
     createNote.id = notes.length + 1;
     setNotes([createNote, ...notes]);
     setCreateNote(initialNote);
  };

   // Function to update a note
   const updateNoteHandler = (id: number, field: string, value: string) => {
    const updatedNotes = notes.map(note => 
      note.id === id ? { ...note, [field]: value } : note
    );
    setNotes(updatedNotes);
  };

  // Function to delete a note
  const deleteNoteHandler = (id: number) => {
    const noteToDelete = notes.find((note) => note.id === id);
    
    if (noteToDelete) {
      setFavorites(favorites.filter((title) => title !== noteToDelete.title));
    }
  
    setNotes(notes.filter((note) => note.id !== id));
  };
  

  return (
    <div className="app-container" style={{ backgroundColor: theme.background, color: theme.foreground }}>
      <form className="note-form" onSubmit={createNoteHandler}>
        <div>
          <input placeholder="Note Title" value={createNote.title} onChange={(event) =>
          setCreateNote({ ...createNote, title: event.target.value })}
        	required>
          </input>
        </div>
        <div>
          <textarea placeholder="Note Content" value={createNote.content} onChange={(event) =>
          setCreateNote({ ...createNote, content: event.target.value })}
        	required>
          </textarea>
        </div>
        <div>
          <select name="label" id="label" value={createNote.label} onChange={(event) =>
         	setCreateNote({ ...createNote, label: event.target.value as Label })}
       	  required>
           <option value={Label.personal}>Personal</option>
       	   <option value={Label.study}>Study</option>
       	   <option value={Label.work}>Work</option>
       	   <option value={Label.other}>Other</option>
          </select>
        </div>
        <div>
          <button type="submit">Create Note</button>
        </div>
        <div>
          <button type="button" onClick={toggleTheme}>
            Toggle Theme
          </button>
        </div>
      </form>
            
      <div className="notes-grid">
        {notes.map((note) => (
          <div
            key={note.id}
            className="note-item"
            style={{ backgroundColor: theme.background, color: theme.foreground }}
            data-testid={`note-${note.id}`}
          >
            <div className="notes-header">
              <span
                className={`favorite-icon ${favorites.includes(note.title) ? 'favorited' : ''}`}
                onClick={() => toggleFavorite(note.title)}
              >
                {favorites.includes(note.title) ? '❤️' : '🤍'}
              </span>
              <button data-testid={`delete-button-${note.id}`} onClick={() => deleteNoteHandler(note.id)}>X</button>
            </div>
            <h2
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => updateNoteHandler(note.id, 'title', e.currentTarget.textContent || '')}
            >
              {note.title}
            </h2>
            <p
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => updateNoteHandler(note.id, 'content', e.currentTarget.textContent || '')}
            >
              {note.content}
            </p>
            <select
              value={note.label}
              onChange={(e) => updateNoteHandler(note.id, 'label', e.target.value as Label)}
            >
              <option value={Label.personal}>Personal</option>
              <option value={Label.study}>Study</option>
              <option value={Label.work}>Work</option>
              <option value={Label.other}>Other</option>
            </select>
          </div>
        ))}
      </div>

      <div className="favorite-notes">
        <h3>List of favorites:</h3>
        <ul>
          {favorites.length > 0 ? (
            favorites.map((favorite, index) => <li key={index}>{favorite}</li>)
          ) : (
            <li>No favorite notes yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
    }