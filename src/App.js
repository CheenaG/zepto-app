

import './App.css';
import {
  HashRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

 
import Home from './components/screens/home';
import Deliver from './components/screens/header/deliver';
import HowITWorks from './components/screens/header/howitworks';
import HappyCustomer from './components/screens/header/happycustomer';
import Footer from './components/screens/header/footer';
import DeliveryAreas from './components/screens/header/deliveryareas';
import Press from './components/screens/header/press';
import Customer from './components/screens/header/customer';
import Form from './components/modal/modal';
import Vendorlogin from './components/Vendor/vendorlogin';


function App() {
  

  return (
    <div>

     

    
    <HashRouter>
    <Routes>
     
      <Route  exact path="/" element={<Home/>}/>
      <Route   path="/deliver" element={<Deliver/>}/>
      <Route   path="/howitworks" element={<HowITWorks/>}/>
      <Route   path="/happy" element={<HappyCustomer/>}/>
      <Route   path="/footer" element={<Footer/>}/>
      <Route   path="/del-areas" element={<DeliveryAreas/>}/>
      <Route   path="/press" element={<Press/>}/>
      <Route   path="/customer" element={<Customer/>}/>
      <Route   path="/form" element={<Form/>}/>
      <Route   path="/vendorlogin" element={<Vendorlogin/>}/>
      
       
      


      
        
        
      
    </Routes>
  </HashRouter> 
  </div>

      

     
    
  );
}

export default App;
