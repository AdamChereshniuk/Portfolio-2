import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { NotFound } from './pages/NotFound';
import { ProjectPage } from './pages/ProjectPage';
import { Contacts } from "./pages/Contacts";
import "./styles/main.css";
import './styles/reset.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Portfolio-2/" element={<Home />} />
          <Route path="/Portfolio-2/projects" element={<Projects />} />
          <Route path="/Portfolio-2/project/:id" element={<ProjectPage />} />
          <Route path="/Portfolio-2/contacts" element={<Contacts />} />
          <Route path="/Portfolio-2/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
