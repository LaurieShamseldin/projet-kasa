// == Import modules
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './components/Footer';
import Header from './components/Header';
import PageLogement from './Pages/PageLogement';
import ErrorPage from './Pages/ErrorPage';


// == Composant
const App = () => {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/logement/:id" element={<PageLogement />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};
// == Export
export default App;
