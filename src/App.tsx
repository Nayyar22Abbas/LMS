import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Signup } from './Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Signup />} />
      </Routes>
    </Router>
  );
}
export default App;
