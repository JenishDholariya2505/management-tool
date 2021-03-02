import React, { Component } from 'react'
import Themes from "./Core/settings/Theme/Index";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Global";
import 'antd/dist/antd.css';
import AppRouter from "./AppRouter";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { auth, Theme } from './Core/Helper/Data'
import { Provider } from "react-redux";
import store from './Core/Redux/Store'
import './Font.css'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={Themes['DarkThemes']}>
          <GlobalStyles />
          <BrowserRouter>
            {<Route render={() => <Redirect to={auth ? '/ZeronSec/Users' : '/Auth/Login'} />} />}
            <AppRouter />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    )
  }
}