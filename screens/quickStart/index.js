import React from 'react';
import { ScrollView, View } from 'react-native';
import { Font } from 'expo';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Button from '../../components/ui/button'
import Instruction from './instruction'

class QuickStart extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Instruction instruction='YOUR WALLET' number='1' active={true} />
            <Instruction instruction='NUKE FUNCTION' number='2' />
            <Instruction instruction='YOUR INVESTMENTS' number='3' />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 12
  }
};

export default connect(({routes}) => ({routes}))(QuickStart)
