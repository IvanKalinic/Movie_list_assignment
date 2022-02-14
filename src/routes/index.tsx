import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Background } from "../assets/svg";
import { Loader } from "../components/Loader";
import { useUser } from "../context/UserContext";
import { Footer } from "../global_styles";

const Error = lazy(() => import("../components/Error"));
const Logout = lazy(() => import("../components/Logout"));
const Login = lazy(() => import("../pages/Login"));
const Movies = lazy(() => import("../pages/Movies"));
const AddMovie = lazy(() => import("../pages/AddMovie"));

const AppRoutes = () => {
  const { user, jwt } = useUser();

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={!user && !jwt ? <Login /> : <Movies />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/add" element={<AddMovie edit={false} />} />
          <Route path="/edit/:id" element={<AddMovie edit={true} />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <Footer>
        <Background />
      </Footer>
    </Router>
  );
};

export default AppRoutes;
