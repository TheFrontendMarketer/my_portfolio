import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from "react-router-dom"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />,
      <Route path="about" element={<About />} />
      <Route path="Projects" element={<Projects />} />
    </Route>
  )
);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
