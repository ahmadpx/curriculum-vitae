import styled from "styled-components";
import SectionTitle from "../SectionTitle";

const Wrapper = styled.div``;
const SkillsList = styled.ul`
  font-size: 12px;
  font-weight: 500;
  padding-left: 20px;
`;
const Skill = styled.li``;

function Skills() {
  return (
    <Wrapper>
      <SectionTitle>Skills</SectionTitle>
      <SkillsList>
        <Skill>JavaScript, VueJS, AngularJS, React.js, jQuery, JSX, AJAX</Skill>
        <Skill>HTML5, CSS3 , SASS , PostCSS, SEO</Skill>
        <Skill>BEM, ITCSS</Skill>
        <Skill>Git, Github, Bitbucket</Skill>
        <Skill>Webpack, Gulp , Yarn , NPM, Bower, Yeoman</Skill>
        <Skill>Unit test, Jest</Skill>
        <Skill>OOP, MVC, Design Patterns, Algorithms</Skill>
        <Skill>APIs, REST</Skill>
        <Skill>NodeJS, PHP</Skill>
        <Skill>Agile, JIRA, Youtrack, Teamwork, Research</Skill>
        <Skill>Photoshop, Adobe Illustrator, Edge Animate</Skill>
      </SkillsList>
    </Wrapper>
  );
}

export default Skills;
