import {
    Button,
    MobileIcon,
    Nav,
    NavBtnLink,
    NavIcon,
    NavItem,
    NavItemBtn,
    NavLinks,
    NavLogo,
    NavMenu,
    NavbarContainer,
} from './style';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FaAlignJustify, FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';

import { IconContext } from 'react-icons/lib';
import SideBar from '../SideBar/SideBar';
import { debounce } from '../../utilities/helpers';
import { navLinks } from '../../config';
import { animateScroll as scroll } from 'react-scroll';
import { useEffect } from 'react';
// import { useScrollDirection } from '../hooks';
import { useScrollDirection } from '../hooks';

// import { Container } from '../../globalStyles';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [scrollNav, setScrollNav] = useState(false);
    const [scrolledToTop, setScrolledToTop] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    // const changeNav = () => {
    //     if (window.scrollY >= 80) {
    //         setScrollNav(true);
    //     } else {
    //         setScrollNav(false);
    //     }
    // };
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const handleClick = () => {
        setClick(!click);
        toggleMenu();
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
    };
    // console.log(window.pageYOffset < 80);

    const scrollDirection = useScrollDirection('down');

    const onResize = (e) => {
        if (e.currentTarget.innerWidth > 768) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', onResize);
        const timeout = setTimeout(() => {}, 100);
        window.addEventListener('scroll', handleScroll);
        // console.log('a');
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    // useEffect(() => {
    //     showButton();
    //     window.addEventListener('scroll', changeNav);
    // }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    window.addEventListener('resize', showButton);
    const timeout = 2000;
    const fadeClass = 'fade';
    const fadeDownClass = 'fadeDown';

    return (
        <>
            <IconContext.Provider value={{ color: '#ff0000' }}>
                <Nav
                    // scrollNav={scrollNav}
                    scrollDirection={scrollDirection}
                    scrolledToTop={scrolledToTop}
                >
                    <TransitionGroup component={null}>
                        <CSSTransition classNames={fadeClass} timeout={timeout}>
                            <NavbarContainer>
                                <NavLogo to="/" onClick={toggleHome}>
                                    <NavIcon />
                                    Evan
                                </NavLogo>
                                {/* <MobileIcon onClick={handleClick}>
                                    {click ? <FaTimes /> : <FaAlignJustify />}
                                </MobileIcon> */}
                                <NavMenu
                                    onClick={handleClick}
                                    click={click}
                                    menuOpen={menuOpen}
                                    // aria-hidden={menuOpen}
                                    // tabIndex={menuOpen ? 1 : -1}
                                >
                                    <ol>
                                        {navLinks &&
                                            navLinks.map(({ url, name }, i) => (
                                                <CSSTransition
                                                    key={i}
                                                    classNames={fadeDownClass}
                                                    timeout={timeout}
                                                >
                                                    <NavItem key={i}>
                                                        <NavLinks
                                                            to={url}

                                                            // activeClass="active"
                                                        >
                                                            {name}
                                                        </NavLinks>
                                                    </NavItem>
                                                </CSSTransition>
                                            ))}
                                        {/* <NavItem>
                                    <NavLinks to="/">Home</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="/">Experience</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="/">Work</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks to="/">Contact</NavLinks>
                                </NavItem> */}
                                    </ol>
                                    <NavItemBtn>
                                        {button ? (
                                            <NavBtnLink to="/resume">
                                                <Button primary>Resume</Button>
                                            </NavBtnLink>
                                        ) : (
                                            <NavBtnLink to="/resume">
                                                <Button
                                                    // onClick={closeMobileMenu}
                                                    fontBig
                                                    primary
                                                >
                                                    Resume
                                                </Button>
                                            </NavBtnLink>
                                        )}
                                    </NavItemBtn>
                                </NavMenu>
                                <TransitionGroup component={null}>
                                    <CSSTransition classNames={fadeClass} timeout={timeout}>
                                        <SideBar />
                                    </CSSTransition>
                                </TransitionGroup>
                            </NavbarContainer>
                        </CSSTransition>
                    </TransitionGroup>
                </Nav>
            </IconContext.Provider>
        </>
    );
}

export default NavBar;
