import { Outlet } from "react-router";
import "./CenteredLayout.css";

const CenteredLayout = () => {
  return (
    <main className="container centered">
      <Outlet />
    </main>
  );
};

export default CenteredLayout;
