import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from "./styles";

interface ISidebarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

function Sidebar({ isMenuOpen, toggleMenu }: ISidebarProps) {
  return (
    <>
      <SidebarContainer isMenuOpen={isMenuOpen} onClick={toggleMenu}>
        <Icon onClick={toggleMenu}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu onClick={toggleMenu}>
            <SidebarLink to="about" onClick={toggleMenu}>
              About
            </SidebarLink>
            <SidebarLink to="discover" onClick={toggleMenu}>
              Discover
            </SidebarLink>
            <SidebarLink to="services" onClick={toggleMenu}>
              Services
            </SidebarLink>
            <SidebarLink to="signup" onClick={toggleMenu}>
              Sign Up
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
