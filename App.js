import React from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import { Font } from 'expo';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore()
const RouterWithRedux = connect()(Router);

import Home from './screens/home';
import Register from './screens/register';
import RegisterVerify from './screens/registerVerify';
import RegisterComplete from './screens/registerComplete';
import Login from './screens/login';


const TabIcon = ({ selected, title}) => {
    return (
      <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
    )
}

export default class App extends React.Component {

  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'bebas-neue-regular': require('./assets/fonts/BebasNeue.ttf'),
      "abel-regular": require('./assets/fonts/abel-regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {

    if(this.state.fontLoaded == false) {
      return <View><Text>loading</Text></View>
    }

    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root" hideNavBar>
            <Scene key="home" component={Home} initial/>
            <Scene key="register" component={Register} />
            <Scene key="registerVerify" component={RegisterVerify} />
            <Scene key="registerComplete" component={RegisterComplete} />
            <Scene key="login" component={Login} />
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  tarBarStyle: {
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
  }
})
