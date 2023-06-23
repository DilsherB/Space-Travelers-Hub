import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./routes/Layout";
import Rockets from "./routes/Rockets";
import Missions from "./components/Missions";
import MyProfile from "./routes/MyProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      errorElement={<div>Error Element</div>}
      ErrorBoundary={<div>Error Boundaries</div>}
    >
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/myProfile" element={<MyProfile />} />
    </Route>
  )
);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
