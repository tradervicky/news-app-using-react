import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Finance from './Nav Pages/Finance';
import Footer from './Nav Pages/Footer';
import Health from './Nav Pages/Health';
import Sports from './Nav Pages/Sports';
import Upsc from './Nav Pages/Upsc';
import Navbar from './Navbar';
import News from './News';
import Search from './Nav Pages/Search';
import Technology from './Nav Pages/Technology';
import Global from './Nav Pages/Global';

function App() {
  
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<News/>}/>
      <Route path='/upsc' element={<Upsc/>}/>
      <Route path='/finance' element={<Finance/>}/>
      <Route path='/sports' element={<Sports/>}/>
      <Route path='/health' element={<Health/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/technology' element={<Technology/>}/>
      <Route path='/global' element={<Global/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
