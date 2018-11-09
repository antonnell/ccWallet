import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class RequestFunds extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>PAYMENT AMOUNT</Text>
        <Vew>
          <View>
            <Text>2208</Text>
            <Text>CURV</Text>
          </View>
        </Vew>
        <View>
          <Text>265.65 USD</Text>
        </View>
      </View>
    );
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
};

export default connect(({routes}) => ({routes}))(RequestFunds)
