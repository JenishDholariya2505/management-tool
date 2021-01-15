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
  state = { Mode: Theme }
  ModeChange = (checked) => {
    localStorage.setItem("Mode", checked ? "Dark" : "Light")
    this.setState({ Mode: checked ? "Dark" : "Light" })
  }
  render() {
    const { Mode } = this.state
    return (
      <Provider store={store}>
        <ThemeProvider theme={Themes[Mode !== 'Dark' ? 'DarkThemes' : 'LightTheme']}>
          <GlobalStyles />
          <BrowserRouter>
            {<Route render={() => <Redirect to={auth ? '/ZeronSec/Users' : '/Auth/Login'} />} />}
            <AppRouter Theme={this.ModeChange} />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    )
  }
}