import styled, { createGlobalStyle } from 'styled-components';

import RobotoMonoIatinRegularWoff from './components/fonts/Roboto_Mono/roboto-mono-v13-latin-regular.woff';
import RobotoMonoIatinRegularWoff2 from './components/fonts/Roboto_Mono/roboto-mono-v13-latin-regular.woff2';

export const GlobalStyleAll = createGlobalStyle`
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed, 
        figure, figcaption, footer, header, hgroup, 
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font-family: 'Roboto Mono', monospace;;
            vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure, 
        footer, header, hgroup, menu, nav, section {
            display: block;
        }
        body {
            line-height: 1;
        }
        ol, ul {
            list-style: none;
        }
        blockquote, q {
            quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
            content: '';
            content: none;
        }
        table {
            border-collapse: collapse;
            border-spacing: 0;
        }
      
        *{
            /* @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap'); */
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            
        }
        section {
            margin: 0 auto;
            padding: 100px 0;
            max-width: 1000px;
            @media (max-width: 768px) {
            padding: 80px 0;
            }
            @media (max-width: 480px) {
            padding: 60px 0;
            }
        }
        button{
            color: #ff0000;
            background-color: transparent;
            border: 1px solid #ff0000;
            border-radius: 4px;
            
            line-height: 1;
            text-decoration: none;
            cursor: pointer;
            /* transition: var(--transition); */
            padding: 1.25rem 1.75rem;
            &:hover,
            &:focus,
            &:active {
                background-color: #000000;
                outline: none;
            }
            &:after {
                display: none !important;
            }
        }
 
        
`;

export const Container = styled.div`
    z-index: 12;
    width: 100%;
    max-width: 1400px;
    margin-right: 0;
    margin-left: 0;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-left: 30px;
        padding-right: 30px;
    }
`;
