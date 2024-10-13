import { Suspense } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
// import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import Details from "./components/User-Details/Details";
import Navbar from "./components/Navbar/Navbar";
import Error from "./components/Error/Err";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Navbar/>}>
        <Route path="/users"  element={<User/>}  />
        <Route path="/login" element={ <Login/>} />
        <Route path="/user" element={<User/> } />
        <Route path="/user-details/:id" element={<Details/>} />
        <Route path="*" element={<Error/>} />
      </Route>
    )
  );

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
