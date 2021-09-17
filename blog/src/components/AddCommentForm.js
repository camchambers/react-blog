import { json } from "express/lib/response";
import React, { useState } from "react";

const AddCommentForm = () => {
  const [username, setUsername] = userState("");
  const [commentText, setCommentText] = useState("");

  return (
    <div id="add-comment-form">
      <label>
        Name
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Comment:
        <textarea
          rows="4"
          cols="50"
          value={commentText}
          onchange={(event) => setCommentText(event.target.value)}
        />
      </label>
      <button>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
