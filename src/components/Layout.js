import { Outlet } from "react-router-dom";

import Header from "components/Header";

function Layout() {
  return (
    <div className="w-full h-full px-6 sm:px-11 py-7 bg-transparent space-y-4">
      <Header />
      <div className="w-full h-auto bg-white p-4 sm:p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
