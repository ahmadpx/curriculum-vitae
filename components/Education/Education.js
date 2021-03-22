import styled from 'styled-components';

const Wrapper = styled.div`
  .education {
    margin-bottom: 20px;

    &__title {
      text-transform: uppercase;
      font-size: 15px;
      font-weight: 600;
      margin: 0 0 20px;
    }

    &__item {
      margin-bottom: 10px;
    }

    &__mainInfo {
      display: flex;
      justify-content: space-between;
    }

    &__organization {
      font-weight: bold;
      font-size: 15px;

      &--link {
        &, &:visited, &:active {
          color: #04a0ca;
          text-decoration: none;
        }
      }
    }

    &__period {
      font-size: 15px;
      font-weight: 500;
      white-space: nowrap;
    }

    &__jobTitle {
      margin: 0 0 15px;
      font-size: 15px;
      font-weight: 500;
    }

    &__desc {
      font-size: 12px;
      font-weight: 500;
    }
  }`;

function Education() {
  return <Wrapper>
      <h2 className="education__title">Education</h2>
    
      <article className="education__item">
        <div className="education__mainInfo">
          <div className="education__organization">SHOUBRA FACULTY OF ENGINEERING - BENHA UNIVERSITY</div>
          <div className="education__period">2009 - 2015</div>
        </div>
      
        <h4 className="education__jobTitle">Bachelor’s Degree, Electrical Power Department,</h4>
      
        <p className="education__desc">
          IT Member at ( LIFE student activity ), IT Member at ( IEEE branch ), IT Head at ( Utopia Familty ).
        </p>
      </article>
  </Wrapper>;
}


export default Education;
