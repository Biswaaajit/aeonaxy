import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "./pages/Loader";
import Learning from "./pages/Learning";
import Form from "./pages/Form";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "/loading",
    element: <Loader />,
  },
  {
    path: "/learning",
    element: <Learning />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
