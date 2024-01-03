import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery"
import imageBanner from "../../assets/banner-image.jpg"

const Home = () => (
  <div className="home">
   <Header/>
   <Banner text="Chez vous, partout et ailleurs" image={imageBanner} textImage="Bienvenue chez Kasa"/>
   <Gallery />
  </div>
);

export default Home;
