import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Header from './header';
import Currency from './currency';

class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      wallet: {key: '3', type: 'ETH', icon: 'attach-money', change: '+E0.02455', balance: 'E1.08267'},
      currencies: [
        {key: '0', name: 'CURV TOKENS', icon: 'attach-money'},
        {key: '1', name: 'WAN TOKENS', icon: 'attach-money'},
        {key: '2', name: 'BITCOIN TOKENS', icon: 'attach-money'}
      ]
    };

    this.renderHeader = this.renderHeader.bind(this)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {this.renderHeader()}
          {this.renderCurrencies()}
        </ScrollView>
      </View>
    );
  }

  renderCurrencies() {
    return (
      this.state.currencies.map((currency) => {
        return (<Currency key={currency.key} currency={currency} />)
      })
    )
  }

  renderHeader() {
    return (
      <Header
        wallet={this.state.wallet}
       />
    )
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

export default connect(({routes}) => ({routes}))(Overview)
