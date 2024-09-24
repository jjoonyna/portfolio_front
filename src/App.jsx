import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import './Css/App.css';
import Admin from './Pages/Admin.jsx';

function App() {
    
    return(
    <BrowserRouter>
        <Routes >
            <Route index element={<Home />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={<Admin />} />
        </Routes>
    </BrowserRouter>
    )
}

export default App;
