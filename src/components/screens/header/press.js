import React,{useEffect} from "react";
import "./deliveryareas.css";
import Footer from "./footer";
import Header from "./header";

const Press=()=>{
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
    <div className="press_container">
        <div className="row">
        <Header/>
            <div className="col-lg-12 p-3 delivery_text">
                <p>Press</p>
            </div>
        </div>
            <div className="press_text">
            <p><i>For press inquiries, please contact pr@zeptonow.com.</i></p>
            <div className="row">
            <div className="col-lg-3 press_div">
                <div className="press_shadow">
                <img src="/images/press1.jpg" className="press_img"/>
                
                <div className="row">
                    <div className="col-lg-6" style={{fontWeight:"bold",padding:30}}>Bloomberg</div>
                    <div className="col-lg-6" style={{padding:30}}>Dec21,2021</div>
                
                <div className="row">
                    <div className="col-lg-12 press_para">
                        <p>Grocery startup Founded by Teens doubles the value to $570Million</p>
                        <p>Zepto ,an grocery deliver startup founded by two teenager,has raised$100 millionin funding round
                            led by Y combinator ,taking its valuation to $570 million with in five months...
                        </p>
                    </div>
                        <p style={{textAlign:"center",color:"purple"}}>Read More</p>
                    
                    </div>

                </div>
                </div>

            
            </div>
            <div className="col-lg-3 press_div">
                <div className="press_shadow">
                <img src="/images/img2.jpg" className="press_img"/>
                
                <div className="row">
                    <div className="col-lg-6" style={{fontWeight:"bold",padding:30}}>Bloomberg</div>
                    <div className="col-lg-6" style={{padding:30}}>Nov1,2021</div>
                
                <div className="row">
                    <div className="col-lg-12 press_para">
                        <p>Zepto , a 10-minute grocery delivery app in India, raises $60 million</p>
                        <p>Two 19-year-old entrepreneurs, who previously collaborated on a number of projects including a ride-hailing commute app for school kids and left Stanford last year to pursue a new startup,said on  ....
                        </p>
                    </div>
                        <p style={{textAlign:"center",color:"purple"}}>Read More</p>
                    
                    </div>

                </div>
                </div>

            
            </div>
            <div className="col-lg-3 press_div">
                <div className="press_shadow">
                <img src="/images/press3.jpg" className="press_img"/>
                
                <div className="row">
                    <div className="col-lg-6" style={{fontWeight:"bold",padding:30}}>Bloomberg</div>
                    <div className="col-lg-6" style={{padding:30}}>Nov1,2021</div>
                
                <div className="row">
                    <div className="col-lg-12 press_para">
                        <p>Teenage Stanford Dropouts Raise $60 Million for Grocery Startup</p>
                        <p>If the promise is 10 minutes, our customer gets a call in the 9th minute,” said Vohra, the hoodie-sporting, bearded co-founder. According to him, Zepto’s average delivery time is 8 minutes 40 seconds.




                        </p>
                    </div>
                        <p style={{textAlign:"center",color:"purple"}}>Read More</p>
                    
                    </div>

                </div>
                </div>

            
            </div>
            
            
            </div>
            
            
        </div>
        <Footer/>
        
        </div>
    
    )

}
export default Press;