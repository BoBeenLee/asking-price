import React from 'react';
import { Menu, Icon } from 'antd';

const Header = () => {
    return (
        <Menu
            mode="horizontal">
            <Menu.Item key="home">
                <Icon type="home" />Home
            </Menu.Item>
        </Menu>
    );
};

export default Header;