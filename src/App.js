
import './App.css';
import Landingpage from './pages/Landingpage';
import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
    </Routes>
      
     
      
    
  );
}

export default App;
