import { FaTimes } from "react-icons/fa";

const Note = ({ key, title, content, onDelete }) => {
  return (
    <>
      <div className="task">
        <div className="taskName">
          <h1
            style={{
              margin: "0",
            }}
          >
            {" "}
            {title}{" "}
          </h1>
          {/* eslint-disable-next-line */}
          {/* <a>
            <FaTimes onClick={() => onDelete(key)} className="delIcon" />
          </a> */}
        </div>
        <div className="taskContent">
          <p>{content}</p>
        </div>
      </div>
      <style>
        {`
        .taskName{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          border-bottom: 1px solid #ccc;
          margin-bottom: 10px;
          margin-top: 0;
        }
        .task {
            display: flex;
            flex-direction: column;
            border: 1px solid #ccc;
            padding: 10px 30px;
            background-color: #f8f8f8;
            border-radius: 4px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin: 10px 10px;
            }
        `}
      </style>
    </>
  );
};

export default Note;
