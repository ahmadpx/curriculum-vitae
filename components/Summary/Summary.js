import styled from "styled-components";
import SectionTitle from "../SectionTitle";

const Wrapper = styled.div`
  margin-bottom: 30px;
`;
const Content = styled.p`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;

function Summary() {
  return (
    <Wrapper>
      <SectionTitle>Summary</SectionTitle>
      <Content>
        I'm a Front End Engineer who adores problem solving. Web is my passion.
        All technologies that step in daily in our lives in the web industry
        makes it so hard to keep up, but this is the point that make it so
        energizing and kicking me up to be up to date, observing, learning and
        doing wonderful stuff every day, that’s why i’m in love with my work and
        committed to it.
      </Content>
    </Wrapper>
  );
}

export default Summary;
