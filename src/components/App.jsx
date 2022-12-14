import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppStyled, PageContainer } from "./AppStyled";
import { Aside } from "./Aside/Aside";
import { Header } from "./Header/Header";
import { Main } from "pages/Main/Main";
import { Statistic } from "pages/Statistic/Statistic";
import { Calculator } from "pages/Calculator/Calculator";
import { Usages } from "pages/Usages/Usages";
import { Autorisation } from "pages/Autorisation/Autorisation";
import { Loader } from "./Loader/Loader";



const theme = {
  mainBackground: "wheat",
  borderColor: "black",
  inputSelectedColor: "red"
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
              <Route path="statistic" element={<Statistic/>}/>
              <Route path="calculator" element={<Calculator/>}/>
              <Route path="usages" element={<Usages/>}/>
              <Route path="autorisation" element={<Autorisation/>}/>
            </Routes>
          </PageContainer>
          <Loader/>
        </AppStyled>
      </ThemeProvider>
  );
};
