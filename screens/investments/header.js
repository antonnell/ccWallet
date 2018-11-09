import React from 'react';
import { TouchableNativeFeedback, Platform, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Header extends React.Component {

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>TOTAL EARNINGS</Text>
        <View style={styles.container}>
          <View style={styles.left}>
            <View style={styles.leftLeft}>
              <Text style={styles.balance.main}>9765</Text>
              <View>
                <Text style={styles.balance.cents}>.55</Text>
                <Text style={styles.balance.currency}>USD</Text>
              </View>
            </View>
            <Text style={styles.balance.change}>^ 23.2456%</Text>
          </View>
          <View style={styles.right}>
            <Text></Text>
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
    alignItems: 'center'
  },
  title: {
    color: '#848484',
    fontSize: 15,
    fontFamily: "abel-regular",
    fontWeight: 'bold'
  },
  left: {
    width: '50%'
  },
  leftLeft: {
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
    },
    change: {
      fontFamily: "bebas-neue-regular",
      color: '#848484',
      fontSize: 16,
      top: -4
    }
  },
  name: {
    fontFamily: "abel-regular",
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: 20
  },
  number: {
    fontFamily: "abel-regular",
    fontSize: 16,
    color: '#848484',
    fontWeight: 'bold',
    lineHeight: 20
  },
  actionContainer: {
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '48%',
  }
};

export default connect(({routes}) => ({routes}))(Header)
