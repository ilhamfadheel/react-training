import { FaTimes } from "react-icons/fa";

const Note = ({ key, title, content, onDelete }) => {
  return (
    <>
      <div className="task">
        <div>
          <p
            className="taskName"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottom: "1px solid #ccc",
              marginBottom: "10px",
              marginTop: "0",
            }}
          >
            <h1> {title} </h1>
            {/* {note.title} */}
            <div>
              <p>
                <FaTimes onClick={() => onDelete(key)} className="delIcon" />
              </p>
            </div>
          </p>
          <p className="taskContent">
            {content}
            {/* {note.content} */}
          </p>
        </div>
      </div>
      <style>
        {`
            .task {
                display: flex;
                flex-direction: row;
                border: 1px solid #ccc;
                margin: 10px;
                padding: 10px 20px;
                width: 20%;
                background-color: #f8f8f8;
                border-radius: 4px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

            }
        `}
      </style>
    </>
  );
};

export default Note;
