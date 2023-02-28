import { Outlet } from "react-router-dom";

import Header from "components/Header";

function Layout() {
  return (
    <div className="w-screen h-screen px-11 py-7 bg-neutral-100 space-y-4">
      <Header />
      <div className="w-full h-auto bg-white p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
