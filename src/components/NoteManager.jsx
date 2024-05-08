import { useState } from 'react';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from './NoteDisplay';
import Sidebar from './Sidebar';

const NoteManager = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  }); // Notes de test

  const [selectedNote, setSelectedNote] = useState(null);

  const saveNote = (text) => {
    localStorage.setItem('blocNote', text);
  };

  const addNote = (note) => {
    const newNotes = [...notes, note];
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
  };

  const onSelectNote = (note) => {
    console.log("Sélection de la note :", note);
    setSelectedNote({
      id: note.id,
      title: note.title,
      content: note.content
    });
  };

  const editNote = (note) => {
    console.log('Note modifiée', note);
    setSelectedNote(note); // Mettre à jour la note sélectionnée
  };

  const onDeleteNote = (note) => {
    const updatedNotes = notes.filter(n => n.id !== note.id);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const addNewNote = () => {
    setSelectedNote({ id: null, title: '', content: '' });
  };

  console.log(notes); // Added this line to log notes for debugging
  return (
    <div className='note-manager'>
      <Sidebar notes={notes} onSelectNote={onSelectNote} editNote={editNote} onDeleteNote={onDeleteNote} onAddNote={addNewNote} />
      <div>
        <NoteDisplay selectedNote={selectedNote} />
        <MarkdownInput onSave={saveNote} onAddNote={addNote} onSelectNote={onSelectNote} selectedNote={selectedNote} />
      </div>
    </div>
  );
};

export default NoteManager;

