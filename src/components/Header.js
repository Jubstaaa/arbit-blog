import { Link } from "react-router-dom";
import { HiBell, HiViewGrid, HiOutlinePlusSm } from "react-icons/hi";
import { useSelector } from "react-redux";

import Button from "components/FormElements/Button";

function Header() {
  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);
  return (
    <div className="w-full bg-white shadow-sm flex justify-between items-center px-5 py-3">
      <Link to="/">
        <div className="flex justify-start items-center space-x-4">
          <img
            className="w-12 h-12"
            src="/images/logo.png"
            alt="Arbit Blog Logo"
          />
          <h1 className="hidden sm:block text-2xl font-semibold">Arbit Blog</h1>
        </div>
      </Link>
      <div className="flex justify-end items-center space-x-4">
        <Button
          blue
          to="/post/add"
          icon={<HiOutlinePlusSm className="w-6 h-6" />}
        >
          New Post
        </Button>
        <Link className="relative text-xl font-medium" to="/">
          Posts
          <div className="absolute flex justify-center items-center text-xs text-green-600 w-5 h-5 -m-1 bg-teal-100 rounded-full translate-x-1/2 -translate-y-1/2 top-0 right-0 ">
            {posts?.length}
          </div>
        </Link>
        <HiBell className="h-7 w-7 hidden sm:block text-gray-500" />
        <HiViewGrid className="h-7 w-7 hidden sm:block text-gray-500" />
        <img
          className="w-10 h-10 hidden sm:block rounded-full"
          src={user.photoUrl}
          alt="İlker Balcılar"
        />
      </div>
    </div>
  );
}

export default Header;
