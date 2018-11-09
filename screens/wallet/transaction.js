import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Button from '../../components/ui/button';

class Transaction extends React.Component {

  render() {

    return (
      <View style={styles.container} key={this.props.transaction.key}>
        <View style={styles.dotContainer}>
          <View style={styles.tinyDot}></View>
        </View>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>{this.props.transaction.title}</Text>
          <Text style={styles.subtitle}>{this.props.transaction.subtitle}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.amount}>{this.props.transaction.amount}</Text>
          <Text style={styles.date}>{this.props.transaction.date}</Text>
        </View>
        <View style={styles.payContainer}>
          <Button
            title={'PAY'}
            onPress={()=> {
              //Actions.main()
            }}
            variant='solid'
            color='secondary'
            size='small'
          />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 6
  },
  dotContainer: {
    padding: 6,
  },
  leftContainer: {
    flex: 1,
    padding: 6,
  },
  rightContainer: {
    padding: 6,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  payContainer: {
    padding: 6,
    width: 60
  },
  tinyDot: {
    backgroundColor: '#c9c9c9',
    height: 12,
    width: 12,
    borderRadius: 12
  },
  title: {
    fontFamily: "abel-regular",
    color: '#333',
    fontSize: 15,
    fontWeight: 'bold'
  },
  subtitle: {
    fontFamily: "abel-regular",
    color: '#848484',
    fontSize: 14,
    fontWeight: 'bold'
  },
  amount: {
    fontFamily: "abel-regular",
    color: '#333',
    fontSize: 15,
    fontWeight: 'bold'
  },
  date: {
    fontFamily: "abel-regular",
    color: '#848484',
    fontSize: 14,
    fontWeight: 'bold'
  }
};

export default connect(({routes}) => ({routes}))(Transaction)
