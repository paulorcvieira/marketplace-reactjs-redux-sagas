import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';

import store from './store'

import Header from './components/default/Header';
import Home from './pages/Home';
import CreateList from './pages/CreateList';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#00cec9',
    },
    secondary: {
      main: '#e84393',
    },
  },
});

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <>
              <Header />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/list/:action" component={CreateList} />
                <Route from="*" to="/" />
              </Switch>
              <GlobalStyle />
              <ToastContainer autoClose={3000} />
            </>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
