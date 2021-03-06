import React from 'react';
import { Text, View, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Button from '../../components/ui/button'

class NavBar extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconButton}>
          <Button variant='icon' onPress={this.onLeftPress} icon='chevron-left' />
        </View>
        <Text style={styles.heading}>ETHEREUM WALLET</Text>
        <View style={styles.iconButton}>
          <Button variant='icon' onPress={this.onRightPress} icon='menu' />
        </View>
      </View>
    );
  }

  onLeftPress() {
    Actions.wallets()
  }

  onRightPress() {
    Actions.drawer()
  }
}

const styles = {
  container: {
    backgroundColor: '#333',
    height: 55,
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  heading: {
    fontFamily: "abel-regular",
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 35
  },
  iconButton: {
    width: 32
  }
};

export default connect(({routes}) => ({routes}))(NavBar)
