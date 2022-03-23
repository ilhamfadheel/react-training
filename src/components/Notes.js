//export default body javascript
import Note from "./Note.js";

const Notes = (notes, onDelete) => {
  console.log(notes);
  return (
    <>
      {notes.map((note) => (
        <Note
          key={note.id}
          content={note.content}
          title={note.title}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default Notes;
