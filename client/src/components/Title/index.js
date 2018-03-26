import React from 'react';
import styled from 'react-emotion';

const Root = styled('h1') `
    text-align: center;
`;


const Title = ({ children, ...rest }) => {
    return (
        <Root {...rest}>
            {children}
        </Root>
    );
};

export default Title;