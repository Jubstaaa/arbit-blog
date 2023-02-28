import { useSelector } from "react-redux";

import PostItem from "./components/PostItem";

function PostList() {
  const { posts } = useSelector((state) => state.posts);
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-12">
      {posts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
