import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppStyled, PageContainer } from "./AppStyled";
import { Aside } from "./Aside/Aside";
import { Header } from "./Header/Header";
import { Main } from "pages/Main";

const theme = {
  mainBackground: "wheat",
  borderColor: "black"
}


export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        <Aside/>
        <PageContainer>
          <Header/>
          <Routes>
            <Route path="/" element={<Main/>}/>
          </Routes>
        </PageContainer>
      </AppStyled>
    </ThemeProvider>
  );
};
