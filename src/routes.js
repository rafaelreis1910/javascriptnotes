import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/home";
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import NotesIndexScreen from "./screens/notes/index";
import UserEditScreen from "./screens/users/edit";
import PrivateRouter from "./components/auth/private_router";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomeScreen />} />
      <Route exact path="/register" element={<RegisterScreen />} />
      <Route exact path="/login" element={<LoginScreen />} />
      <Route
        exact
        path="/notes"
        element={
          <PrivateRouter>
            <NotesIndexScreen />
          </PrivateRouter>
        }
      />
      <Route
        exact
        path="/users/edit"
        element={
          <PrivateRouter>
            <UserEditScreen />
          </PrivateRouter>
        }
      />
    </Routes>
  </BrowserRouter>
);
export default Rotas;
