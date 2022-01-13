import React, { Component } from 'react'
import Header from "./components/reusable/Header";
import Main from "./containers/Main";
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header/>
            <Main />
          </PersistGate>
        </Provider>
      </>
    )
  }
}

