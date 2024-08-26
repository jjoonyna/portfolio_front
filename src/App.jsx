import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Components/About.jsx';
import Skills from './Components/Skills.jsx';
import './Css/App.css';


function App() {
  return(
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<Home><About /></Home>} />
            <Route path='skills' element={<Home><Skills /></Home>} />
        </Routes>
    </BrowserRouter>
    )
}

export default App;
