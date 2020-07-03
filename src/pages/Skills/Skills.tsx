import React from 'react';
import styled from 'styled-components';

interface ISkill {
  name: string;
  level: string;
}

type progressBarProps = {
  fill: string;
};

const skillsList: ISkill[] = [
  { name: 'Backend Developer', level: '100%' },
  { name: 'Frontend Developer', level: '80%' },
  { name: 'Java', level: '100%' },
  { name: 'JavaScript', level: '100%' },
  { name: 'Go', level: '70%' },
  { name: 'Spring Boot', level: '100%' },
  { name: 'Nodejs', level: '100%' },
  { name: 'React', level: '80%' },
  { name: 'CSS3', level: '80%' },
  { name: 'RESTful APIs', level: '100%' },
  { name: 'Microservices', level: '100%' },
  { name: 'DevOps', level: '80%' },
  { name: 'Docker', level: '90%' },
  { name: 'Jenkins', level: '80%' },
  { name: 'Git', level: '100%' },
  { name: 'CI/CD', level: '90%' },
  { name: 'Cloud Computing (AWS, GCP)', level: '70%' },
  { name: 'Databases (SQL & NoSQL)', level: '90%' },
  { name: 'Maven', level: '100%' },
  { name: 'Npm', level: '100%' },
  { name: 'Gradle', level: '80%' },
  { name: 'Software testing', level: '100%' },
  { name: 'Agile software development', level: '100%' },
  { name: 'Scrum', level: '100%' },
  { name: 'Design patterns', level: '100%' },
  { name: 'Ecommerce platforms', level: '90%' },
  { name: 'Ecommerce platforms', level: '90%' },
  { name: 'Goal oriented', level: '100%' },
  { name: 'Working with teams', level: '100%' },
];

const StyledSkills = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 80px;
  background: #040404;

  h2 {
    text-transform: uppercase;
    font-size: 34px;
    margin-bottom: 20px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 10px;
  }
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 0 5px 0;
`;

const SkillItem = styled.li`
  color: #cccccc;
  font-weight: 400;
  font-size: 17px;
  width: 250px;
  list-style-type: none;

  @media (max-width: 768px) {
    width: 150px;
  }

  @media (max-width: 480px) {
    width: 140px;
    font-size: 16px;
  }
`;

const StyledProgressBar = styled.div`
  border-radius: 3px;
  height: 15px;
  width: 150px;
  background-color: #808080;

  div {
    border-radius: 3px;
    height: 15px;
    width: ${({ fill }: progressBarProps) => fill};
    background-color: #ffffff;
  }
`;

function ProgressBar({ fill }: any) {
  return (
    <StyledProgressBar fill={fill}>
      <div></div>
    </StyledProgressBar>
  );
}

function Skills() {
  return (
    <StyledSkills>
        <h2>{'My Skills'}</h2>
        <SkillsList>
          {skillsList.map((skill: ISkill, index) => (
            <SkillContainer key={index}>
              <SkillItem>{skill.name}</SkillItem>
              <ProgressBar fill={skill.level}> </ProgressBar>
            </SkillContainer>
          ))}
        </SkillsList>
    </StyledSkills>
  );
}

export default Skills;
