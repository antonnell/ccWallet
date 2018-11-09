import React from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import { Font } from 'expo';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Button from '../../components/ui/button'

class RegisterComplete extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.content}>
          <Text style={styles.heading}>ACCOUNT CREATED</Text>
          <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</Text>
          <View style={styles.buttonSpacing}>
            <Button
              title={'Tap here to proceed'}
              onPress={()=> {
                Actions.quickStart()
              }}
              variant='solid'
              color='primary'
              size='medium'
            />
          </View>
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
    textAlign: 'center',
    fontFamily: "bebas-neue-regular",
    color: '#fff',
    fontSize: 42,
    marginBottom: 16
  },
  paragraph: {
    fontFamily: 'abel-regular',
    color: '#fff',
    fontSize: 15,
    fontWeight: '100',
    textAlign: 'center',
    marginBottom: 20
  },
  buttonSpacing: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%'
  }
});

export default connect(({routes}) => ({routes}))(RegisterComplete)
