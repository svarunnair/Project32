import logo from './logo.svg';
import './App.css';
import Cover from './Pages/Cover';
import Welcome from './Pages/Welcome';
import PrivateRoutes from './Routes/PrivateRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';

function App() {
 let token=localStorage.getItem('token')
 let path=useLocation()



 
  return (
    <div className="App">
      {/* <Welcome/> */}
   <Navbar/>
   { path.pathname!=='/'&&<Footer/>}
   
    </div>
  );
}

export default App;
