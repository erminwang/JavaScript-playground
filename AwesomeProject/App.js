import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    //Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View>
        <Blink text='I love youfljsfljas;flsj' />
        <Blink text='I want you' />
        <Blink text='lalala' />
      </View>
    );
  }
}
