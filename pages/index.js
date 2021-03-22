import BaseInfo from "../components/BaseInfo";
import Summary from "../components/Summary";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background: #eee;
    line-height: 1.6;
    font-family: 'Raleway', sans-serif;
  }
`;
const Wrapper = styled.div`
  background: #fff;
  display: flex;
  max-width: 1020px;
  padding: 20px;
`;
const Leading = styled.div`
  flex: 1;
  padding: 0 20px 0 0;
`;
const Trailing = styled.div`
  flex: 2;
  padding: 0 0 0 20px;
`;

export default function Home() {
  return (
    <Wrapper>
      <Leading>
        <BaseInfo />
        <Summary />
        <Skills />
      </Leading>

      <Trailing>
        <Experience />
        <Education />
      </Trailing>

      <GlobalStyles />
    </Wrapper>
  );
}
