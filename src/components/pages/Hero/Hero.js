import {
    DescribeSection,
    GetInTouch,
    Greeting,
    HeroSection,
    HeroWrapper,
    NameSection,
    SimpleIntro,
} from './style';

import React from 'react';

function Hero() {
    const topLine = <Greeting>Hi, my name is</Greeting>;
    const secondLine = <NameSection>Liang Shi.</NameSection>;
    const thirdLine = <SimpleIntro>I build things for websites.</SimpleIntro>;
    const fourthLine = (
        <DescribeSection>I am a software developer based in Adelaide, SA</DescribeSection>
    );
    const lastLine = <GetInTouch>Get In Touch</GetInTouch>;

    const items = [topLine, secondLine, thirdLine, fourthLine, lastLine];
    return (
        <HeroWrapper>
            <HeroSection>
                {items.map((item, i) => (
                    <div key={i}>{item}</div>
                ))}
            </HeroSection>
        </HeroWrapper>
    );
}
export default Hero;
