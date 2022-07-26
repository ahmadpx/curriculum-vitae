import styled from "styled-components";

const Wrapper = styled.section``;
const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 15px;
  display: block;
  border: 1px solid black;
`;
const Name = styled.h1`
  text-align: center;
  margin: 0 auto 10px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;
`;
const JobTitle = styled.h2`
  text-align: center;
  margin: 0 auto 30px;
  font-weight: 600;
  font-size: 15px;
`;
const Meta = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  margin-bottom: 30px;
`;
const MetaItem = styled.li`
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 0;
  text-align: center;
`;
const MetaLink = styled.a`
  white-space: nowrap;

  &,
  &:visited,
  &:active {
    color: #04a0ca;
    text-decoration: none;
  }
`;

function BaseInfo() {
  return (
    <Wrapper>
      <Avatar
        src="https://i.imgur.com/PcMkKX7.png"
        alt="Ahmed Abdallah"
      />

      <Name>Ahmed Abdallah</Name>

      <JobTitle>Senior Frontend Engineer</JobTitle>

      <Meta>
        <MetaItem>Dubai, United Arab Emirates</MetaItem>
        <MetaItem>+971 052 378 3204</MetaItem>
        <MetaItem>
          <MetaLink href="mailto:ahmadpx@hotmail.com">
            ahmadpx@hotmail.com
          </MetaLink>
        </MetaItem>
        <MetaItem>
          <MetaLink href="https://www.linkedin.com/in/ahmed-abdallah-6047b644">
            linkedin.com/in/ahmed-abdallah-6047b644
          </MetaLink>
        </MetaItem>
      </Meta>
    </Wrapper>
  );
}

export default BaseInfo;
