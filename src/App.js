
import './App.css';
import Landingpage from './pages/Landingpage';
import {Routes,Route} from "react-router-dom";
import Searchcar from './pages/Searchcar';
import Detailcar from './pages/Detailcar';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/Carimobil' element={<Searchcar/>}/>
      <Route path='/Detailmobil/:id' element={<Detailcar/>}/>
      <Route path='/Login' element={<Loginpage/>}/>
      <Route path='/Register' element={<Registerpage/>}/>
    </Routes>
      
     
      
    
  );
}

export default App;
