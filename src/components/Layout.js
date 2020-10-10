import React from "react";
import { Container } from "./component.styled";
import PropTypes from 'prop-types';

const Layout = ({ children }) => <Container>{children}</Container>;

export default Layout;


Layout.propTypes={
    children: PropTypes.node, 
}