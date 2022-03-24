//export default body javascript
import Note from "./Note.js";

const Notes = (props) => {
  console.log(props.notes);
  return (
    <>
      {props.notes.map((note) => (
        <Note
          key={note.id}
          content={note.content}
          title={note.title}
          onDelete={props.onDelete}
        />
      ))}
    </>
  );
};

export default Notes;
