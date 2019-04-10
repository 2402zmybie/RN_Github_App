
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import NavigationUtil from '../navigator/NavigationUtil'

//欢迎页定时器调到首页
export default class Welcome extends Component<Props> {

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
      </View>
    );
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
        // NavigationUtil.resetToHomePage(this.props)
      NavigationUtil.resetToHomePage({
        navigation: this.props.navigation
      })
    },200)
  }

  componentWillMount(){
    this.timer && clearTimeout(this.timer)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
