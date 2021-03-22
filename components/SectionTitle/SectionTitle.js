import React from "react";
import styled from "styled-components";

const Wrapper = styled.h2`
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: ${(props) => props.align};
`;

function SectionTitle({ children, align = "center" }) {
  return <Wrapper align={align}>{children}</Wrapper>;
}

export default SectionTitle;
