import React from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import { Font } from 'expo';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Button from '../../components/ui/button'
import TextField from '../../components/ui/textField'

class Register extends React.Component {

  state = {
    username: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
  }

  onChange(event, value) {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.heading}>REGISTER</Text>
          <TextField
            label={'Username'}
            value={this.state.username}
            onChange={this.onChange}
          />
          <TextField
            label={'Email Address'}
            value={this.state.username}
            onChange={this.onChange}
          />
          <TextField
            variant={'password'}
            label={'Password'}
            value={this.state.username}
            onChange={this.onChange}
          />
          <TextField
            variant={'password'}
            label={'Confirm Password'}
            value={this.state.username}
            onChange={this.onChange}
          />
        </View>
        <View style={styles.footerContent}>
          <Button
            title={'Submit'}
            onPress={()=> {
              Actions.registerVerify()
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
    justifyContent: 'space-between',
  },
  content: {
    width: '100%',
    padding: '8%',
    flex: 10
  },
  footerContent: {
    width: '100%',
    padding: '8%',
    flex: 1
  },
  heading: {
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

export default connect(({routes}) => ({routes}))(Register)
