import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Pool from './pool';
import AddPool from './addPool';

class Pools extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myPools: [
        {key: '1', name: 'Pool Name', buyin: '10000', members: 22, maxMembers: 30, poolAmount: '265456.56', poolGoal: '2000000.00', currency: 'CURV', change: '23.2456%'}
      ],
      availablePools: [
        {key: '1', name: 'Pool Name', buyin: '', members: 22, maxMembers: 30, poolAmount: '265456.56', poolGoal: '2000000.00', currency: 'CURV', change: '23.2456%'},
        {key: '2', name: 'Pool Name', buyin: '', members: 22, maxMembers: 30, poolAmount: '265456.56', poolGoal: '2000000.00', currency: 'CURV', change: '23.2456%'},
        {key: '3', name: 'Pool Name', buyin: '', members: 22, maxMembers: 30, poolAmount: '265456.56', poolGoal: '2000000.00', currency: 'CURV', change: '23.2456%'}
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View>
            {this.renderAdd()}
            <View>
              <Text style={styles.titleStyle}>MY POOLS</Text>
              {
                this.state.myPools.map((pool) => {
                  return this.renderPool(pool)
                })
              }
            </View>
            <View>
              <Text style={styles.titleStyle}>AVAILABLE POOLS</Text>
              {
                this.state.availablePools.map((pool) => {
                  return this.renderPool(pool)
                })
              }
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  renderAdd() {
    return (
      <AddPool />
    )
  }

  renderPool(pool) {
    return (
      <Pool
        key={pool.key}
        pool={pool}
        onPress={this.onPoolPress}
       />
    )
  }
  onPoolPress(pool) {
    Actions.investments_pool()
  }
} 

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  scrollView: {
    padding: 12,
    width: '100%'
  },
  titleStyle: {
    flex: 1,
    fontFamily: "abel-regular",
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    lineHeight: 60
  }
};

export default connect(({routes}) => ({routes}))(Pools)
