import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import data from "./data.json";
import { Comment } from "./components/Comment.js";
// import AddReply from './app.js';
import AddComments from "./components/AddComments";

export const commentsContext = createContext();

function AddComment(props) {
  const [comments, setComments] = useState(data.comments);

  return (
    <commentsContext.Provider value={[comments, setComments]}>
      <div className="max-w-3xl m-auto ease-in-out">
        {comments.map((comment) => {
          return <Comment key={comment.id} dataCom={comment} />;
        })}

        <AddComments newComments />
      </div>
    </commentsContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AddComment />);
