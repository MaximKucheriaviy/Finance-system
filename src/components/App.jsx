import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppStyled, PageContainer } from "./AppStyled";
import { Aside } from "./Aside/Aside";
import { Header } from "./Header/Header";
import { Main } from "pages/Main/Main";
import { Statistic } from "pages/Statistic/Statistic";
import { Calculator } from "pages/Calculator/Calculator";
import { Usages } from "pages/Usages/Usages";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";


const theme = {
  mainBackground: "wheat",
  borderColor: "black"
}

const initialState = {
  userName: ""
}

const rootReduser = (state = initialState, action) => {
  switch (action.type){
    case "userName/setUsername":
      return {
        userName: action.payload
      }
    default:
      return state;
  }
};

const strore = configureStore({
  reducer: rootReduser
})

export const App = () => {
  return (
    <Provider store={strore}>
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
            </Routes>
          </PageContainer>
        </AppStyled>
      </ThemeProvider>
    </Provider>
  );
};
