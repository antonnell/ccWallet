import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Header from './header';
import Contacts from './contacts';
import History from './history';

class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      wallet: {key: '3', type: 'ETH', icon: 'attach-money', change: '+E0.02455', balance: 'E1.08267'},
      contacts: [
        {key: '1', name: 'Adam'},
        {key: '2', name: 'Alex'},
        {key: '3', name: 'Andre'},
        {key: '4', name: 'Andy'},
        {key: '5', name: 'Anton'},
        {key: '6', name: 'Bob'}
      ],
      transactions: [
        {key: '0', title: 'Transfer', subtitle: 'CryptoCurve', amount: '-$500.00', date: '12 / 06 / 2018'},
        {key: '1', title: 'Transfer', subtitle: 'CryptoCurve', amount: '-$500.00', date: '12 / 06 / 2018'},
        {key: '2', title: 'Transfer', subtitle: 'CryptoCurve', amount: '-$500.00', date: '12 / 06 / 2018'},
        {key: '3', title: 'Transfer', subtitle: 'CryptoCurve', amount: '-$500.00', date: '12 / 06 / 2018'},
        {key: '4', title: 'Transfer', subtitle: 'CryptoCurve', amount: '-$500.00', date: '12 / 06 / 2018'},
        {key: '5', title: 'Transfer', subtitle: 'CryptoCurve', amount: '-$500.00', date: '12 / 06 / 2018'}]
    };

    this.renderHeader = this.renderHeader.bind(this)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {this.renderHeader()}
          {this.renderContacts()}
          {this.renderHistory()}
        </ScrollView>
      </View>
    );
  }

  renderHistory() {
    return (
      <History
        transactions={this.state.transactions}
      />
    )
  }

  renderContacts() {
    return (
      <Contacts
        contacts={this.state.contacts}
      />
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
