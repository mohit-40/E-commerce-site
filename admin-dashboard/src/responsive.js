import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 750px) {
      ${props}
    }
  `;
};


/*
export const tv = (props) => {
  return css`
    @media screen and (max-width: 1024px) {
      ${props}
    }
  `;
};
export const laptop = (props) => {
  return css`
    @media screen and (max-width: 950px) {
      ${props}
    }
  `;
};
export const tablet = (props) => {
  return css`
    @media screen and (max-width: 650px) {
      ${props}
    }
  `;
};
export const mobile = (props) => {
  return css`
    @media screen and (max-width: 480px) {
      ${props}
    }
  `;
};
*/



/*

@media screen and (max-width: 1024px) {
  your font  style goes here
  
  }
  
  @media screen and (max-width: 950px) {
   your font  style goes here
  
  }
  
  
  @media screen and (max-width: 650px) {
   your font  style goes here
  
  
  }
  
  @media screen and (max-width: 480px) {
   your font  style goes here
  
  }

  */