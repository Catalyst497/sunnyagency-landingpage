import React from 'react';
import { Link as ScrollLink } from 'react-scroll';


const MyLink = ({ to, children }) => (
  <ScrollLink to={to} smooth={true} duration={500} delay = {0}  offset={-100}>
    {children}
  </ScrollLink>
);

export default MyLink;
