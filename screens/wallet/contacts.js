import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Contact from './contact';

class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.renderContacts = this.renderContacts.bind(this)
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.container}>
          <Text style={styles.title}>PAY A CONTACT</Text>
          <Text style={styles.add}>ADD+</Text>
        </View>
        <ScrollView horizontal>
          <View style={styles.contacts}>
            {this.renderSearch()}
            {this.renderContacts()}
          </View>
        </ScrollView>
      </View>
    );
  }

  renderSearch() {
    let contact = {
      key: 'search',
      name: 'Search',
      icon: 'search'
    }
    return <Contact key={contact.key} contact={contact} color={'tertiary'} />
  }

  renderContacts() {
    return this.props.contacts.map((contact) => {
      return <Contact key={contact.key} contact={contact} color={'secondary'} />
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
  contacts: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  title: {
    fontFamily: "abel-regular",
    color: '#333',
    fontSize: 15,
    fontWeight: 'bold'
  },
  add: {
    fontFamily: "abel-regular",
    color: '#848484',
    fontSize: 14,
    fontWeight: 'bold'
  }
};

export default connect(({routes}) => ({routes}))(Contacts)
