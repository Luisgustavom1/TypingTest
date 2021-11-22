import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Typing from "./pages/Typing";
import './styles/global.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/typing' element={<Typing />}/>
      </Routes>
    </Router>
  )
}

export default App
