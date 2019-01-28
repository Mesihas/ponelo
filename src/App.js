import React from "react";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { createStackNavigator, createAppContainer } from "react-navigation";
import firebase from 'firebase';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCnwtXRm4WsTRA9Dz8n1tH8xHblMAjwTIU",
      authDomain: "ponelo-16313.firebaseapp.com",
      databaseURL: "https://ponelo-16313.firebaseio.com",
      projectId: "ponelo-16313",
      storageBucket: "ponelo-16313.appspot.com",
      messagingSenderId: "853647278091"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
    <Provider store={store}>
      <AppContainer />
    </Provider>)
    ;
  }
}

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    Dashboard:DashboardScreen 
},
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppNavigator);
