import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from "react-router-dom"
import Technologies from "./pages/Technologies/Technologies";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />,
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="technologies" element={<Technologies />} />
    </Route>
  )
);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
