import React from "react";

import { Link } from "@reach/router";
import { css } from "@emotion/core";
import colors from "./colors";

const NavBar = () => {
  return (
    <header
      css={css`
        background-color: ${colors.primary};
        padding: 15px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 50px;
          display: inline-block;
        `}
        role="img"
        aria-label="logo"
      >
        🐱‍💻
      </span>
    </header>
  );
};

export default NavBar;
