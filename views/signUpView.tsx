import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

import * as Helpers from '../helpers';


interface Props {
  navigation: any
}
export default class SignUp extends Component<Props> {

  state = {
    pseudonyme: '',
    email: '',
    emailConf: '',
    password: '',
    passwordConf: '',
    redirectToReferrer: false,
    error: '',
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerShown: false
    }
  }

  register = () => {
    if (this.state.email
      && this.state.password
      && this.state.password == this.state.passwordConf
      && this.state.email == this.state.emailConf) {
      const payload = {
        email: this.state.email,
        password: this.state.password,
      }
      Helpers.requestService('app_users', 'POST', payload).then((res: any) => {

        if (res.id) {
          alert('Sucess ! you will be logged in !');
          this.props.navigation.navigate('LogIn');
        }
        else {
          !res.errors[0].message ? alert('Something went wrong...') : alert(res.errors[0].message);
        }
      })
        .catch((err) => { });
    }
  }

  render() {
    return (

      <View style={styles.container}>
        <Image source={require('../assets/landingBackground.jpg')} style={styles.backgroundImage}
          resizeMode='cover' blurRadius={4} />

        <LinearGradient colors={['#d6a9b2aa', '#baa6aaaa', '#968d8faa']}
          style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'space-around' }}>

          <Text style={{ position: 'absolute', color: 'black', fontFamily: 'NotoSans-Bold', fontSize: 20, top: '10%' }}>There's always time to
          Catch
                    up!</Text>

          <View style={{ width: '80%', height: 400, justifyContent: 'space-between' }}>
            <Input inputStyle={{ fontFamily: 'NotoSans-Italic' }} labelStyle={{ color: 'black', fontFamily: 'NotoSans-Regular' }}
              label='Choose a pseudonyme' onChangeText={(pseudonyme) => this.setState({ pseudonyme })}
              value={this.state.pseudonyme}
              leftIconContainerStyle={{ paddingRight: 10 }} leftIcon={{ type: 'font-awesome', name: 'chevron-right', size: 10, color: 'black' }} />
            <Input inputStyle={{ fontFamily: 'NotoSans-Italic' }} labelStyle={{ color: 'black', fontFamily: 'NotoSans-Regular' }}
              label='E-mail' onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
              leftIconContainerStyle={{ paddingRight: 10 }} leftIcon={{ type: 'font-awesome', name: 'chevron-right', size: 10, color: 'black' }} />
            <Input inputStyle={{ fontFamily: 'NotoSans-Italic' }} labelStyle={{ color: 'black', fontFamily: 'NotoSans-Regular' }}
              label='Confirm E-mail' onChangeText={(emailConf) => this.setState({ emailConf })}
              value={this.state.emailConf}
              leftIconContainerStyle={{ paddingRight: 10 }} leftIcon={{ type: 'font-awesome', name: 'chevron-right', size: 10, color: 'black' }} />
            <Input inputStyle={{ fontFamily: 'NotoSans-Italic' }} labelStyle={{ color: 'black', fontFamily: 'NotoSans-Regular' }}
              label='Password' onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
              leftIconContainerStyle={{ paddingRight: 10 }} leftIcon={{ type: 'font-awesome', name: 'chevron-right', size: 10, color: 'black' }} />
            <Input inputStyle={{ fontFamily: 'NotoSans-Italic' }} labelStyle={{ color: 'black', fontFamily: 'NotoSans-Regular' }}
              label='Confirm Password' onChangeText={(passwordConf) => this.setState({ passwordConf })}
              value={this.state.passwordConf}
              leftIconContainerStyle={{ paddingRight: 10 }} leftIcon={{ type: 'font-awesome', name: 'chevron-right', size: 10, color: 'black' }} />

            <Button title="Register" containerStyle={{ padding: 5 }} titleStyle={{ color: 'black' }}
              buttonStyle={{ backgroundColor: '#eeeeee' }} onPress={() => { this.register(); }} />
            <Button title="Back" onPress={() => this.props.navigation.navigate('SignIn')}
              containerStyle={{ padding: 5 }} titleStyle={{ color: 'black' }}
              buttonStyle={{ backgroundColor: '#eeeeee' }} />
          </View>

        </LinearGradient>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  label: {
    color: 'black',
    fontFamily: 'NotoSans-Regular'
  }
});