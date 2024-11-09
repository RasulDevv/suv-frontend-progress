import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AboutSensors from "../components/pages/AboutSensors";
import AboutUs from "../components/pages/AboutUs";
import Home from "../components/pages/Home";
import Contact from "../components/pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about-us",
        element: <AboutUs />
      },
      {
        path: "about-sensors",
        element: <AboutSensors />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]);


export default router;

