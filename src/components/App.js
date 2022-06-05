import React, { useState, useEffect } from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./GlobalStyle";
import { lightTheme, darkTheme } from "./Themes";
import {
  P,
  A,
  BigImg,
  Button,
  H1,
  H3,
  Header,
  Nav,
  PhotoCard,
  TitleDate,
} from "./Components";

function CardGetter() {
  const [randomDay, setRandomDay] = useState();
  const getRandom = () => {
    const year = (Math.floor(Math.random() * (2017 - 1995)) + 1995).toString();
    const month = (Math.floor(Math.random() * (13 - 1)) + 1).toString();
    const day = (Math.floor(Math.random() * (31 - 1)) + 1).toString();
    setRandomDay(
      `${year}-${month.length === 1 ? `0${month}` : month}-${
        day.length === 1 ? `0${day}` : day
      }`
    );
  };

  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [cardDetails, setCardDetails] = useState();
  useEffect(() => {
    const url = randomDay
      ? `https://api.nasa.gov/planetary/apod?date=${randomDay}&api_key=ak9UJZ9J4bKzbshagI9bwVLLpTTVmnpWmAZRXbRq`
      : "https://api.nasa.gov/planetary/apod?api_key=ak9UJZ9J4bKzbshagI9bwVLLpTTVmnpWmAZRXbRq";
    axios.get(url).then((response) => setCardDetails(response.data));
  }, [randomDay]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <Header>
          <H1>NASA Photo Of The Day</H1>
          <Nav>
            <Button>Home</Button>
            <A target="_blank" href="https://www.linkedin.com/in/sam-bezzant/">
              Contact
            </A>
            <Button onClick={getRandom}>Get Random Image</Button>
            <Button onClick={themeToggler}>Dark/Light Mode</Button>
          </Nav>
        </Header>
        {cardDetails && (
          <PhotoCard>
            <TitleDate>
              <H3>{cardDetails.title}</H3>
              <H3>{cardDetails.date}</H3>
            </TitleDate>
            <BigImg src={cardDetails.hdurl}></BigImg>
            <P>{cardDetails.explanation}</P>
            <P>{cardDetails.copyright}</P>
          </PhotoCard>
        )}
      </div>
    </ThemeProvider>
  );
}
function App() {
  return (
    <div className="App">
      <CardGetter />
    </div>
  );
}

export default App;
