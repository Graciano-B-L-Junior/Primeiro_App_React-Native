import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, ScrollView, Button,Platform } from 'react-native';
import Header from './componentes/Header.js';
import Body from './componentes/Body.js'
import Constants from 'expo-constants';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.mostra = false;
    this.naoMostra = false;
    this.plataforma = Platform.OS;
  }


  render() {

      return (
        <ScrollView>
          <Text>Oi</Text>
        </ScrollView>
      );

  }
}


