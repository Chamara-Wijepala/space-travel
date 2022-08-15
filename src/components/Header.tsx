import { NavLink } from "react-router-dom";

import logo from "assets/shared/logo.svg";
import * as S from "./styles/Header.styled";

function Header() {
  return (
    <S.Header>
      <div>
        <img src={logo} alt="Logo" />
      </div>

      <S.Nav className="glass-morphism">
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
