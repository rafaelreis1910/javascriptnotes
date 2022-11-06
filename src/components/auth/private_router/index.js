import { Navigate } from "react-router-dom";
//esta função receberá o componente chamado pelo roteador e todo o resto das informações passadas para ele (como path, exact, etc)
const privateRouter = ({ children }) =>
  localStorage.getItem("user") ? children : <Navigate to="/login" />;

export default privateRouter;
