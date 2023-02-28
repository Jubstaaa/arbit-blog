import { useEffect, useState } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlinePlusSm,
  HiTrash,
  HiPencil,
} from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";

import Input from "components/FormElements/Input";
import Button from "components/FormElements/Button";
import {
  getCommentsById,
  deletePostRedux,
  addPostRedux,
  updatePostRedux,
} from "utils";
import CommentList from "pages/EditPost/components/CommentList";
import ErrorPage from "components/ErrorPage";

function PostForm() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const post = posts?.find((post) => post.id == postId);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const isEditMode = postId ? true : false;

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    isEditMode && getCommentsById(post?.id, setComments);
  }, [postId]);

  const deletePostHandler = async () => {
    await deletePostRedux(post, dispatch, navigate);
  };

  const handleSubmit = async (values) => {
    if (isEditMode) {
      await updatePostRedux(post, user, values, dispatch);
    } else {
      await addPostRedux(user, values, dispatch, navigate);
    }
  };

  if (!post && isEditMode) {
    return <ErrorPage />;
  } else {
    return (
      <div className="flex justify-start items-start w-full space-x-4">
        <div
          className="h-full bg-gray-200 p-2 rounded-full cursor-pointer"
          onClick={goBack}
        >
          <HiOutlineArrowNarrowLeft className="w-6 h-6" />
        </div>
        <div className="w-full space-y-5">
          <div className="flex justify-between items-center ">
            <h2 className="text-2xl font-semibold">
              {!isEditMode ? "New Post" : "Posts"}
            </h2>
            {isEditMode && (
              <Button
                blue
                to="/post/add"
                icon={<HiOutlinePlusSm className="w-6 h-6" />}
              >
                New Post
              </Button>
            )}
          </div>
          <Formik
            initialValues={{
              title: post?.title,
              body: post?.body,
            }}
            onSubmit={async (values) => {
              handleSubmit(values);
            }}
          >
            <Form>
              <div className="w-full flex flex-col justify-start items-start space-y-2">
                <Input
                  label="Title"
                  name="title"
                  type="textarea"
                  className="text-xl font-bold"
                  required
                />
                <Input
                  label="Detail"
                  name="body"
                  type="textarea"
                  disabled={isEditMode}
                  required
                />

                <div className="flex justify-end items-center w-full space-x-9">
                  {isEditMode && (
                    <Button
                      red
                      type="button"
                      onClick={deletePostHandler}
                      icon={<HiTrash className="w-6 h-6" />}
                    >
                      Delete
                    </Button>
                  )}
                  <Button
                    blue
                    type="submit"
                    icon={<HiPencil className="w-6 h-6" />}
                  >
                    {!isEditMode ? "Create" : "Update"}
                  </Button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
        {isEditMode && <CommentList comments={comments} />}
      </div>
    );
  }
}

export default PostForm;
