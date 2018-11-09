import React from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import { Font } from 'expo';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Button from '../../components/ui/button'

class Drawer extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.content}>
          <Button
            title={'Wallets'}
            onPress={()=> {
              Actions.pop()
              Actions.wallets()
            }}
            style='block'
            variant='solid'
            color='tertiary'
            size='large'
          />
          <Button
            title={'Exchange'}
            onPress={()=> {
              Actions.pop()
              Actions.exchange()
            }}
            style='block'
            variant='solid'
            color='tertiary'
            size='large'
          />
          <Button
            title={'Investments'}
            onPress={()=> {
              Actions.pop()
              Actions.investment()
            }}
            style='block'
            variant='solid'
            color='tertiary'
            size='large'
          />
        </View>
        <View style={styles.footerContent}>
          <Button
            title={'Back to start'}
            onPress={()=> {
              Actions.pop()
              Actions.home()
            }}
            style='block'
            variant='solid'
            color='primary'
            size='large'
          />
        <Text style={styles.footerStyle}>APP VERSION 1.1 BETA</Text>
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
    paddingTop: 50,
    width: '100%',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  },
  footerContent: {
    width: '100%',
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  footerStyle: {
    fontFamily: "abel-regular",
    fontSize: 12,
    fontWeight: '600',
    color: '#848484',
    padding: 16
  }
});

export default connect(({routes}) => ({routes}))(Drawer)
