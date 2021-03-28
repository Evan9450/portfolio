// import './Footer.css';

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FooterLink, FooterWrapper, StyledCredit } from './style';

import Icon from '../../icons/Icon';
// import IconLogo from '../../icons/Logo';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import React from 'react';
import { socialMedia } from '../../../config';

function Footer() {
    return (
        <>
            <FooterWrapper>
                <FooterLink>
                    <ul>
                        {socialMedia &&
                            socialMedia.map(({ name, url }, i) => (
                                <li key={i}>
                                    <a href={url} aria-label={name}>
                                        <Icon name={name} />
                                    </a>
                                </li>
                            ))}
                    </ul>
                </FooterLink>
                <StyledCredit>
                    <small className="website-rights">Designed and build by Evan Shi </small>
                </StyledCredit>
            </FooterWrapper>
        </>
    );
}

export default Footer;
