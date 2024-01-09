import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery"
import imageBanner from "../../assets/banner-image.jpg"

const Home = () => (
  <div className="home">
    <main className="main">
      <Banner text="Chez vous, partout et ailleurs" image={imageBanner} textImage="Bienvenue chez Kasa"/>
      <Gallery />
    </main>
  </div>
);

export default Home;
