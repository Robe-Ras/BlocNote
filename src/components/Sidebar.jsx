import { ListGroup, Button } from 'react-bootstrap';
import { PencilSquare, Trash, PlusCircle } from 'react-bootstrap-icons';
import PropTypes from 'prop-types';

const Sidebar = ({ notes, onSelectNote, editNote, onDeleteNote, }) => {
  return (
    <div className="Sidebar">
      <Button variant="link" className="text-success hover:bg-light text-decoration-none" onClick={() => window.location.reload()}><PlusCircle /></Button>
      <ListGroup>
        {notes.map(note => (
          <ListGroup.Item action onClick={() => onSelectNote(note)} key={note.id} className="text-primary">
            <div className="label-container">
              {note.title}
              <div className="icon-container">
                <Button variant="link" className="text-secondary hover:bg-light text-decoration-none" onClick={(e) => { e.stopPropagation(); editNote(note); }}><PencilSquare /></Button>
                <Button variant="link" className="text-danger hover:bg-light text-decoration-none" onClick={(e) => { e.stopPropagation(); onDeleteNote(note); }}><Trash /></Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

Sidebar.propTypes = {
  notes: PropTypes.array.isRequired,
  onSelectNote: PropTypes.func.isRequired,
  editNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  addNewNote: PropTypes.func.isRequired,
};

export default Sidebar;

