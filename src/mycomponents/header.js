import react from 'react';
import Loop from './loop';
import logo from "../images/sss.png"
import banner from '../images/banner.jpg'
import "./header.css"
function Header(){
    return (
        <>
        <header>
            <div className='container1'>
                <div className='ssaifi_nav'>
                    <div className='ssaifi_navbar'>
                        <div className='ssaifi_logo'>
                                {/* <img src={logo} /> */}
                        </div>
                        <div className='ssaifi_menu'>
                           <ul>
                               <li>Home</li>
                               <li>About</li>
                               <li>Portfolio</li>
                               <li>Contact Us</li>
                           </ul> 
                        </div>
                    </div>
                </div>
                <div className='banner_ssaifi'>
                <div className='banner'>
                    <img src={banner}/>
                   
                </div>
                <div className='text_banner'>
                        <div className='Title_text'></div>
                        <h1>Lorem Ipsum</h1>
                    </div>
                    </div>
            </div>
        </header>
        
        </>
    )
}


export default Header;