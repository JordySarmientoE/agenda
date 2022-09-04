import Navbar from "../components/Navbar";

const Home = ({ user }) => {
  return (
    <div>
      <Navbar user={user} />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
