import logo from './logo.svg';
import './App.css';
import Cover from './Pages/Cover';
import Welcome from './Pages/Welcome';
import PrivateRoutes from './Routes/PrivateRoutes';

function App() {
 let token=localStorage.getItem('token')

 
  return (
    <div className="App">
      <Welcome/>
   
    </div>
  );
}

export default App;
