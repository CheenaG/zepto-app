import React, { useEffect, useState } from 'react';
import "./home.css";
import {FaApple,FaGooglePlay} from 'react-icons/fa';
import Header from './header/header';
import HowITWorks from './header/howitworks';
import Footer from './header/footer';
import Deliver from './header/deliver';
import HappyCustomer from './header/happycustomer';
const Home=()=>{
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    
    const[newItems,setNewItems]=useState(["Groceries","Fruits","IceCreams","Milk","Veggies","Chips","Egg","choclates"])
    const[index,setIndex]=useState(0);

    useEffect(() => {
        const tick = () => setIndex(i => i + 1);
    
        const id = setInterval(tick, 3000);
        return () => clearInterval(id);
      }, []);
       
       
           
            
        

    return(
        <div className='container-fluid home-container'>
            <Header/>
            
            <div className='row'>
                <div className='col-lg-7'>
                    <p className='groceries_para'><span className='list_color'>{ newItems[index % newItems.length]}</span><br/> delivered in 10 minutes</p>
                   <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-3 icon-box'>
                        <div className='row'>
                        <div className='icon col-lg-4'>
                            {<FaApple/>}
                            </div>
                        <div className='icon-content col-lg-8'>
                            Download on the <span style={{fontWeight:"bold"}}>App Store</span>
                        
                        </div>
                    </div>
                    
                    </div>
                        <div className='col-lg-3 icon-box'>
                            <div className='row'>
                        <div className='icon col-lg-3'>
                            {<FaGooglePlay/>}
                        </div>  
                        <div className='icon-content col-lg-8'>
                            Get It On<br/><span style={{fontSize:20,fontWeight:"bold"}}>Google Play</span>
                        
                        </div>
                      
                    
                    </div>
                    </div>
                    
                   </div>
                </div>
                <div className='col-lg-5'>
                    <img src="/images/zepto_bg_img.jpg" className='zepto_home_img'/>
                </div>
                <Deliver/>
            <HowITWorks/>
            <HappyCustomer/>

            <Footer/>
               
            </div>
           

        </div>
    )

}
export default  Home;