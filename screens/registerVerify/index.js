import React from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import { Font } from 'expo';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Button from '../../components/ui/button'

class RegisterVerify extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.content}>
          <Text style={styles.heading}>PLEASE VERIFY YOUR DETAILS</Text>
          <Text style={styles.paragraph}>We have sent an email to somebody@somewhere.com, please visit your inbox and verify your email by clicking on the provided link.</Text>
          <Button
            title={'Tap here to proceed'}
            onPress={()=> {
              Actions.registerComplete()
            }}
            variant='outline'
            color='primary'
            size='medium'
          />
          <Button
            title={'Resend verification mail'}
            onPress={()=> {
              Alert.alert('trigger email resend')
            }}
            variant='link'
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
  }
});

export default connect(({routes}) => ({routes}))(RegisterVerify)
