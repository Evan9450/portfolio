import styled from 'styled-components';

export const HeroWrapper = styled.div`
    display: flex;
    justify-content: center;

    /* align-items: center; */
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    background: #000000;
`;

//Greeting
// NameSection
// SimpleIntro
// DescribeSection
// GetInTouch
export const HeroSection = styled.section`
    margin-left: 40px;
    margin-right: 40px;
`;

export const Greeting = styled.h1`
    color: #ff0000;
    /* font-family: var(--font-mono); */
    font-size: clamp(14px, 5vw, 16px);
    font-weight: 400;
    @media (max-width: 480px) {
        margin: 0 0 20px 2px;
    }
`;
export const NameSection = styled.h2`
    /* margin: 0 0 10px 0; */
    font-weight: 600;
    line-height: 1.1;
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
    color: #a8b2d1;
`;
export const SimpleIntro = styled.h3`
    /* margin: 0 0 10px 0; */
    font-weight: 600;
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
    /* line-height: 1.1; */
    margin-top: 10px;
    color: #b6bed6;
    line-height: 0.9;
`;
export const DescribeSection = styled.p`
    color: #7c7c7c;
    line-height: 1.1;
    margin: 20px 0 0;
    max-width: 500px;
`;
export const GetInTouch = styled.section`
    color: #ff0000;
    background-color: transparent;
    border: 1px solid #ff0000;
    border-radius: 4px;
    display: inline-block;
    position: relative;
    padding: 1.25rem 1.75rem;
    font-size: 14px;

    /* font-family: var(--font-mono); */
    line-height: 1;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:hover,
    &:focus,
    &:active {
        outline: none;
        background-color: rgb(255, 0, 0, 0.2);
        /* opacity: 0.5; */
        /* transparent: 0.3; */
    }

    &:after {
        display: none !important;
    }
    margin-top: 50px;
`;
