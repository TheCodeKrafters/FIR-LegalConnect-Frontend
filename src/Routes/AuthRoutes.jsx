import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Authenticate/Login";
import App from "../App";
import LandingPage from "../Pages/LandingPage/LandingPage";
import SignUp from "../Pages/Authenticate/signup";
import EmergencyHelpline from "../Pages/HelpLine/HelpLine";


// function AuthRoutes() {
//   const isAuthenticated = Boolean(localStorage.getItem("user")); // Replace 'user' with your key.

//   if (isAuthenticated) {
//     return <Navigate to="/" />; // Redirect to home if already logged in
//   }

//   return <Outlet />;
// }

const authRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/helpline",
        element: <EmergencyHelpline />
      },
    ],
  },
]);
export default authRoutes;
