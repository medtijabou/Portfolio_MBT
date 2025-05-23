// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/index.scss'
// Import des composants/pages
import Home from './Pages/Home';
// import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
    
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
