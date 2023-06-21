import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./routes/Layout";
import Rockets from "./routes/Rockets";
import Missions from "./components/Missions";
import MyProfile from "./components/MyProfile";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Rockets />} />
      <Route path="/rocket" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/myProfile" element={<MyProfile />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
