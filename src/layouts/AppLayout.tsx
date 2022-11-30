import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "./index.scss";
const AppLayout = () => {
  return (
    <div className="app__layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
