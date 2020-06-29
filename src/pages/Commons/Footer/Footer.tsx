import React from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { GithubOutline } from '@styled-icons/evaicons-outline/GithubOutline';
import { TwitterOutline } from '@styled-icons/evaicons-outline/TwitterOutline';
import { LinkedinOutline } from '@styled-icons/evaicons-outline/LinkedinOutline';

type myFooterProps = {
  page: string;
};

const StyledFooter = styled.footer`
  grid-area: ft;
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ page }: myFooterProps) =>
    page === 'ABOUT' ? 'flex-start' : 'space-between'};
  background: #040404;
  height: 70px;
  width: 100%;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const StyledSpan = styled.span`
  color: #cccccc;
  padding: 0 10px;
  letter-spacing: 1px;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  margin: 0;
`;

const StyledIcon = css`
  color: #808080;
  width: 25px;
  height: 25px;
  margin: 0 10px;
`;

const StyledGithubIcon = styled(GithubOutline)`
  ${StyledIcon}
`;

const StyledTwitterIcon = styled(TwitterOutline)`
  ${StyledIcon}
`;

const StyledLinkeIndIcon = styled(LinkedinOutline)`
  ${StyledIcon}
`;

export default function Footer() {
  let location = useLocation();
  const currentPage = location.pathname
    .replace(/^\/([^/]*).*$/, '$1')
    .toUpperCase();
  return (
    <StyledFooter>
      <Container page={currentPage}>
        <StyledSpan>{currentPage}</StyledSpan>
        <SocialMediaContainer>
          <Link href="https://github.com/davidarce/" target="_blank">
            <StyledGithubIcon />
          </Link>
          <Link href="https://twitter.com/_davidarce/" target="_blank">
            <StyledTwitterIcon />
          </Link>
          <Link href="https://linkedin.com/in/davidarce92/" target="_blank">
            <StyledLinkeIndIcon />
          </Link>
        </SocialMediaContainer>
      </Container>
    </StyledFooter>
  );
}
