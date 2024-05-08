import PropTypes from 'prop-types';
import Showdown from 'showdown';

const NoteDisplay = ({ selectedNote }) => {
  if (!selectedNote || selectedNote.id === null) {
    return <div>Aucune note sélectionnée</div>;
  }

  const converter = new Showdown.Converter();
  const content = selectedNote ? converter.makeHtml(selectedNote.content) : '';

  return (
    <div className="note-display-container">
      <h3 className="centered-content">{selectedNote.title}</h3>
      <div className="showdown-content centered-content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

NoteDisplay.propTypes = {
  selectedNote: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })
};

export default NoteDisplay;
