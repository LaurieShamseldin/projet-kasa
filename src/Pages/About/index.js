import Collapse from "../../components/Collapse";
import Banner from "../../components/Banner";
import collapses from "../../data/collapses.json";
import imageBanner from "../../assets/banner-about.jpg"
import './style.css';

const About = () => (
  <div className="about">
   <main className="main">
    <Banner text="Chez vous, partout et ailleurs" image={imageBanner} textImage=""/>
    <div className="about__collapse">
      {collapses.map((collapse) => (
        <article key={collapse.id} className="collapse__article">      
          <Collapse description={collapse.description} title={collapse.title}/>
        </article>
      ))};
      </div>
    </main>
  </div>
);

export default About;
