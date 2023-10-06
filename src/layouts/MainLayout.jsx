import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="relative max-w-6xl mx-4 lg:mx-auto">
      <Outlet />
    </div>
  );
}

export default MainLayout;
