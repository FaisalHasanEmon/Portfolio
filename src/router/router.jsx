import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Banner from "../components/Banner/Banner";
import AboutMe from "../components/AboutMe/AboutMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
  },
]);

export default router;
