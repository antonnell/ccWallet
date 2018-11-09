import React from 'react';
import { TouchableNativeFeedback, Platform, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Avatar from '../../components/ui/avatar';

class Wallet extends React.Component {

  render() {
    return (
      <View style={styles.card} key={this.props.wallet.key}>
        <TouchableNativeFeedback
          onPress={(event) => { this.props.onPress(this.props.wallet); }}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.container}>
            <View style={styles.avatar}>
              <Avatar variant={'icon'} icon={this.props.wallet.icon}/>
            </View>
            <View style={styles.type}>
              <Text style={styles.currency}>{this.props.wallet.type}</Text>
              <Text style={styles.wallet}>WALLET</Text>
            </View>
            <Text style={styles.change}>{this.props.wallet.change}</Text>
            <Text style={styles.balance}>{this.props.wallet.balance}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    width: '100%',
    borderRadius: 7,
    marginBottom: 12
  },
  avatar: {
    width: '16%'
  },
  type: {
    width: '28%',
    marginLeft: 12
  },
  currency: {
    fontFamily: "bebas-neue-regular",
    fontSize: 40,
    color: '#333'
  },
  wallet: {
    fontFamily: "abel-regular",
    fontSize: 16,
    color: '#848484',
    fontWeight: 'bold',
    top: -4
  },
  change: {
    fontFamily: "bebas-neue-regular",
    fontSize: 20,
    color: '#333',
    width: '28%'
  },
  balance: {
    fontFamily: "bebas-neue-regular",
    fontSize: 20,
    color: '#333',
    width: '28%'
  }
};

export default connect(({routes}) => ({routes}))(Wallet)
