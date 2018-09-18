import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCF2Yt8pxePlho-SEk5gpfbm8rB4itEO2Q',
      authDomain: 'authentication-1a9bd.firebaseapp.com',
      databaseURL: 'https://authentication-1a9bd.firebaseio.com',
      projectId: 'authentication-1a9bd',
      storageBucket: 'authentication-1a9bd.appspot.com',
      messagingSenderId: '340933905532'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>
      );
      case false:
      return <LoginForm />;
      default:
      return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
