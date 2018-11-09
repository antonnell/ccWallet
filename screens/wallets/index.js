import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Wallet from './wallet';
import Total from './total';

class Wallets extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      wallets: [
        {key: '1', type: 'USD', icon: 'attach-money', change: '+$89.55', balance: '4564.89'},
        {key: '2', type: 'CURV', icon: 'attach-money', change: '+E0.02455', balance: 'E1.08267'},
        {key: '3', type: 'ETH', icon: 'attach-money', change: '+E0.02455', balance: 'E1.08267'},
        {key: '4', type: 'WAN', icon: 'attach-money', change: '-W0.000165', balance: 'W200.000'},
        {key: '5', type: 'WAN', icon: 'attach-money', change: '-W0.000165', balance: 'W200.000'}
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {this.renderTotal()}
          {
            this.state.wallets.map((wallet) => {
              return this.renderWallet(wallet)
            })
          }
        </ScrollView>
      </View>
    );
  }

  renderTotal() {
    return (
      <Total />
    )
  }

  renderWallet(wallet) {
    return (
      <Wallet
        key={wallet.key}
        wallet={wallet}
        onPress={this.onWalletPress}
       />
    )
  }

  onWalletPress(wallet) {
    Actions.wallet()
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
    width: '100%',
  }
};

export default connect(({routes}) => ({routes}))(Wallets)
