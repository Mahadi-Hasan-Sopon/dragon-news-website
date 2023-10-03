

import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="relative max-w-6xl mx-4 md:mx-10 lg:mx-auto">
      <Outlet />
    </div>
  );
}

export default MainLayout;
