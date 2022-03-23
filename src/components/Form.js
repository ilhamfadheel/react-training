//export default body javascript
import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Notes from "./Notes";

const Form = () => {
  const [title, setTitle] = useState(); // title state
  const [content, setContent] = useState(); //content state
  const [notes, setNotes] = useState([]); // notes state

  useEffect(() => {
    // storing input name
    localStorage.setItem("title", JSON.stringify(title));
    localStorage.setItem("content", JSON.stringify(content));
  }, [title, content]);

  // Fetching from Local Storage
  const getNotes = JSON.parse(localStorage.getItem("notes"));

  useEffect(() => {
    if (getNotes == null) {
      setNotes([]);
    } else {
      setNotes(getNotes);
    }
    // eslint-disable-next-line
  }, []);

  // Add Task
  const addNote = (note) => {
    const id = uuidv4();
    const newNote = { id, ...note };

    setNotes([...notes, newNote]);

    localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
  };

  // Delete Task
  const deleteNote = (id) => {
    const deleteNote = notes.filter((note) => note.id !== id);

    setNotes(deleteNote);

    localStorage.setItem("notes", JSON.stringify(deleteNote));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title && !content) {
      alert("Please enter title and content");
    } else if (!title && content) {
      alert("Please enter title");
    } else if (title && !content) {
      alert("Please enter content");
    } else {
      addNote({ title, content });
    }

    setTitle("");
    setContent("");
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <input
            type={"text"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={"Title"}
            aria-label={"Title"}
          />
          <input
            type={"text"}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={"Content"}
            aria-label={"Content"}
            style={{ paddingBottom: "150px" }}
          />
          <button type={"submit"} value="Submit">
            Submit
          </button>
        </form>
      </div>
      <div className="notes">
        {/* Displaying of Tasks */}
        {notes.length > 0 ? (
          <Notes notes={notes} onDelete={deleteNote} />
        ) : (
          <div
            style={{
              margin: "15vh auto",
            }}
          ></div>
          // <Note></Note>
        )}
      </div>
      <style>
        {`
        .form-container {
          width: 80%;
          font-family: sans-serif;
          padding-bottom: 20px;
          border-bottom: 1px solid #ccc;
        }
        form{
          display: flex;
          flex-direction: column;
        }
        .notes {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          background-image:
          linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 20%), url(https://i.imgur.com/TYs43eJ.jpg);
        }
            input {
                width: 100%;
                padding: 12px 20px;
                margin: 8px 0;
                box-sizing: border-box;
                border: none;
                border-bottom: 2px solid #ccc;
                background-color: #f8f8f8;
                border-radius: 4px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }

            input:first-child {
                width: 50%;
            }

            input:focus {
                outline: none;
                border-bottom: 2px solid #000;
                background-color: #fff;
            }

            button {
                width: 100%;
                background-color: #4CAF50;
                color: white;
                padding: 14px 20px;
                margin: 8px 0;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                border-bottom: 2px solid #000;
            }

            button:hover {
                background-color: #45a049;
            }
            `}
      </style>
    </>
  );
};

export default Form;
