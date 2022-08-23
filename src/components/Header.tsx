import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "assets/shared/logo.svg";
import * as S from "./styles/Header.styled";

function Header() {
  const [navToggleState, setNavToggleState] = useState(false);

  const handleNavToggle = () => {
    setNavToggleState(!navToggleState);
  };

  return (
    <S.Header>
      <S.LogoContainer>
        <img src={logo} alt="Logo" />
      </S.LogoContainer>

      <S.NavToggle
        aria-controls="primary-navigation"
        navToggleState={navToggleState}
        onClick={handleNavToggle}
      >
        <span aria-expanded={navToggleState} className="sr-only">
          Menu
        </span>
      </S.NavToggle>

      <S.Nav
        as="nav"
        navToggleState={navToggleState}
        id="primary-navigation"
        className="glass-morphism underline-indicators"
      >
        <NavLink to="/">
          <span>00</span> HOME
        </NavLink>
        <NavLink to="/destination">
          <span>01</span> DESTINATION
        </NavLink>
        <NavLink to="/crew">
          <span>02</span> CREW
        </NavLink>
        <NavLink to="/technology">
          <span>03</span> TECHNOLOGY
        </NavLink>
      </S.Nav>
    </S.Header>
  );
}

export default Header;
