import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute.js";
import AuthForm from "../pages/Auth/Components/AuthForm.js";
import useTokens from "../jwt/index.js";
import Layout from "../components/layout";
import Home from "../pages/Home/index";
import NotFound from "../pages/NotFound/index.jsx";
import Exam from "../pages/Exam/index.jsx";
import ExamInfo from "../pages/Exam/Components/ExamInfo/index.jsx";
import ChangePassword from "../pages/Auth/Components/Profile/ChangePassword/index.jsx";
import UpdateProfile from "../pages/Auth/Components/Profile/UpdateProfile/index.jsx";
import PersonalDetail from "../pages/Auth/Components/Profile/PersonalDetail/index.jsx";
import TakeExam from "../pages/Exam/Components/TakeExam/index.jsx";
import ExamScore from "../pages/Exam/Components/ExamScore/index.jsx";
import ExamHistory from "../pages/Auth/Components/Profile/ExamHistory/index.jsx";

const AppRouter = () => {
  const { isAuthenticated } = useTokens();

  const router = createBrowserRouter([
    {
      path: "/login",
      element: isAuthenticated() ? <Navigate to="/" replace /> : <AuthForm />,
      index: true,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "/exam",
              element: <Exam />,
            },
            {
              path: "exam/:id",
              element: <ExamInfo />,
            },
            {
              path: "exam/take_exam/:id",
              element: <TakeExam />,
            },
            {
              path: "exam/take_exam/:id/score",
              element: <ExamScore />,
            },
            {
              path: "/profile",
              element: <PersonalDetail />,
            },
            {
              path: "/profile/exam_history",
              element: <ExamHistory />,
            },
            {
              path: "profile/update_profile",
              element: <UpdateProfile />,
            },
            {
              path: "profile/change_password",
              element: <ChangePassword />,
            },
            {
              path: "*",
              element: <p>403 Forbidden Error</p>,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
