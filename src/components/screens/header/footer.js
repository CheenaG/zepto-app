import React from "react";
import "./footer.css";
import { FaInstagram,FaFacebookSquare,FaTwitterSquare,FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer=()=>{
  
  const navigate=useNavigate();
  const navigateFunc=(value)=>{
  navigate(`/${value}`)  ;
  
  }
    return(
        <div className="container-fluid footer_div">
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-3">
                <img src="/images/logoimg.jpg" className="footer_img"/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-1"></div>
              <div className="col-lg-3">
                <div className="footer_links">
                <ul>
                <li><button className="nav_btn"  onClick={()=>navigateFunc("")}>Home</button></li>
                <li><button className="nav_btn"  onClick={()=>navigateFunc("del-areas")}>Delivery Areas</button></li>
                <li><button className="nav_btn"  onClick={()=>navigateFunc("customer")}>Customer Support</button></li>
                <li><button className="nav_btn"  onClick={()=>navigateFunc("press")}>Press</button></li>
                </ul>
              </div>
              </div>

              <div className="col-lg-3">
              <div className="footer_links">
                <ul>
                <li><a href="#"><span><FaInstagram/></span>Instagram</a></li>
                <li><a href="#"><span><FaFacebookSquare/></span>Facebook</a></li>
                <li><a href="#"><span><FaTwitterSquare/></span>Twitter</a></li>
                <li><a href="#"><span><FaLinkedin/></span>Linked In</a></li>
                
                </ul>
              </div>

              </div>
            </div>
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-4 footer_text" ><a href="#">© KiranaKart Technologies Private Limited</a></div>
                <div className="col-lg-2 footer_text"><a href="#"><p>Private<br/> Policy</p></a> </div>
                <div className="col-lg-2 footer_text"><a href="#"><p>Terms Of<br/> Use</p></a> </div>
                <div className="col-lg-3 footer_text"><a href="#"><p>Responsible Disclosure <br/>Policy</p></a> </div>
            </div>
            
           

        </div>
    )
}
export default Footer;