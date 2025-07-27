// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import { useSelector } from "react-redux";

// const DashboardLayout = () => {


//   const user=useSelector((store) => store.user);


//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import Login from "../components/login"; // or your SignupPage component
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const user = useSelector((store) => store.user);

  return (
    <div className="flex h-screen">
      {user ? (
        <>
          <Sidebar />
          <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
            <Outlet />
          </div>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-gray-100">
          <Login /> {/* Or show <Signup /> if that’s what you want */}
        </div>
      )}
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