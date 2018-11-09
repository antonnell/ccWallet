import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import History from './history';
import Header from './header';

class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      transactions: [
        {key: '0', title: 'Transfer', subtitle: 'CryptoCurve', amount: '-$500.00', date: '12 / 06 / 2018'},
        {key: '1', title: 'Transfer', subtitle: 'CryptoCurve', amount: '-$500.00', date: '12 / 06 / 2018'},
        {key: '2', title: 'Transfer', subtitle: 'CryptoCurve', amount: '-$500.00', date: '12 / 06 / 2018'},
        {key: '3', title: 'Transfer', subtitle: 'CryptoCurve', amount: '-$500.00', date: '12 / 06 / 2018'},
        {key: '4', title: 'Transfer', subtitle: 'CryptoCurve', amount: '-$500.00', date: '12 / 06 / 2018'},
        {key: '5', title: 'Transfer', subtitle: 'CryptoCurve', amount: '-$500.00', date: '12 / 06 / 2018'}]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {this.renderHeader()}
          <View style={styles.contactsStyle}>
            {this.renderHistory()}
          </View>
        </ScrollView>
      </View>
    );
  }

  renderHeader() {
    return (
      <Header />
    )
  }

  renderHistory() {
    return (
      <History
        transactions={this.state.transactions}
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
    width: '100%'
  },
  contactsStyle: {
    borderRadius: 7
  }
};

export default connect(({routes}) => ({routes}))(Overview)
