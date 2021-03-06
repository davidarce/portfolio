import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { LeftArrowAlt } from '@styled-icons/boxicons-solid/LeftArrowAlt';
import { RightArrowAlt } from '@styled-icons/boxicons-solid/RightArrowAlt';

interface ICarouselSlide {
  active?: boolean;
  name?: string;
}

interface ICarouselProps {
  currentSlide: number;
}

interface IProps {
  children: JSX.Element[];
}

const CarouselWrapper = styled.div`
  display: flex;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const fade = keyframes`
  from {
    opacity: .4
  }

  to {
    opacity: 1
  }
`;

const CarouselSlide = styled.div<ICarouselSlide>`
  flex: 0 0 auto;
  display: ${(props) => (props.active ? 'block' : 'none')};
  animation-name: ${fade};
  animation-duration: 1s;
  width: 100%;
`;

const CarouselSlides = styled.div<ICarouselProps>`
  display: flex;
  align-items: center;
`;

const StyledIcon = css`
  color: #808080;
  width: 25px;
  height: 25px;
  margin: 0 8px;

  @media (max-width: 480px) {
    width: 27px;
    height: 27px;
  }
`;

const StyledLeftArrowAlt = styled(LeftArrowAlt)`
  ${StyledIcon}
`;

const StyledRightArrowAlt = styled(RightArrowAlt)`
  ${StyledIcon}
`;

const ControlButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 100%;

  h4 {
    font-size: 12px;
    font-weight: 100;
    letter-spacing: 1px;
    margin: 0 6px;
  }

  @media (max-width: 768px) {
    margin-top: 0;

    h4 {
      display: none;
    }
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

const ControlButton = styled.button`
  background: transparent;
  color: #cccccc;
  border: none;
  cursor: pointer;
  outline: none;
`;

export default function Carousel({ children }: IProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const activeSlide = children.map((slide, index) => (
    <CarouselSlide
      active={currentSlide === index}
      name={slide.props.name}
      key={index}
    >
      {slide}
    </CarouselSlide>
  ));

  return (
    <>
      <CarouselWrapper>
        <CarouselSlides currentSlide={currentSlide}>
          {activeSlide}
        </CarouselSlides>
      </CarouselWrapper>
      <ControlButtons>
        <ControlButton
          onClick={() => {
            setCurrentSlide(
              (currentSlide - 1 + activeSlide.length) % activeSlide.length
            );
          }}
        >
          <StyledLeftArrowAlt />
        </ControlButton>
        <h4>{activeSlide[currentSlide].props.name}</h4>
        <ControlButton
          onClick={() => {
            setCurrentSlide((currentSlide + 1) % activeSlide.length);
          }}
        >
          <StyledRightArrowAlt />
        </ControlButton>
      </ControlButtons>
    </>
  );
}
