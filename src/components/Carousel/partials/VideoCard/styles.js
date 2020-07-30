import styled from 'styled-components';

export const StyledTitle = styled.span`
  opacity: 0;
  transition: 450ms all;
  position: absolute;
  bottom: 0;
`;

export const VideoCardContainer = styled.a`
  border: 0px solid;
  border-radius: 1px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 260px;
  height: 145px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 1px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  
  display: inline-block;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: 450ms all;
  transform-origin: center left;

  /* transition: opacity .3s; */
  
  &:hover,
  &:focus && {
    transform: translate3d(-40px, 0, 0) scale(1.5);
    opacity: 1;
    z-index: 999;

    & ${StyledTitle} {
      opacity: 1;
      transition: 450ms all;
      transition-delay: 150ms;
      position: absolute;
      bottom: 0;
      z-index: 999999;
      font-size: 15px;
      width: 100%;
      left: 0;
      padding-left: 5%;
      padding-right: 5%;
      text-shadow: 1px 1px 2px #000;
      background:linear-gradient(0deg,#141414 50%,transparent 100%);
    }

  }
  
  &:not(:first-child) {
    margin-left: 5px;
  }



`;
