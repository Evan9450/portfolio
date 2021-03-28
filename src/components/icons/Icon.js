//     IconGitHub,
//     IconInstagram,
//     IconLinkedin,
// } from '../icons';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import PropTypes from 'prop-types';
import React from 'react';

// import {

const Icon = ({ name }) => {
    switch (name) {
        case 'GitHub':
            return <FaGithub />;
        case 'Instagram':
            return <FaInstagram />;
        case 'Linkedin':
            return <FaLinkedin />;

        // default:
        //     return <IconExternal />;
    }
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Icon;
