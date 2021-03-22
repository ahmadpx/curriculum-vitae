import styled from "styled-components";

const Wrapper = styled.section`
  .baseInfo {
    &__avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 15px;
      display: block;
      border: 1px solid black;
    }

    &__name {
      text-align: center;
      margin: 0 auto 10px;
      font-size: 24px;
      font-weight: 600;
      line-height: 1.4;
      text-transform: uppercase;
    }

    &__seperator {
      display: none;
      width: 25px;
      height: 2px;
      background: #000;
      margin: 0 auto 30px;
      display: block;
    }

    &__jobTitle {
      text-align: center;
      margin: 0 auto 30px;
      font-weight: 600;
      font-size: 15px;
    }

    &__meta {
      list-style: none;
      text-align: center;
      padding: 0;
      margin-bottom: 30px;
    }

    &__metaItem {
      font-weight: 500;
      font-size: 12px;
      margin-bottom: 0;
      text-align: center;
    }

    &__metaLink {
      white-space: nowrap;

      &,
      &:visited,
      &:active {
        color: #04a0ca;
        text-decoration: none;
      }
    }
  }
`;

function BaseInfo() {
  return (
    <Wrapper>
      <img
        src="//media-exp1.licdn.com/dms/image/C5603AQF-SSY0kL17FQ/profile-displayphoto-shrink_400_400/0/1547273969335?e=1622073600&v=beta&t=JYihBcs9bg43-MScCZJh4rC_pQSMmI8akORZyTEK5fM"
        alt=""
        className="baseInfo__avatar"
      />

      <h1 className="baseInfo__name">Ahmed Abdallah</h1>

      <h2 className="baseInfo__jobTitle">Senior Front End Engineer</h2>

      <ul className="baseInfo__meta">
        <li className="baseInfo__metaItem"> Egypt, EG</li>
        <li className="baseInfo__metaItem"> +2 0111 94 88 558</li>
        <li className="baseInfo__metaItem">
          <a href="mailto:ahmadpx@hotmail.com" className="baseInfo__metaLink">
            ahmadpx@hotmail.com
          </a>
        </li>
        <li className="baseInfo__metaItem">
          <a
            href="https://www.linkedin.com/in/ahmed-abdallah-6047b644"
            className="baseInfo__metaLink"
          >
            linkedin.com/in/ahmed-abdallah-6047b644
          </a>
        </li>
      </ul>
    </Wrapper>
  );
}

export default BaseInfo;
