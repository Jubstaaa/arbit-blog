function CommentItem({ comment }) {
  return (
    <div key={comment.id} className="space-y-2">
      <h3 className="text-xl font-semibold">{comment.name}</h3>
      <p className="text-gray-400">{comment.body}</p>
    </div>
  );
}

export default CommentItem;
