import React, { useState } from "react";

import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const NavBar = () => {
  const [padding, setPadding] = useState(15);

  const spin = keyframes`
    to {
      transform: rotate(360deg)
    }
  `;

  return (
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: ${colors.primary};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          cursor: pointer;
          display: inline-block;
          animation: 2s ${spin} linear infinite;
          &:hover {
            animation: 2s ${spin} linear infinite reverse;
          }
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
