import styled, { css } from 'styled-components';

import { Container } from '../../globalStyles';
import { FaEthereum } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.div`
    background: ${({ scrollNav }) => (scrollNav ? '#000000' : 'transparent')};
    background: #000000;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 11;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    backdrop-filter: blur(10px);
    filter: none !important;
    ${(props) =>
        props.scrollDirection === 'up' &&
        !props.scrollToTop &&
        css`
            height: 80px;
            transform: translateY(0px);
            background-color: rgba(0, 0, 0, 0.7);
            box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.7);
        `}
    ${(props) =>
        props.scrollDirection === 'down' &&
        !props.scrollToTop &&
        css`
            height: 80px;
            transform: translateY(calc(-80px) * -1);

            box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.7);
        `}
        @media screen and (max-width: 768px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    padding: 0 0;

    ${Container}
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    &:hover {
        color: #ff0000;
    }
`;

export const NavIcon = styled(FaEthereum)`
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ol`
    display: flex;
    align-items: center;
    text-align: center;
    list-style: none;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 768px) {
        display: none;
        /* flex-direction: column;
        width: 70%;
        height: 90vh;
        outline: 0;
        position: fixed;
        top: 80px;
        right: ${({ click }) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        background: #000000;
        box-shadow: -10px 0px 30px -15px rgba(0, 0, 0, 0.7);
        visibility: ${(props) => (props.menuOpen ? 'visible' : 'hidden')}; */
        /* display: none; */
    }
`;
export const NavItem = styled.li`
    display: inline-block;
    height: 80px;
    white-space: nowrap;
    /* border-bottom: 2px solid transparent; */
    margin: 0 5px;
    position: relative;
    counter-increment: item 1;
    font-size: 13px;

    &:hover {
        /* border-bottom: 2px solid #4b59f7; */
    }

    @media screen and (max-width: 768px) {
        display: flex;
        width: 100%;

        &:hover {
            border: none;
        }
    }
`;
export const NavLinks = styled(Link)`
    /* padding: 10px; */

    color: #fff;
    display: flex;
    align-items: center;

    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    &:hover,
    &:active,
    &:focus {
        color: #ff0000;
        outline: 0;
    }
    &:before {
        content: '0' counter(item) '.';
        margin-right: 5px;
        color: #ff0000;
        text-align: right;
    }
    &:after {
        box-sizing: inherit;
    }

    @media screen and (max-width: 768px) {
        font-size: 18px;
        text-align: center;
        padding: 2rem;
        width: 100%;
        /* display: flex !important; */
        flex-direction: column;
        justify-content: center;
        list-style: none;

        &:hover {
            color: #ff0000;
            transition: all 0.3s ease;
        }
    }
`;

export const Button = styled.div`
    color: #ff0000;
    background-color: transparent;
    border: 1px solid #ff0000;
    border-radius: 4px;
    padding: 1.25rem 1.75rem;
    font-size: 14px;
    /* font-family: var(--font-mono); */
    /* line-height: 1; */
    text-decoration: none;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover,
    &:focus,
    &:active {
        background-color: rgba(255, 0, 0, 0.2);
        outline: none;
    }
    &:after {
        display: none !important;
    }
    padding: 8px 16px;
    margin: 10% auto 0;
    width: max-content;

    @media screen and (max-width: 768px) {
        font-size: 18px;
        /* width: 30%; */
    }
`;

export const NavItemBtn = styled.li`
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
`;
