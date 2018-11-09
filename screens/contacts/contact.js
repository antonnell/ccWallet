import React from 'react';
import { TouchableNativeFeedback, Platform, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Avatar from '../../components/ui/avatar';

class Contact extends React.Component {

  render() {
    return (
      <View style={styles.card} key={this.props.contact.key}>
        <TouchableNativeFeedback
          onPress={(event) => { this.props.onPress(this.props.contact); }}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.container}>
            <View style={styles.avatar}>
              <Avatar variant={'icon'} icon={'person'} color={'secondary'}/>
            </View>
            <View style={styles.type}>
              <Text style={styles.name}>{this.props.contact.name}</Text>
              <Text style={styles.number}>{this.props.contact.number}</Text>
            </View>
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
    width: '100%'
  },
  avatar: {
    width: '16%'
  },
  type: {
    flex: 1,
    marginLeft: 12
  },
  name: {
    fontFamily: "abel-regular",
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    lineHeight: 20
  },
  number: {
    fontFamily: "abel-regular",
    fontSize: 16,
    color: '#848484',
    fontWeight: 'bold',
    lineHeight: 20
  }
};

export default connect(({routes}) => ({routes}))(Contact)
