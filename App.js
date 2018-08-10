import React, { Component } from "react";
import Expo from "expo";
import { Container,Spinner,Accordion,Card,CardItem, Content, Header, Left, Right, Title, Text, Footer, FooterTab, Body, Button, Icon } from "native-base";
import HomePage from "./src/screens/HomePage";

export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Spinner />;
    }
    return (
      <HomePage/>
    );
  }
}