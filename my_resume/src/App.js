import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Certification from "./pages/Certification";
import Contact from "./pages/Contact";
import CoverLetter from "./pages/CoverLetter";
import Education from "./pages/Education";
import Employment from "./pages/Employment";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Skill from "./pages/Skill";

const router = createBrowserRouter([
  { path: "/", element: <Home />},
  { path: "/Home", element: <Home />},
  { path: "/Skill", element: <Skill />},
  { path: "/Employment", element: <Employment />},
  { path: "/Experience", element: <Experience />},
  { path: "/Certification", element: <Certification />},
  { path: "/Education", element: <Education />},
  { path: "/Contact", element: <Contact />},
  { path: "/CoverLetter", element: <CoverLetter />},
]);

const App = () => {  
  return <RouterProvider router={router} />;
}

export default App;
