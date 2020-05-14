import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { State } from 'react-native-gesture-handler';
import * as Helpers from '../helpers';

interface Props {
  navigation: any
}

export default class SignIn extends Component<Props> {

  state = {
    email: 'julien@hypecode.com',
    password: 'password',
    isLoading: false
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerShown: false
    }
  }


  login = () => {
    this.setState({ isLoading: true });
    const payload = {
      email: this.state.email,
      password: this.state.password,
    };

    Helpers.requestService('login', 'POST', payload).then((res: any) => {
      if (res.token) {
        alert('Sucess ! you will be logged in !');
        Helpers.storeDataLocally('userAccountToken', res.token).catch((err) => console.log(err));
        this.props.navigation.navigate('LogIn');
      }
      else {
        alert('Something went wrong...')
      }
    });
  }

  componentWillMount() {
    //check if token is valid
    //Helpers.getDataLocally('userAccountToken').then((res) => {
      // if(tokenisvalid) {
      //   this.props.navigation.navigate('LogIn');
      // }
     // console.log('response from local store : ', res);
    //}).catch(err => console.log(err));
  }

  render() {
    const isLoading = this.state.isLoading;

    return (
      <View style={styles.container}>
        <Image source={require('../assets/landingBackground.jpg')} style={styles.backgroundImage}
          resizeMode='cover' blurRadius={4} />

        <LinearGradient colors={['#D42D4EAA', '#B11231AA', '#8D011DAA']}
          style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'space-around' }}>

          <Text style={{ position: 'absolute', fontFamily: 'NotoSans-Bold', color: 'white', fontSize: 20, top: '10%' }}>There's always time to Catch
            up!</Text>

          <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '100%', height: 200, justifyContent: 'space-between' }}>
              {isLoading ? (<ActivityIndicator />) : (
                <React.Fragment>
                  <View style={{ margin: 10 }}>
                    <Input inputStyle={{ color: 'white' }} placeholder='E-mail or pseudo' onChangeText={(email) => this.setState({ email })} />
                    <Input inputStyle={{ color: 'white' }} placeholder='Password' onChangeText={(password) => this.setState({ password })} />
                  </View>
                  <View>
                    <Button title="Login" containerStyle={{ padding: 5 }} titleStyle={{ color: '#eeeeee' }}
                      buttonStyle={{ backgroundColor: '#8D011D' }}
                      onPress={() => this.login()}
                    />
                    <Button title="Get started" containerStyle={{ padding: 5 }} titleStyle={{ color: '#eeeeee' }}
                      buttonStyle={{ backgroundColor: '#8D011D' }}
                      onPress={() => this.props.navigation.navigate('SignUp')}
                    />
                  </View>
                </React.Fragment>
              )}
              <Text style={{ alignSelf: 'flex-end', padding: 5, color: '#eeeeee' }}>Can't acess your account ?</Text>
            </View>
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
    color: 'white',
  }
});
