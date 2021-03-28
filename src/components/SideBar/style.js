import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

export const StyledMenu = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`;

export const StyledHamburgerButton = styled.button`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 10;
        margin-right: 0.5rem;
        padding: 25px 15px 15px 15px;
        border: 0;
        background-color: transparent;
        color: inherit;
        text-transform: none;
        transition-timing-function: linear;
        transition-duration: 0.15s;
        transition-property: opacity, filter;
    }
    .ham-box {
        display: inline-block;
        position: relative;
        width: 30px;
        height: 24px;
    }
    .ham-box-inner {
        position: absolute;
        top: 50%;
        right: 0;
        width: 30px;
        height: 2px;
        border-radius: 4px;
        background-color: #ff0000;
        transition-duration: 0.22s;
        transition-property: transform;
        transition-delay: ${(props) => (props.menuOpen ? `0.12s` : `0s`)};
        transform: rotate(${(props) => (props.menuOpen ? `225deg` : `0deg`)});
        transition-timing-function: cubic-bezier(
            ${(props) => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
        );
        &:before,
        &:after {
            content: '';
            display: block;
            position: absolute;
            left: auto;
            right: 0;
            width: 30px;
            height: 2px;
            border-radius: 4px;
            background-color: #ff0000;
            transition-timing-function: ease;
            transition-duration: 0.15s;
            transition-property: transform;
        }
        &:before {
            width: ${(props) => (props.menuOpen ? `100%` : `120%`)};
            top: ${(props) => (props.menuOpen ? `0` : `-10px`)};
            opacity: ${(props) => (props.menuOpen ? 0 : 1)};
            transition: ${({ menuOpen }) =>
                menuOpen
                    ? 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s'
                    : 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in'};
        }
        &:after {
            width: ${(props) => (props.menuOpen ? `100%` : `80%`)};
            bottom: ${(props) => (props.menuOpen ? `0` : `-10px`)};
            transform: rotate(${(props) => (props.menuOpen ? `-90deg` : `0`)});
            transition: ${({ menuOpen }) =>
                menuOpen
                    ? 'bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s'
                    : 'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
        }
    }
`;

export const SideBarWrapper = styled.aside`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        padding: 50px 10px;
        width: min(75vw, 400px);
        height: 100vh;
        outline: 0;
        background-color: #000000;
        box-shadow: -10px 0px 30px -15px rgba(0, 0, 0, 0.7);
        z-index: 9;
        transform: translateX(${(props) => (props.menuOpen ? 0 : 100)}vw);
        visibility: ${(props) => (props.menuOpen ? 'visible' : 'hidden')};
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        flex-direction: column;
        color: #ccd6f6;
        /* font-family: var(--font-mono); */
        text-align: center;
    }
    ol {
        padding: 0;
        margin: 0;
        list-style: none;
        width: 100%;
        li {
            position: relative;
            margin: 0 auto 20px;
            counter-increment: item 1;
            font-size: clamp(14px, 4vw, 18px);
            @media (max-width: 600px) {
                margin: 0 auto 10px;
            }
            &:before {
                content: '0' counter(item) '.';
                display: block;
                margin-bottom: 5px;
                margin-top: 5px;
                color: #ff0000;
                font-size: 14px;
            }
        }
        a {
            display: inline-block;
            text-decoration: none;
            text-decoration-skip-ink: auto;
            color: inherit;
            position: relative;
            transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
            cursor: pointer;
            &:hover,
            &:active,
            &:focus {
                color: #ff0000;
                outline: 0;
            }
            width: 100%;
            padding: 3px 20px 20px;
        }
    }
    .resume-link {
        color: #ff0000;
        background-color: transparent;
        border: 1px solid #ff0000;
        border-radius: 4px;
        padding: 1.25rem 1.75rem;
        font-size: 14px;
        /* font-family: var(--font-mono); */
        line-height: 1;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:hover,
        &:focus,
        &:active {
            background-color: rgba(255, 0, 0, 0.1);
            outline: none;
        }
        &:after {
            display: none !important;
        }
        padding: 18px 50px;
        margin: 10% auto 0;
        width: max-content;
    }
`;

// export const CloseIcon = styled(FaTimes)`
//     color: #fff;
// `;
