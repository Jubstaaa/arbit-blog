import CommentItem from "./CommentItem";

function CommentList({ comments }) {
  return (
    <div className="w-full flex flex-col justify-center items-start px-5 space-y-3">
      <h2 className="text-2xl font-semibold">Comments</h2>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
