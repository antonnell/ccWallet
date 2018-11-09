import React from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import { Font } from 'expo';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Button from '../../components/ui/button';
import Avatar from '../../components/ui/avatar';

class Instruction extends React.Component {

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.view}>
          <View style={styles.contentStyle}>
            <View>
              <Text style={styles.setUp}>SET UP</Text>
              <Text style={styles.title}>{this.props.instruction}</Text>
            </View>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget</Text>
            <View style={styles.container}>
              <View style={styles.buttonContainer}>
                <Button
                  title={'Later'}
                  onPress={()=> {
                    // Actions.quickStart()
                  }}
                  variant='solid'
                  color='secondary'
                  size='small'
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title={'Start'}
                  onPress={()=> {
                    // Actions.quickStart()
                  }}
                  variant='solid'
                  color='tertiary'
                  size='small'
                />
              </View>
            </View>
          </View>
          <View style={styles.numberStyle}>
            <Avatar variant={'text'} label={this.props.number} size={'small'} color={'secondary'}/>
          </View>
        </View>
        <View style={this.props.active?styles.none:styles.overlay}></View>
      </View>
    );
  }
}

const styles = {
  card: {
    backgroundColor: '#fff',
    padding: 24,
    width: '100%',
    borderRadius: 7,
    marginBottom: 12
  },
  view: {
    flexDirection: 'row',
  },
  setUp: {
    fontFamily: "abel-regular",
    color: '#848484',
    fontSize: 14,
    fontWeight: 'bold'
  },
  title: {
    fontFamily: "bebas-neue-regular",
    color: '#333',
    fontSize: 36
  },
  description:{
    fontFamily: "abel-regular",
    color: '#848484',
    fontSize: 13,
    paddingTop: 6,
    paddingBottom: 6
  },
  container: {
    flexDirection: 'row',
  },
  buttonContainer: {
    width: 80,
    marginRight: 12
  },
  contentStyle: {
    width: '90%'
  },
  numberStyle: {
    width: '10%',
    paddingTop: 6
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7,
    backgroundColor: '#efefef',
    borderRadius: 7
  },
  none: {

  }
};

export default connect(({routes}) => ({routes}))(Instruction)
