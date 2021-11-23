import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LettersProvider } from "./context/lettersContext";

import Home from './pages/Home';
import Typing from "./pages/Typing";
import './styles/global.scss';

function App() {
  return (
    <LettersProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/typing' element={<Typing />}/>
        </Routes>
      </Router>
    </LettersProvider>
  )
}

export default App
