import React from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import { Font } from 'expo';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Button from '../../components/ui/button'

class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.content}>
          <Image
            style={{height: 50, width: undefined, alignSelf: 'stretch'}}
            source={require('../../assets/cryptocurve-logo-white2.png')}
            resizeMode="contain"
          />
          <Text style={styles.heading}>WALLET</Text>
          <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</Text>
          <Button
            title={'Login'}
            onPress={()=> {
              Actions.login()
            }}
            variant='outline'
            color='primary'
            size='medium'
          />
          <Button
            title={'Register'}
            onPress={()=> {
              Actions.register()
            }}
            variant='solid'
            color='primary'
            size='medium'
          />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
  },
  heading: {
    fontFamily: "bebas-neue-regular",
    color: '#fff',
    fontSize: 85,
    marginBottom: 20
  },
  paragraph: {
    fontFamily: 'abel-regular',
    color: '#fff',
    fontSize: 15,
    fontWeight: '100',
    textAlign: 'center',
    marginBottom: 20
  }
});

export default connect(({routes}) => ({routes}))(Home)
