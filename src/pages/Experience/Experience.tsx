import React from 'react';
import styled from 'styled-components';
import LogoCeiba from '../../images/logo-ceiba.png';
import LogoAlmundo from '../../images/logo-almundo.svg';
import LogoHBT from '../../images/logo-hbt.png';

import { Carousel } from './components/Carousel';

interface Experiences {
  [company: string]: IExperience;
}

interface IExperience {
  role: string;
  duration: string;
  tasks: string[];
  logo: any;
}

interface ISlide {
  name?: string;
}

const StyledExperienceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  grid-area: main;
  padding: 0 90px;
  background: #040404;

  @media (max-width: 768px) {
    padding: 0 40px;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

const Slide = styled.div<ISlide>`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 60%;

  h2 {
    text-transform: uppercase;
    font-size: 34px;
    margin-bottom: 10px;
    font-weight: 500;
  }

  h3 {
    text-transform: uppercase;
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 400;
  }

  h4 {
    font-size: 14px;
    font-style: italic;
    margin-bottom: 10px;
    font-weight: 400;
    color: #cccccc;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 60px;
  }

  @media (max-width: 480px) {
    margin-bottom: 30px;

    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 16px;
    }

    h4 {
      font-size: 12px;
    }
  }
`;

const CompanyLogo = styled.img`
  width: 27vmin;
  height: auto;

  @media (max-width: 480px) {
    width: 40vmin;
  }
`;

const TaskList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
`;

const TaskItem = styled.li`
  color: #cccccc;
  font-weight: 400;
  font-size: 20px;
  width: 100%;
  margin-left: 20px;
  margin-bottom: 5px;

  @media (max-width: 480px) {
    font-size: 16px;
  }

  @media (max-width: 320px) {
    font-size: 14px;
    width: 90%;
  }
`;

const experienceList: Experiences = {
  ALMUNDO: {
    role: 'Senior Software engineer',
    duration: 'April 2018 - Present',
    tasks: [
      "Development and implementation of Resful API's and components for the company",
      'Integrated with other components and services, solved problems across subsystems and products, to produce a final product',
      'DevOps',
      'A/B testing with Google Analytics',
      'Responsible of application security vulnerabilities',
      'Add improvements to our current processes',
    ],
    logo: LogoAlmundo,
  },
  CEIBA: {
    role: 'Software Architect',
    duration: 'August-2016 - April-2018',
    tasks: [
      'Known in general the scope of the project, the vision and the general goals, as well as its release plan',
      'Develop software requeriments under the language of required programming and with policies, procedures, and guidelines established  by the company for all products',
      'Promote and adequate communication and cooperation environment with the members of the project team',
      'Value the objectives of the project over personal or particular, supporting all team members in the solution of the difficulties',
    ],
    logo: LogoCeiba,
  },
  HEINSOHN: {
    role: 'Software Architect',
    duration: 'June-2012 - August-2016',
    tasks: [
      'Develop software requirements under the language of required programing and with policies, procedures, and guidelines established by the company, for all products',
      'Develop software under the procedures and quality standards established',
      'Serve support in customer service',
    ],
    logo: LogoHBT,
  },
};

function Experience() {
  return (
    <StyledExperienceContainer>
      <Carousel>
        {Object.keys(experienceList).map((company) => (
          <Slide key={company} name={company}>
            <Container>
              <h2>{company}</h2>
              <h3>{experienceList[company].role}</h3>
              <h4>{experienceList[company].duration}</h4>
              <TaskList>
                {experienceList[company].tasks.map((task, index) => (
                  <TaskItem key={`${company}-task-${index}`}>{task}</TaskItem>
                ))}
              </TaskList>
            </Container>
            <CompanyLogo
              src={experienceList[company].logo}
              alt="company logo"
            ></CompanyLogo>
          </Slide>
        ))}
      </Carousel>
    </StyledExperienceContainer>
  );
}

export default Experience;
