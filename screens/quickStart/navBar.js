import React from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Button from '../../components/ui/button'

class NavBar extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconButton}>
          <Button variant='icon' onPress={this.onLeftPress} icon='chevron-left' color='secondary' />
        </View>
        <Text style={styles.heading}>QUICK START GUIDE</Text>
        <View style={styles.iconButton}>
          <Button variant='icon' onPress={this.onRightPress} icon='close' color='secondary' />
        </View>
      </View>
    );
  }

  onLeftPress() {
    Actions.pop()
  }

  onRightPress() {
    Actions.pop()
    Actions.wallets()
  }
}

const styles = {
  container: {
    backgroundColor: '#e5e5e5',
    height: 55,
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  heading: {
    fontFamily: "abel-regular",
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 35
  },
  iconButton: {
    width: 32
  }
};

export default connect(({routes}) => ({routes}))(NavBar)
