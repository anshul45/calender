import Home from "./page/Home";
import { Provider } from "react-redux";
import store from "./utils/store";
import Login from "./page/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Protected from "./components/Protected";
import { GoogleOAuthProvider } from "@react-oauth/google";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected isAuth={true}>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <RouterProvider router={appRouter} />
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
