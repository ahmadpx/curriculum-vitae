import React from "react";
import styled from "styled-components";

const Wrapper = styled.h2`
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`;

function SectionTitle({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default SectionTitle;
