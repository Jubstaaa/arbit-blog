import { useState, useEffect } from "react";

import { getCommentsById } from "utils";
import CommentItem from "./CommentItem";
import CommentsLoading from "./CommentsLoading";

function CommentList({ postId }) {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    getCommentsById(postId, setComments);
  }, []);

  if (!comments) {
    return <CommentsLoading />;
  } else if (comments.length === 0) {
    return <h2>No Comments Found!</h2>;
  } else {
    return (
      <>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </>
    );
  }
}

export default CommentList;
