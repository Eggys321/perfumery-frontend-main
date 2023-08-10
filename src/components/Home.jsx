import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Hero from "../pages/Hero";
import "../styles/Home.css";
import MalePerfumes from "./MalePerfumes";
import FemalePerfumes from "./FemalePerfumes";
import ComboPerfumes from "./ComboPerfumes";

const Home = () => {
  // const token = localstraoge.getItem('token')
//axios.get('url, {headers: {'Authorization': token}})
  return (
    <div className="Home">
      <Navbar></Navbar>
      <div>
        <Hero />
        <MalePerfumes />
        <FemalePerfumes />
        <ComboPerfumes />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
