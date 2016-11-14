/**
  * Copyright (C) 2016 baidu.com
  * app.js
  *
  * changelog
  * 2016-11-14[13:37:53]:revised
  *
  * @author xxx@baidu.com
  * @version 1.0.0
  * @since 1.0.0
  * @file
  */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    logo: {
        margin: 20,
        backgroundColor: '#8A9B9C'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        setInterval(async() => {
            const count = await Promise.resolve(1 + this.state.count);
            this.setState({
                count
            });
        }, 1e3);
    }
    render() {
        return (
            <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Cubefe React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit src
        </Text>
        <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
        <Text style={styles.instructions}>
          Since started: {this.state.count}s
        </Text>
      </View>);
    }
}
