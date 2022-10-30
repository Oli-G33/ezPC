import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading
} from './FooterStyles';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone
} from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <Box>
      <h5 style={{ color: 'gray', textAlign: 'center', marginTop: '-50px' }}>
        ©{year} <i>Oliver Garcia</i>
      </h5>

      <IconContext.Provider
        value={{
          color: 'white',
          size: '1.5em'
        }}
      >
        <a target="_blank" href="https://github.com/Oli-G33/ezPC">
          <AiOutlineGithub />
        </a>
        <a target="_blank" href="https://linkedin.com/in/oliver-garcia3">
          <AiOutlineLinkedin />
        </a>
        <br></br>
        <AiOutlinePhone />
        <h4>+49 1795 385452</h4>
        <AiOutlineMail />
        <h4>ngarcia333@gmail.com</h4>
      </IconContext.Provider>
    </Box>
  );
};
export default Footer;
