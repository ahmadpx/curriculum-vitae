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
        <Skill>TypeScript, JavaScript, NextJS, React, React Native, Vue, JQuery, JSX, AJAX</Skill>
        <Skill>Mobx, Redux</Skill>
        <Skill>HTML5, CSS3, SASS, PostCSS, SEO</Skill>
        <Skill>BEM, ITCSS</Skill>
        <Skill>Git, Github, Bitbucket</Skill>
        <Skill>Lerna, TruboRepo, Gluegun</Skill>
        <Skill>Yarn, NPM, Webpack, Parcel, Gulp, Bower, Yeoman</Skill>
        <Skill>Amplitude, Customer.io, DataDog</Skill>
        <Skill>Storybook, Unit testing, Jest</Skill>
        <Skill>OOP, MVC, Design Patterns, Algorithms</Skill>
        <Skill>APIs, REST, SQL</Skill>
        <Skill>NodeJS, Ruby, Rails</Skill>
        <Skill>Agile, JIRA, Youtrack, Teamwork, Research</Skill>
        <Skill>Photoshop, Adobe Illustrator, Edge Animate</Skill>
      </SkillsList>
    </Wrapper>
  );
}

export default Skills;
