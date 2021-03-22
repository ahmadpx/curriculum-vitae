import styled from "styled-components";
import SectionTitle from "../SectionTitle";

const Wrapper = styled.div`
  margin-bottom: 20px;
`;
const Item = styled.article`
  margin-bottom: 10px;
`;
const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Institution = styled.div`
  font-weight: bold;
  font-size: 15px;

  a {
    &,
    &:visited,
    &:active {
      color: #04a0ca;
      text-decoration: none;
    }
  }
`;
const Period = styled.div`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`;
const Degree = styled.h4`
  margin: 0 0 15px;
  font-size: 15px;
  font-weight: 500;
`;
const Summary = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

function Education() {
  return (
    <Wrapper>
      <SectionTitle align={"left"}>Education</SectionTitle>

      <Item>
        <MainInfo>
          <Institution>
            SHOUBRA FACULTY OF ENGINEERING - BENHA UNIVERSITY
          </Institution>
          <Period>2009 - 2015</Period>
        </MainInfo>

        <Degree>Bachelor’s Degree, Electrical Power Department,</Degree>

        <Summary>
          IT Member at ( LIFE student activity ), IT Member at ( IEEE branch ),
          IT Head at ( Utopia Family ).
        </Summary>
      </Item>
    </Wrapper>
  );
}

export default Education;
