import React from 'react';
import { TouchableNativeFeedback, Platform, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '../../components/ui/button';

const PersonIcon = ({ selected, title}) => {
  return (
    <MaterialIcons name={'person'} size={18} color="#333" />
  )
}


class Pool extends React.Component {

  render() {
    return (
      <View style={styles.poolHeader}>
        <View style={styles.header}>
          <Text style={styles.name}>{this.props.pool.name.toUpperCase()}</Text>
          <View style={styles.memberContainer}>
            <PersonIcon />
            <Text style={styles.members}>{this.props.pool.members+' / '+this.props.pool.maxMembers}</Text>
          </View>
          <View>
            <Button
              title={'REQUEST TO JOIN'}
              onPress={()=> {
                //Actions.main()
              }}
              variant='solid'
              color='tertiary'
              size='small'
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.joinContainer}>
            <Text style={styles.join}>{'JOIN '+this.props.pool.buyin+' '+this.props.pool.currency}</Text>
            <Text style={styles.join}>{'^ '+this.props.pool.change}</Text>
          </View>
          <View style={styles.graphContainer}></View>
          <View style={styles.container}>
            <View style={styles.dataContainer}>
              <Text style={styles.heading}>POOL AMOUNT:</Text>
              <View style={styles.theContainer}>
                <Text style={styles.value}>{this.props.pool.poolAmount}</Text>
                <Text style={styles.currency}>{this.props.pool.currency}</Text>
              </View>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.heading}>POOL GOAL:</Text>
              <View style={styles.theContainer}>
                <Text style={styles.value}>{this.props.pool.poolGoal}</Text>
                <Text style={styles.currency}>{this.props.pool.currency}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  poolHeader: {
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: '#dedede',
    borderStyle: 'solid',
    borderTopWidth: 1,
    padding: 12
  },
  name: {
    flex: 1,
    fontFamily: "abel-regular",
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    lineHeight: 30
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 12
  },
  members: {
    fontFamily: "abel-regular",
    fontSize: 14,
    color: '#333',
    lineHeight: 30,
    marginRight: 12
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius:  7,
    marginBottom: 12
  },
  dataContainer: {

  },
  theContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: "abel-regular",
    fontSize: 15,
    color: '#848484',
    fontWeight: 'bold',
    lineHeight: 20
  },
  value: {
    fontFamily: "bebas-neue-regular",
    color: '#333',
    fontSize: 30
  },
  currency: {
    fontFamily: "abel-regular",
    color: '#333',
    fontSize: 14,
    top: 6,
    marginLeft: 4
  },
  graphContainer: {
    height: 120,
    padding: 12
  },
  joinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12
  },
  join: {
    fontFamily: "abel-regular",
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold'
  },
};

export default connect(({routes}) => ({routes}))(Pool)
