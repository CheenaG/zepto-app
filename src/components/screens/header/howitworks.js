import React from "react";
import "./howitworks.css";
const HowITWorks=()=>{
    return(
        <div className="container-fluid howitworks_div">
            <div className="row">
                <div className="col-lg-12">
                    <div className="border-para"> 
                    <div className="howitworks_heading">HOW IT WORKS </div>
                    <div className="row">
                        {/* <div className="col-lg-2"></div> */}
                        <div className="col-lg-4">
                            <img src="/images/img1.png" className="img_hiw"/>
                            <p className="hiw_1">Place an order</p>
                            <p className="hiw_2">Choose from a wide</p>
                            <p className="hiw_2">range of daily essentials</p>
                        </div>
                        <div className="col-lg-4">
                        <img src="/images/img2.png" className="img_hiw"/>
                            <p className="hiw_1">Don’t Blink</p>
                            <p className="hiw_2">Our delivery partner will</p>
                            <p className="hiw_2">be at your door in 10</p>
                            <p className="hiw_2">minutes</p>
                        </div>
                        <div className="col-lg-4">
                        <img src="/images/img3.png" className="img_hiw"/>
                        <p className="hiw_1">Enjoy</p>
                            <p className="hiw_2">Boom! You'll never have</p>
                            <p className="hiw_2">to wait for groceries</p>
                            <p className="hiw_2">again!</p>
                        </div>
                        {/* <div className="col-lg-2"></div> */}
                    </div>  
                    </div>
                </div>

            </div>
           
        </div>
    )
}
export default HowITWorks;