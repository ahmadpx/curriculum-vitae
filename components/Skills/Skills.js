import styled from 'styled-components';

const Wrapper = styled.div`
  .skills {
    &__title {
      font-size: 15px;
      font-weight: 600;
      text-align: center;
      text-transform: uppercase;
    }

    &__list {
      font-size: 12px;
      font-weight: 500;
      padding-left: 20px;
    }

    &__listItem {
      margin-bottom: 5px;
    }
  }
`;

function Skills() {
  return <Wrapper>
      <h2 className="skills__title">Skills</h2>
      <ul className="skills__list">
        <li className="skills__listItem">JavaScript, VueJS, AngularJS, React.js, jQuery, JSX, AJAX</li>
        <li className="skills__listItem">HTML5, CSS3 , SASS , PostCSS, SEO</li>
        <li className="skills__listItem">BEM, ITCSS</li>
        <li className="skills__listItem">Git, Github, Bitbucket</li>
        <li className="skills__listItem">Webpack, Gulp , Yarn , NPM, Bower, Yeoman</li>
        <li className="skills__listItem">Unit test, Jest</li>
        <li className="skills__listItem">OOP, MVC, Design Patterns, Algorithms</li>
        <li className="skills__listItem">APIs, REST</li>
        <li className="skills__listItem">NodeJS, PHP</li>
        <li className="skills__listItem">Agile, JIRA, Youtrack, Teamwork, Research</li>
        <li className="skills__listItem">Photoshop, Adobe Illustrator, Edge Animate</li>
      </ul>
  </Wrapper>;
}


export default Skills;
