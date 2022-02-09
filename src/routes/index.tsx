import { Flex } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Background } from "../assets/svg";
import { Loader } from "../components/Loader";
import { useUser } from "../context/UserContext";
import { Footer } from "../global_styles";

const Error = lazy(() => import("../components/Error"));
const Logout = lazy(() => import("../components/Logout"));
const HomePage = lazy(() => import("../pages/HomePage"));
const Login = lazy(() => import("../pages/Login"));
const Movies = lazy(() => import("../pages/Movies"));
const AddMovie = lazy(() => import("../pages/AddMovie"));

const AppRoutes = () => {
  const { user, jwt } = useUser();

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={!user ? <Login /> : <Movies />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/add" element={<AddMovie />} />
          {/* <Route path="/" element={user ? <HomePage/> : <Login/>}/>
          <Route path="/login" element={<Login/>}/> */}
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
