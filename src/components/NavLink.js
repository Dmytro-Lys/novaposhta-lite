import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Navlink = styled(NavLink)`
  color: black;

  &.active {
    color: darkblue;
  }
`;