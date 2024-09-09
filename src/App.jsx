import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from "react-router-dom"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />,
      <Route path="about" element={<About />} />
    </Route>
  )
);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
