import firebase from '@firebase/app';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCF2Yt8pxePlho-SEk5gpfbm8rB4itEO2Q',
      authDomain: 'authentication-1a9bd.firebaseapp.com',
      databaseURL: 'https://authentication-1a9bd.firebaseio.com',
      projectId: 'authentication-1a9bd',
      storageBucket: 'authentication-1a9bd.appspot.com',
      messagingSenderId: '340933905532'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
