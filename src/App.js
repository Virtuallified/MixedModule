import React, { Component } from 'react'
import Routes from "./config/RoutesConfig"
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { loadUser } from './redux/actions/authActions'
import { setAuthToken } from './redux/utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

export default class App extends Component {
  
  /* If it is a functional component then we should do the same thing as componentDidMount() with useEffect() hook */
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);
  
  /* As it is a class component we did componentDidMount() to load user */
  componentDidMount() {
    store.dispatch(loadUser());
  }
  
  render() {
    return (
      <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <Routes/>
          </PersistGate>
        </Provider>
      </>
    )
  }
}

