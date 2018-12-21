import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

import Root from 'components/Root';

import store from 'store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#bfa051',
    },
    secondary: {
      main: '#001e47',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Root />
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
