import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Avatar from '../../components/ui/avatar';

class Contact extends React.Component {

  render() {

    let avatar = <Avatar variant={'text'} color={this.props.color} label={''}/>
    if(this.props.contact.icon != null) {
      avatar = <Avatar variant={'icon'} color={this.props.color} icon={this.props.contact.icon}/>
    }

    return (
      <View style={styles.container} key={this.props.contact.key}>
        <View style={styles.avatar}>
          {avatar}
        </View>
        <Text style={styles.name}>{this.props.contact.name}</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    padding: 12,
    alignItems: 'center'
  },
  avatar: {

  },
  name: {
    fontFamily: 'abel-regular',
    fontSize: 14,
    marginTop: 5
  }
};

export default connect(({routes}) => ({routes}))(Contact)
