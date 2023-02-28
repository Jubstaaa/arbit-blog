import { Link } from "react-router-dom";

function PostItem({ post }) {
  return (
    <div className="col-span-1 row-span-1 space-y-3 p-5">
      <Link to={`post/${post.id}`}>
        <h2 className="text-xl font-bold">{post.title}</h2>
      </Link>
      <p className="text-gray-400">{post.body}</p>
    </div>
  );
}

export default PostItem;
