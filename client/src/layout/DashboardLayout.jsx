import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

//why we use Outlet here?
// The Outlet component is used to render the child routes defined in the App component.
// It acts as a placeholder where the content of the child routes will be displayed within the Dashboard
// Layout. When a user navigates to a specific route like "/market-view", the MarketView component will be rendered in place of the Outlet.
// This allows for a clean separation of layout and content, enabling the reuse of the DashboardLayout for different views.
// The Outlet component is essential for rendering nested routes in React Router.
// The Outlet component is used to render the child routes defined in the App component.
// It acts as a placeholder where the content of the child routes will be displayed within the Dashboard Layout.
// When a user navigates to a specific route like "/market-view", the MarketView component will be rendered in place of the Outlet.
// This allows for a clean separation of layout and content, enabling the reuse of the DashboardLayout for different views.
// The Outlet component is essential for rendering nested routes in React Router.
// The Outlet component is used to render the child routes defined in the App component.
// It acts as a placeholder where the content of the child routes will be displayed within the Dashboard Layout.