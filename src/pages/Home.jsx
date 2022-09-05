import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = ({ user }) => {
  return (
    <div>
      <Navbar user={user} />
      <Outlet />
    </div>
  );
};

export default Home;
