import React,{useEffect} from "react";
import "./deliveryareas.css";
import Footer from "./footer";
import Header from "./header";
const DeliveryAreas=()=>{
  useEffect(()=>{
    window.scrollTo(0, 0);
},[])
    return(
      
        <div className="container-fluid">
            <div className="row">
            <Header/>
                <div className="col-lg-12 p-3 delivery_text">
                    <p>Delivery Areas</p>
                </div>
                <section className="areas_div">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                      <p className="area1"><span><img src="/images/brocolli.svg"/></span>Bangalore</p>
                      <p className=" area1_para">Brookefield | Banashankari | Mico Layout | Indiranagar | Jayanagar |
                        Vijay Nagar | Shivaji Nagar | Singasandra | Marathahalli | Kalyan Nagar |
                        Whitefield | JP Nagar | Koramangala | KR Puram | RR Nagar | Ramamurthy Nagar |
                        Basavanapura | Chickpet | Hebbal | BTM Layout | Malleswaram | Hennur | Jakkur |
                        Bannerghatta | Bellandur | Yelahanka New Town | Bhadrappa Layout | Sarjapur |
                        HSR Layout</p>
                    </div>
                    <div className="col-lg-5">
                    <p className="area1"><span><img src="/images/chips.svg"/></span>Chennai</p>
                      <p className=" area1_para">Velachery | Mylapore | Kk Nagar | Tambaram | T Nagar | Madambakkam | Pallikaranai | 
                      Nandambakkam | Mogappair | Mudichur | Nanganallur | Perumbakkam |
                       Medavakkam | Perambur | Gerugambakkam | Nungambakkam | Pammal |
                        Annanagar | Thoraipakkam | Sholinganallur</p>

                    </div>
                    <div className="col-lg-1"></div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                      <p className="area1"><span><img src="/images/egg.svg"/></span>Delhi</p>
                      <p className=" area1_para">Kirti Nagar | East Of Kailash | Kalkaji | Pitampura | Uttam Nagar |
                       Vikaspuri | Wazirpur | Malviya Nagar | Sector 10 Dwarka | Vasant Kunj |
                       South Extension | Karol Bagh | Shakti Nagar | Janakpuri | Rajouri Garden | Paschim Vihar</p>
                    </div>
                    <div className="col-lg-5">
                    <p className="area1"><span><img src="/images/grapes.svg"/></span>Ghaziabad</p>
                      <p className=" area1_para">Vaishali | Raj Nagar | Indirapuram</p>

                    </div>
                    <div className="col-lg-1"></div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                      <p className="area1"><span><img src="/images/apple.svg"/></span>Gurgaon</p>
                      <p className=" area1_para">
                      Sector 69 | Sector 39 | Sector 27 | Ardee City | Udyog Vihar | Sector 66
                    </p>
                    </div>
                    <div className="col-lg-5">
                    <p className="area1"><span><img src="/images/chips.svg"/></span>Hyderabad</p>
                      <p className=" area1_para">Nizampet | Gachibowli | Sainikpuri | Moosapet | Secunderabad |
                       Nallagandla | Banjara Hills | Madhapur | Miyapur | Dammaiguda | Uppal | Kothapet | Vivekananda Nagar | Kondapur |
                       Himayathnagar | Chandanagar | Manikonda | Kukatpally | Begumpet | Jublee Hills | Bowenpally</p>

                    </div>
                    <div className="col-lg-1"></div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                      <p className="area1"><span><img src="/images/apple.svg"/></span>Gurgaon</p>
                      <p className=" area1_para">
                      Sector 69 | Sector 39 | Sector 27 | Ardee City | Udyog Vihar | Sector 66
                    </p>
                    </div>
                    <div className="col-lg-5">
                    <p className="area1"><span><img src="/images/chips.svg"/></span>Hyderabad</p>
                      <p className=" area1_para">Nizampet | Gachibowli | Sainikpuri | Moosapet | Secunderabad |
                       Nallagandla | Banjara Hills | Madhapur | Miyapur | Dammaiguda | Uppal | Kothapet | Vivekananda Nagar | Kondapur |
                       Himayathnagar | Chandanagar | Manikonda | Kukatpally | Begumpet | Jublee Hills | Bowenpally</p>

                    </div>
                    <div className="col-lg-1"></div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                      <p className="area1"><span><img src="/images/tomato.svg"/></span>Kolkota</p>
                      <p className=" area1_para">
                      Behala | Phoolbagan | New Town | Salt Lake | Bhawanipore
                    </p>
                    </div>
                    <div className="col-lg-5">
                    <p className="area1"><span><img src="/images/orange.svg"/></span>Mumbai</p>
                      <p className=" area1_para">Waghbil | Palava | Goregaon (E) | Bandra | Parel | Kandivali (W) | Powai |
                       Chembur | Kandivali (E) | Marol | Lower Parel | Dombivali (W) | BKC | Mira Road | Bandra (W) | Andheri (W) |
                       Waghle Estate | Ghatkopar (W) | Kothari Compound | Vashi Sector 19a | Andheri (E) | Bhandup</p>

                    </div>
                    <div className="col-lg-1"></div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                      <p className="area1"><span><img src="/images/avacado.svg"/></span>Noida</p>
                      <p className=" area1_para">
                      Sector 142 | Sector 10 | Sector 117 | Sector 63
                    </p>
                    </div>
                    <div className="col-lg-5">
                    <p className="area1"><span><img src="/images/cookies.svg"/></span>Pune</p>
                      <p className=" area1_para">Kharadi   |   Koregaon Park   |   Kothrud   | 
                        Shivaji Nagar   |   Aundh | Viman Nagar   |   Pimple Saudagar   |   Baner</p>

                    </div>
                    <div className="col-lg-1"></div>
                    
                </div>
                </section>
                <Footer/>
                
            </div>
            


        </div>
    )
}
export default DeliveryAreas;