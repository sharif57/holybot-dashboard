import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Auth from "../layouts/Auth/Auth";
import SignIn from "../pages/Auth/SignIn";
import { routesGenerators } from "../utils/routesGenerators";
import { dashboardItems } from "../constants/router.constants";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import VerifyEmail from "../pages/Auth/VerifyEmail";
import ResetPassword from "../pages/Auth/ResetPassword";
import ChatPage from "../pages/Main/Support/ChatPage";
import ChangePassword from "../pages/Main/Setting/Change-password/ChangePassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: routesGenerators(dashboardItems),
  },
  {
    path: "/support-chat",
    element: <ChatPage />
  },
  {
    path: "/change-password",
    element: <ChangePassword />
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth",
        element: <Navigate to={"/auth/sign-in"} />,
      },
      {
        path: "/auth/sign-in",
        element: <SignIn />,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/auth/verify-email",
        element: <VerifyEmail />,
      },
      {
        path: "/auth/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "*",
    //   element: <NotFound />,
  },
]);

export default router;
