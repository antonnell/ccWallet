import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Total extends React.Component {

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>ACCOUNT BALANCE</Text>
        <View style={styles.container}>
          <View style={styles.left}>
            <Text style={styles.balance.main}>9765</Text>
            <View>
              <Text style={styles.balance.cents}>.55</Text>
              <Text style={styles.balance.currency}>USD</Text>
            </View>
          </View>
          <View style={styles.right}>
            <Text style={styles.change.main}>+553</Text>
            <View>
              <Text style={styles.change.cents}>.32</Text>
              <Text style={styles.change.currency}>USD</Text>
            </View>
          </View>
        </View>
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
    alignItems: 'flex-end',
    justifyContent: 'center',
    top: -3
  },
  title: {
    color: '#848484',
    fontSize: 15,
    fontFamily: "abel-regular",
    fontWeight: 'bold'
  },
  left: {
    width: '50%',
    flexDirection: 'row',
  },
  right: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  balance: {
    main: {
      fontFamily: "bebas-neue-regular",
      color: '#333',
      fontSize: 60,
      marginRight: 5
    },
    cents: {
      fontFamily: "bebas-neue-regular",
      color: '#333',
      fontSize: 25,
      top: 7
    },
    currency: {
      fontFamily: "bebas-neue-regular",
      color: '#848484',
      fontSize: 25,
      top: 4
    }
  },
  change: {
    main: {
      fontFamily: "bebas-neue-regular",
      color: '#333',
      fontSize: 55,
      marginRight: 5
    },
    cents: {
      fontFamily: "bebas-neue-regular",
      color: '#333',
      fontSize: 23,
      top: -1
    },
    currency: {
      fontFamily: "bebas-neue-regular",
      color: '#848484',
      fontSize: 23,
      top: -5
    }
  }
};

export default connect(({routes}) => ({routes}))(Total)
