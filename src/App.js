import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import { FormProvider } from './context/FormContext';
import { Reset } from 'styled-reset';
import Theme from "./assets/Theme";
import GlobalStyle from "./assets/globalStyle";
import { Homepage, CreateTest, ViewTests } from './pages';

function App() {
  return (
    <Theme>
      <FormProvider>
        <BrowserRouter>
          <Reset />
          <GlobalStyle />
            <Switch>
              <Route path='/' exact component={Homepage} />
              <Route path='/adicionar-prova' exact component={CreateTest} />
              <Route path='/visualizar-provas' exact component={ViewTests} />
            </Switch>
        </BrowserRouter>
      </FormProvider>
    </Theme>
  );
}

export default App;