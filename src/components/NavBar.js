import { useState } from 'react';
import { Navbar, Container, } from 'react-bootstrap';
import { FaLinkedin, FaBars, FaGithub, FaMoon, FaSun, FaTimes } from "react-icons/fa";



function navToggle() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('toggle-nav-bar');
}


function changeTheme() {
    var element = document.body;
    element.classList.toggle("light-mode");
    changeTheThemeIcon();
    changeLinksColor();
    changeFromColor();
}

function changeTheThemeIcon() {
    let changeIcon = document.querySelectorAll('.theme-mode');
    changeIcon.forEach(element => {
        element.classList.toggle('theme-mode-hidden');
    });
}

function changeLinksColor() {
    let linkColor = document.querySelectorAll('a');
    linkColor.forEach(element => {
        element.classList.toggle('light-mode-link')
    });
}

function changeFromColor() {
    let linkColor = document.querySelectorAll('input');
    linkColor.forEach(element => {
        element.classList.toggle('light-mode-form')
    });

}


export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    return (
        <Container>
            <header>
                <Navbar.Brand href="#" className='light-mode-link'>S.S.M</Navbar.Brand>
                <div>
                    <nav id='nav-links'>
                        <div className='close-nav-links' >
                            <FaTimes onClick={()=>{navToggle()}}/>
                        </div>
                        <a className='light-mode-link' href='#home' onClick={()=>{navToggle()}}>Home</a>
                        <a className='light-mode-link' href='#about' onClick={()=>{navToggle()}}>About</a>
                        <a className='light-mode-link' href='#projects' onClick={()=>{navToggle()}}>Projects</a>
                        <a className='light-mode-link' href='#contact' onClick={()=>{navToggle()}}>Contact</a>
                        <div className='close-nav-links' >
                        <img src='assets/images/header-img.svg' />
                        </div>
                        
                    </nav>
                </div>
                <div className='nav-icons'>
                    <div className='Social-icons'>
                        <a className='light-mode-link' href="https://www.linkedin.com/in/siphamandla-mdletshe-644a7323b" target='_blank'><FaLinkedin /></a>
                        <a className='light-mode-link' href='https://github.com/sphamandla-s' target='_blank'><FaGithub /></a>
                        <div onClick={changeTheme}>
                            <FaSun className='theme-mode' />
                            <FaMoon className='theme-mode theme-mode-hidden' />
                        </div>
                    </div>
                    <div id='toggle' onClick={navToggle}><FaBars /></div>
                </div>
            </header>
        </Container>

    )
}