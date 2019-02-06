import React from "react";
import styled from '@emotion/styled'

import { dimensions } from "../styles/variables";

const StyledPage = styled.div`
  display: flex;
  padding: ${dimensions.containerPadding}rem;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Page = ({ children, className, id, style }) => (
  <StyledPage id={id} className={className} style={style}>
    {children}
  </StyledPage>
);

export default Page;
