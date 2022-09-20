import React from "react";
import "./deliver.css";


const Deliver=()=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 deliver_box">
                    <div className="p-4 deliver_heading p-4">DELIVERING TO</div>
                
                
                   <div className="marquee_list p-4">
                    <marquee> <span><img src="images/egg.svg"/>DELHI</span>
                   <span><img src="images/brocolli.svg"/> BANGALORE</span>
                   <span><img src="images/grapes.svg"/> GAZIABAD</span>
                   <span><img src="images/apple.svg"/> GURGAON</span>
                   <span><img src="images/mango.svg"/> HYDERABAD</span>
                   <span><img src="images/tomato.svg"/> KOLKOTA</span>
                   <span><img src="images/orange.svg"/> MUMBAI</span>
                    <span><img src="images/chips.svg"/>CHENNAI</span>
                    <span><img src="images/cookies.svg"/>NOIDA</span>
                    <span><img src="images/avacado.svg"/>PUNE</span>
                    </marquee>
                   </div>

                   <div className="deliver_para">Is your city missing? Don't worry, <span style={{textDecoration:"underline",fontSize:37}}>we’re coming soon.</span></div>
                </div>
            </div>
            
       

        </div>
    )
}
export default Deliver;