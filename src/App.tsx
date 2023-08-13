import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import "./index.scss";
import Signup from "pages/Signup";
import Loading from "pages/components/Loading";

let router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Hello Data Router!" }),
    Component: () => <Signup />,
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<Loading />} />;
}

// if (import.meta.hot) {
//   import.meta.hot.dispose(() => router.dispose());
// }
