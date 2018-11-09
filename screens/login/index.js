import React from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import { Font } from 'expo';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Button from '../../components/ui/button'
import TextField from '../../components/ui/textField'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this)
  }

  onChange(event, value) {
    //this.setState({event.target.value: value})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.heading}>LOGIN</Text>
          <TextField
            label={'Username'}
            value={this.state.username}
            onChange={this.onChange}
          />
          <TextField
            variant={'password'}
            label={'Password'}
            value={this.state.password}
            onChange={this.onChange}
          />
          <View style={styles.button}>
            <Button
              title={'Submit'}
              onPress={()=> {
                Actions.main()
              }}
              variant='solid'
              color='primary'
              size='medium'
            />
          </View>
        </View>
        <View style={styles.footerContent}>
          <View style={styles.linkLeft}>
            <Button
              title={'Not Registered?'}
              onPress={()=> {
                Actions.register()
              }}
              variant='link'
              color='primary'
              size='medium'
            />
          </View>
          <View style={styles.linkRight}>
            <Button
              title={'Forgot Password?'}
              onPress={()=> {
                Alert.alert('forgotPassword')
              }}
              variant='link'
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
    justifyContent: 'space-between',
  },
  content: {
    width: '100%',
    padding: '8%',
    flex: 10
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
  },
  footerContent: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  linkLeft: {
    width: '40%'
  },
  linkRight: {
    width: '40%'
  },
  button: {
    marginTop: 24,
    width: '100%'
  }
});

export default connect(({routes}) => ({routes}))(Login)
