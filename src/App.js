import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./components/Loading";
import { Toaster } from "react-hot-toast";
import { getPostsRedux } from "./utils";

function App() {
  const showRoutes = useRoutes(routes);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPostsRedux(user, dispatch, setIsLoading);
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <>
        <Toaster />
        {showRoutes}
      </>
    );
  }
}

export default App;
