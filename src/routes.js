import Layout from "components/Layout";
import PostList from "pages/PostList";
import EditPost from "pages/EditPost";
import AddPost from "pages/AddPost";
import ErrorPage from "components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PostList />,
      },
      {
        path: "/post/:postId",
        element: <EditPost />,
      },
      {
        path: "/post/add",
        element: <AddPost />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
