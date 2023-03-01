import {
  HiOutlineArrowNarrowLeft,
  HiOutlinePlusSm,
  HiTrash,
  HiPencil,
} from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet-async";

import Input from "components/FormElements/Input";
import Button from "components/FormElements/Button";
import { deletePostRedux, addPostRedux, updatePostRedux } from "utils";
import CommentList from "pages/EditPost/components/CommentList";
import ErrorPage from "components/ErrorPage";
import { PostSchema } from "validation";
import { toast } from "react-hot-toast";

function PostForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { postId } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  const post = posts?.find((post) => post.id == postId);
  const isEditMode = postId ? true : false;

  const goBack = () => {
    navigate(-1);
  };

  const deletePostHandler = async () => {
    await deletePostRedux(post, dispatch, navigate);
  };

  const handleSubmit = async (e, values, errors) => {
    e.preventDefault();
    if (errors.title || errors.body) {
      toast.error("Please fill in the required fields");
    } else if (isEditMode) {
      await updatePostRedux(post, user, values, dispatch);
    } else {
      await addPostRedux(user, values, dispatch, navigate);
    }
  };

  if (!post && isEditMode) {
    return <ErrorPage />;
  } else {
    return (
      <>
        <Helmet>
          <title>{isEditMode ? post.title : "New Post"}</title>
        </Helmet>

        <div className="flex flex-col lg:flex-row justify-start items-start w-full space-x-0 lg:space-x-4 space-y-4 lg:space-y-0">
          <div className="flex justify-start items-start w-full space-x-0 lg:space-x-4">
            <div
              className="h-full hidden lg:block bg-gray-200 p-2 rounded-full cursor-pointer"
              onClick={goBack}
            >
              <HiOutlineArrowNarrowLeft className="w-6 h-6" />
            </div>
            <div className="w-full space-y-5">
              <div className="flex justify-between items-center ">
                <h2 className="text-2xl font-semibold">
                  {!isEditMode ? "New Post" : "Post"}
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
                validationSchema={PostSchema}
                initialValues={{
                  title: post?.title,
                  body: post?.body,
                }}
              >
                {({ values, errors }) => (
                  <Form onSubmit={(e) => handleSubmit(e, values, errors)}>
                    <div className="w-full flex flex-col justify-start items-start space-y-2">
                      <Input
                        label="Title"
                        name="title"
                        type="textarea"
                        className="text-xl font-bold"
                      />
                      <Input label="Detail" name="body" type="textarea" />

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
                )}
              </Formik>
            </div>
          </div>
          {isEditMode && (
            <div className="w-full flex flex-col justify-center items-start px-0 lg:px-5 space-y-3">
              <h2 className="text-2xl font-semibold">Comments</h2>
              <CommentList postId={post.id} />
            </div>
          )}
        </div>
      </>
    );
  }
}

export default PostForm;
