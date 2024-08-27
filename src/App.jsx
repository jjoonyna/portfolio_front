import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx'
import './Css/App.css';



function App() {
    
    return(
    <BrowserRouter>
        <Routes >
            <Route index element={<Home />}/>
            <Route path='login' element={<Login />} />
        </Routes>
    </BrowserRouter>
    )
}

export default App;
