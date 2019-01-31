import React, { Component } from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Main from "./Main";

import './App.css';
import persistStore from './config/Store';
const persist = persistStore();

class App extends Component {
  render() {
    return (
      <Provider store={persist.store}>
        <PersistGate persistor={persist.persistor}>
          <BrowserRouter>
           <Main/>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
