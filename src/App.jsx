import FullArticle from "./components/ContentPage/FullArticle";
import LandingPage from "./components/LandingPage/LandingPage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/AboutPage/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/article/:id/:header" element={<FullArticle />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
