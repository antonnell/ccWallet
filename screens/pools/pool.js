import React from 'react';
import { TouchableNativeFeedback, Platform, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { MaterialIcons } from '@expo/vector-icons';

const PersonIcon = ({ selected, title}) => {
  return (
    <MaterialIcons name={'person'} size={14} color="#333" />
  )
}

class Pool extends React.Component {

  render() {
    return (
      <View style={styles.card} key={this.props.pool.key}>
        <TouchableNativeFeedback
          onPress={(event) => { this.props.onPress(this.props.pool); }}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View>
            <View style={styles.container}>
              <Text style={styles.name}>{this.props.pool.name.toUpperCase()}</Text>
              <Text style={styles.join}>{'JOIN '+this.props.pool.buyin+' '+this.props.pool.currency}</Text>
              <View style={styles.memberContainer}>
                <PersonIcon />
                <Text style={styles.members}>{this.props.pool.members+' / '+this.props.pool.maxMembers}</Text>
              </View>
            </View>
            <View style={styles.lowerContainer}>
              <View>
                <Text style={styles.heading}>POOL AMOUNT:</Text>
                <View style={styles.theContainer}>
                  <Text style={styles.value}>{this.props.pool.poolAmount}</Text>
                  <Text style={styles.currency}>{this.props.pool.currency}</Text>
                </View>
              </View>
              <View>
                <Text style={styles.heading}>POOL GOAL:</Text>
                <View style={styles.theContainer}>
                  <Text style={styles.value}>{this.props.pool.poolGoal}</Text>
                  <Text style={styles.currency}>{this.props.pool.currency}</Text>
                </View>
              </View>
              <View>
                <Text style={styles.graph}></Text>
              </View>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = {
  card: {
    backgroundColor: '#fff',
    padding: 12,
    width: '100%',
    borderRadius: 7,
    marginBottom: 12
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 12
  },
  theContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lowerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 12
  },
  name: {
    flex: 1,
    fontFamily: "abel-regular",
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    lineHeight: 20
  },
  join: {
    fontFamily: "abel-regular",
    fontSize: 12,
    color: '#333',
    lineHeight: 20
  },
  members: {
    fontFamily: "abel-regular",
    fontSize: 12,
    color: '#333',
    lineHeight: 20,
    marginLeft: 6
  },
  heading: {
    fontFamily: "abel-regular",
    fontSize: 13,
    color: '#848484',
    fontWeight: 'bold',
    lineHeight: 20
  },
  value: {
    fontFamily: "bebas-neue-regular",
    color: '#333',
    fontSize: 22
  },
  currency: {
    fontFamily: "abel-regular",
    fontSize: 10,
    color: '#333',
    top: 3,
    marginLeft: 3
  },
  graph: {
    width: 50
  }
};

export default connect(({routes}) => ({routes}))(Pool)
