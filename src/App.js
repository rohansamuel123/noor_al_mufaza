// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactDetails from './pages/ContactDetails'; // your existing contact page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-details" element={<ContactDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
