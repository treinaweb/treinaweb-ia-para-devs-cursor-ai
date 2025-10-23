import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/FAQ'

/**
 * Main App component that sets up routing and layout structure
 * 
 * @returns {JSX.Element} App component
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
