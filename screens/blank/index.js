import React from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import { Font } from 'expo';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Blank extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.heading}>Nothing is hapening here...</Text>
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
  }
});

export default connect(({routes}) => ({routes}))(Blank)
