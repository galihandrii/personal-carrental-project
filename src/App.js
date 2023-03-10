
import './App.css';
import Landingpage from './pages/Landingpage';
import {Routes,Route} from "react-router-dom";
import Searchcar from './pages/Searchcar';
import Detailcar from './pages/Detailcar';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import Paymentpage from './pages/Paymentpage';
import ProtectedRoute from './hoc/ProtectedRoute';
import PaymentConfirm from './pages/Paymentconfirm';
import Tiket from './pages/Tiket';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/cari-mobil' element={<Searchcar/>}/>
      <Route path='/detail-mobil/:id' element={<Detailcar/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/register' element={<Registerpage/>}/>

      <Route element={<ProtectedRoute/>}>
      <Route path='/payment/:id' element={<Paymentpage/>}/>
      <Route path='/payment-confirm/:id' element={<PaymentConfirm/>}/>
      <Route path='/tiket/:id' element={<Tiket/>}/>
      </Route>
      
      
      
    </Routes>
      
     
      
    
  );
}

export default App;
