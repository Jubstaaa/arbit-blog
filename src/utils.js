import axios from "axios";
import { toast } from "react-hot-toast";
import { addPost, getPosts, updatePost, deletePost } from "./store/posts";

export const getCommentsById = async (postId, setComments) => {
  await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((res) => {
      setComments(res.data);
    })
    .catch((err) => toast.error("Comments could not be set"));
};

export const addPostRedux = async (user, values, dispatch, navigate) => {
  const loading = toast.loading("Post is adding");
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: values.title,
      body: values.body,
      userId: user.id,
    })
    .then(function (response) {
      dispatch(addPost(response.data));
      toast.success("Post added", {
        id: loading,
      });
      navigate("/");
    })
    .catch(function (error) {
      toast.error("Post could not be added", {
        id: loading,
      });
    });
};

export const getPostsRedux = async (user, dispatch, setIsLoading) => {
  await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      dispatch(getPosts(res.data.filter((post) => post.userId === user.id)));
    })
    .catch((err) => toast.error("Posts could not be set"));
  setIsLoading(false);
};

export const updatePostRedux = async (post, user, values, dispatch) => {
  const loading = toast.loading("Post is updating");
  axios
    .put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      userId: user.id,
      id: post.id,
      title: values.title,
      body: values.body,
    })
    .then(function (response) {
      dispatch(updatePost(response.data));
      toast.success("Post updated", {
        id: loading,
      });
    })
    .catch(function (error) {
      toast.error("Post could not be updated", {
        id: loading,
      });
    });
};

export const deletePostRedux = async (post, dispatch, navigate) => {
  const loading = toast.loading("Post is deleting");
  await axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
    .then(function (response) {
      navigate("/");
      dispatch(deletePost(post.id));
      toast.success("Post deleted", {
        id: loading,
      });
    })
    .catch(function (error) {
      toast.error("Post could not be deleted", {
        id: loading,
      });
    });
};
