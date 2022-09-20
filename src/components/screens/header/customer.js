import React,{useEffect} from "react";
import "./customer.css"
import {FaEnvelope} from 'react-icons/fa';
import Footer from "./footer";
import Form from "../../modal/modal";
import Header from "./header";




const Customer=()=>{
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
        <div className="customer_container">
        <div className="row">
        <Header/>
            <div className="col-lg-12 p-3 customer_text">
                <p>Customer support</p>
            </div>
        </div>
        
                <div className="row customer_section">
                    <div className="col-lg-12 ">
                        <p>we’re here to help</p>
                        <p style={{fontSize:30}}>Have an issue with an order or feedback for us? Our support team is here to help you 7am - 2am.</p>
                    </div>
                    <div className="col-lg-6 customer_query">
                     <p><span style={{color:'#fe3962',fontSize:45}}> <FaEnvelope/></span> Order Related Queries</p>
                     <p style={{fontSize:25}}>Connect With Customer On the App</p>
                    </div>
                    <div className="col-lg-6 customer_query">
                     <p><span style={{color:'#fe3962',fontSize:45}}> <FaEnvelope/></span> Order Related Queries</p>
                     <p style={{fontSize:25}}>Send us email to support@Zeptonow.com OR  <Form/></p>
                    
                    </div>
                   
                   
                </div>
                
               
                <Footer/> 


        </div>
        

    )
}
export default Customer;