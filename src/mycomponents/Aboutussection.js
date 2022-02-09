import React from "react";
import AboutImg from "../images/abt.jpg"
import { useState } from "react";
function About(){
    const[popup, setpopup]=useState(false);
    return(
        <>
        <section className="pt-5">
            <div className="container">
                <div className="about py-5">
                    <div className="Heading_about">
                        <h3>About Us</h3>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="abt_img">
                          <img src={AboutImg}/>
                          </div>
                        </div>
                        <div className="col-6">
                            <p>Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor </p>
                            <button className="btn_CV" onClick={()=>setpopup(true)}>View CV</button>
                            
                        </div>
                    </div>
                    
                </div>
               
            </div>
           
        </section>
        {
        popup?<div className="backdrop" onClick={()=>setpopup(false)}></div>:""
        }
        {
        popup?<div className="cv_popup">Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor <button onClick={()=>setpopup(false)} className="close_cv_popup">&#10006;</button></div>:""
        }
        </>
   )
}

export default About;