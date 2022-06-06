import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.2em solid ${(props) => props.theme.borderColor};
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.15em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: ${(props) => props.theme.textColor};
  font-size: 1em;
  background-color: ${(props) => props.theme.backgroundColor};
  text-align: center;
  transition: all 0.2s;
  margin-bottom: 3%;
  margin-right: 2%;
  &: hover {
    color: ${(props) => props.theme.backgroundColor};
    background-color: ${(props) => props.theme.textColor};
  }
`;

export const A = styled.a`
  display: inline-block;
  flex-direction: column;justify-content: center;
  padding: 0.35em 1.2em;
  border: 0.2em solid ${(props) => props.theme.borderColor};
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.15em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: ${(props) => props.theme.textColor};
  font-size: 1em;
  background-color: ${(props) => props.theme.backgroundColor};
  text-align: center;
  transition: all 0.2s;
  margin-bottom: 3%;
  margin-left: 2%;
  &: hover {
    color: ${(props) => props.theme.backgroundColor};
    background-color: ${(props) => props.theme.textColor};
  }
`;

export const H1 = styled.h1`
  font-size: 3.5em;
  font-style: italic;
`;

export const Header = styled.div`
  /* border: 0.5em solid ${(props) => props.theme.borderColor}; */
  display: flex;
  flex-flow: column;
  width: 80%;
  align-content: center;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  text-align: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

export const PhotoCard = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const TitleDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const BigImg = styled.img`
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  border: 0.5em double ${(props) => props.theme.borderColor};
`;

export const H3 = styled.h3`
  font-size: 1.5em;
  margin-bottom: 0.5%;
`;

export const P = styled.p`
  width: 80;
  margin-left: 10%;
  margin-right: 10%;
  text-align: left;
`;
