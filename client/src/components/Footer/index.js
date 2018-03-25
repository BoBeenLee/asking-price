import React from "react";
import styled from 'react-emotion';

const Root = styled('div') `
    height: 150px;
    background: ${props => props.theme.backgroundColor};
    opacity: 0.7;
`;

const Footer = () => {
    return (
        <Root />
    );
};

export default Footer;