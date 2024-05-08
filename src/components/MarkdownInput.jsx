import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MarkdownInput = ({ selectedNote }) => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [currentNote, setCurrentNote] = useState(selectedNote || { title: '', content: '' });

  useEffect(() => {
    if (selectedNote && selectedNote.id === null) {
      // Réinitialiser le formulaire ici
      setCurrentNote({ title: '', content: '' });
    }
  }, [selectedNote]);

  useEffect(() => {
    if (selectedNote && selectedNote.id) {
      setCurrentNote({
        id: selectedNote.id,
        title: selectedNote.title,
        content: selectedNote.content
      });
      console.log('Note chargée pour modification:', selectedNote);
    }
  }, [selectedNote]);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleChange = (event) => {
    setCurrentNote(currentNote => ({ ...currentNote, content: event.target.value }));
  };

  const handleTitleChange = (event) => {
    setCurrentNote(currentNote => ({ ...currentNote, title: event.target.value }));
  };

  const handleSave = () => {
    if (!selectedNote || selectedNote.id === null) {
      // Logique pour ajouter une nouvelle note
      const newNote = { ...currentNote, id: Date.now() };
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
      localStorage.setItem('notes', JSON.stringify(newNotes));
    } else {
      // Logique pour modifier une note existante
      const updatedNotes = notes.map(note => note.id === selectedNote.id ? { ...note, title: currentNote.title, content: currentNote.content } : note);
      setNotes(updatedNotes);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }
    setCurrentNote({ title: '', content: '' }); // Réinitialiser après sauvegarde
  };

  return (
    <div className="markdown-input-container">
      <Form>
        <Form.Group controlId="noteTitle">
          <Form.Label>Titre</Form.Label>
          <Form.Control type="text" value={currentNote.title} onChange={handleTitleChange} />
        </Form.Group>
        <Form.Group controlId="noteContent">
          <Form.Label>Texte</Form.Label>
          <Form.Control as="textarea" rows={3} value={currentNote.content} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" onClick={handleSave}>Enregistrer</Button>
      </Form>
    </div>
  );
};

MarkdownInput.propTypes = {
  selectedNote: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string
  })
};

export default MarkdownInput;

