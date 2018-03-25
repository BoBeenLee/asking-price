import React from 'react';
import { Menu, Icon } from 'antd';
import styled from 'react-emotion';

const MenuItem = styled(Menu.Item) `
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
    height: 80px;
`;

const Header = () => {
    return (
        <Menu
            mode="horizontal">
            <MenuItem key="home">
                <Icon type="home" />Home
            </MenuItem>
        </Menu>
    );
};

export default Header;