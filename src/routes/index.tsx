import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Loader } from "../components/Loader";

const Error = lazy(() => import("../components/Error"));
const HomePage = lazy(() => import("../pages/HomePage"));
const Login = lazy(() => import("../pages/Login"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/" element={user ? <HomePage/> : <Login/>}/>
          <Route path="/login" element={<Login/>}/> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
