import React, { Component } from 'react';
import logo from '../crusader-creative_logo.svg';
import menu_arcade from "../images/menu_arcade_32.png";
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
                        
                        {/* For logo */}
                        <Link to="/" onClick={this.resetToggle} className='nav_logo'>
                            <img src={logo} alt="Logo" style={{width:'auto', height:'50px'}} className='nav-logo-img' />
                        </Link>

                        {/* For menu icon in mobile view */}
                        <button type="button" className="nav-btn-small-screen" onClick={this.handleToggle}>
                            <img src={menu_arcade} alt="header_menu" className="Nav-icon"/>  
                        </button> 
                    </div>

                    {/* For nav menu */}
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links navbar_font"}>
                        <li>
                            <Link to="https://www.google.com/" onClick={this.handleToggle}>Work</Link>
                        </li>
                        <li>
                            <Link to="https://www.google.com/" onClick={this.handleToggle}>About</Link>
                        </li>
                        <li>
                            <Link to="https://www.google.com/" onClick={this.handleToggle}>Contact</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        );
    }
}

export default Navbar;