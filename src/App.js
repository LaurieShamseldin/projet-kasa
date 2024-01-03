// == Import modules
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './components/Footer';


// == Composant
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};
// == Export
export default App;
