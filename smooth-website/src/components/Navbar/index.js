import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from'../Navbar/NavbarElements'


function Navbar({ toggle }) {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>CG</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skills</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="cards" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Certifications</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact Me</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar