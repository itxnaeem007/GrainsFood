import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "@/components/Error";
import { MainLayout } from "@/components/MainLayout";
import { APP_ROUTES } from "@/config/routes";
import { Landing } from "@/features/Landing";

export const router = createBrowserRouter([
  {
    path: APP_ROUTES.HOME,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Landing />
        ),
      },
      {
        path: APP_ROUTES.LANDING,
        element: <Landing />,
      },
    ],
  },
]);
