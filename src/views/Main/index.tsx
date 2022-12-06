import Banner from "../Banner";
import CalcSimilar from "../CalcSimilar";
import Cluster from "../Cluster";
import Feature from "../Feature";
import Footer from "../Footer";
import Search from "../Search";
import Statistic from "../Statistic";
import "./index.scss";

const Main = () => {
  return (
    <div className="container">
      <Banner />
      <Statistic />
      <Feature />
      <Search />
      <CalcSimilar />
      <Cluster />
      <Footer />
    </div>
  );
};

export default Main;
