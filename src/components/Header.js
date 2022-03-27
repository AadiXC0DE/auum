import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../images/logo.png";
import "./Header.css";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a href="xyz">
        <img className="logo" src={logo} alt=""></img>
      </a>
      <Menu>
        <a href="xyz">HOME</a>

        <a href="xyz">ABOUT</a>

        <a href="xyz">CONTACT</a>

        <a href="xyz">CAREERS</a>
      </Menu>

      <RightMenu>
        <a href="xyz">Shop</a>
        <a href="xyz">AUUM Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerMenu show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>

        <li>
          <a href="xyz">Home</a>
        </li>
        <li>
          <a href="xyz">About</a>
        </li>
        <li>
          <a href="xyz">Contact</a>
        </li>
        <li>
          <a href="xyz">Careers</a>
        </li>
        <li>
          <a href="xyz">Shop</a>
        </li>
        <li>
          <a href="xyz">Cart</a>
        </li>
      </BurgerMenu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 50px;
    flex-wrap: no-wrap;
    text-decoration: none;
    color: #fff;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    text-decoration: none;
    color: #fff;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  color: #fff;
  padding-left: 10px;
`;

const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
      text-decoration: none;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
