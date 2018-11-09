import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Transaction from './transaction';

class History extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.renderTransactions = this.renderTransactions.bind(this)
  }

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>HISTORY</Text>
        <View style={styles.transactions}>
          {this.renderTransactions()}
        </View>
      </View>
    );
  }

  renderTransactions() {
    return this.props.transactions.map((transaction) => {
      return <Transaction key={transaction.key} transaction={transaction} />
    })
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    width: '100%',
    borderRadius: 7,
    marginBottom: 12
  },
  transactions: {
    justifyContent: 'flex-start'
  },
  title: {
    fontFamily: "abel-regular",
    color: '#333',
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 32
  },
};

export default connect(({routes}) => ({routes}))(History)
