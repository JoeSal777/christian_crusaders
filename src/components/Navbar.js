import React, { Component } from 'react';
import logo from '../images/logo32.png';
import menu_arcade from "../images/menu_arcade_32.png";
import contact_logo from "../images/mail/mail_arcade_32.png";
//import {FiMail} from "react-icons/fi";
import {Link} from "react-router-dom"; 


class Navbar extends Component {
    
    state={
        isOpen: false
    }
    //as name says, handles the toggle on mobile view
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    resetToggle = () =>{
        this.setState({isOpen:false})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        
                        {/* For contact-me icon in mobile view */}
                        <Link to="https://www.google.com/" className="nav-btn-small-screen" onClick={this.resetToggle}>
                            <button type="button">
                                <img src={contact_logo} alt="Logo" className="Nav-icon"/>   
                            </button>
                        </Link>
                        
                        
                        {/* For logo */}
                        <Link to="/" onClick={this.resetToggle} className='nav_logo'>
                            <img src={logo} alt="Logo" />
                        </Link>

                        

                        {/* For menu icon in mobile view */}
                        <button type="button" className="nav-btn-small-screen" onClick={this.handleToggle}>
                            <img src={menu_arcade} alt="Logo" className="Nav-icon"/>  
                        </button> 
                    </div>

                    {/* For nav menu */}
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="https://www.google.com/" onClick={this.handleToggle}>About</Link>
                        </li>
                        <li>
                            <Link to="https://www.google.com/" onClick={this.handleToggle}>Services</Link>
                        </li>
                    </ul>

                    {/* For contact me icon in nav-bar big screen */}
                    <Link to="/https://www.google.com/" className="nav-btn-big-screen">
                        <button type="button">
                            <img src={contact_logo} alt="Logo" className="Nav-icon"/>
                        </button>
                    </Link>

                </div>
            </nav>
        );
    }
}

export default Navbar;