import styled from 'styled-components';

const Wrapper = styled.div`
  .summary {
    margin-bottom: 30px;

    &__title {
      font-size: 15px;
      font-weight: 600;
      text-align: center;
      text-transform: uppercase;
    }

    &__desc {
      font-size: 12px;
      font-weight: 500;
      text-align: center;
    }
  }
`;

function Summary() {
  return <Wrapper>
    <h2 className="summary__title">Summary</h2>
    <p className="summary__desc">
      I'm a Front End Engineer who adores problem solving. Web is my passion. All technologies that step in
      daily in
      our lives in the web industry makes it so hard to keep up, but this is the point that make it so
      energizing and
      kicking me up to be up to date, observing, learning and doing wonderful stuff every day, that’s why i’m in
      love
      with my work and committed to it.
    </p>
  </Wrapper>;
}

export default Summary;
