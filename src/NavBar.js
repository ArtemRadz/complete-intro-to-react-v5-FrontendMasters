import React from "react";

import { Link } from "@reach/router";
import { css } from "@emotion/core";

const NavBar = () => (
  <header
    css={css`
      padding: 15px;
    `}
  >
    <Link to="/">Adopt Me!</Link>
  </header>
);

export default NavBar;
