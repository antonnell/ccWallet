import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Contact from './contact';
import AddContact from './addContact';
import Search from './search';

class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {key: '1', name: 'Adam Fisher', number: '12345671234657890'},
        {key: '2', name: 'Alexander Lenart', number: '12345671234657890'},
        {key: '3', name: 'Andre Croje', number: '12345671234657890'},
        {key: '4', name: 'Andy Kerrison', number: '12345671234657890'},
        {key: '5', name: 'Anton Nell', number: '12345671234657890'},
        {key: '6', name: 'Bob Ross', number: '12345671234657890'}
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderSearch()}
        <ScrollView style={styles.scrollView}>
          {this.renderAdd()}
          <View style={styles.contactsStyle}>
            {
              this.state.contacts.map((contact) => {
                return this.renderContact(contact)
              })
            }
          </View>
        </ScrollView>
      </View>
    );
  }

  renderAdd() {
    return (
      <AddContact />
    )
  }

  renderSearch() {
    return (
      <Search />
    )
  }

  renderContact(contact) {
    return (
      <Contact
        key={contact.key}
        contact={contact}
        onPress={this.onContactPress}
       />
    )
  }
  onContactPress(contact) {
    Actions.contact()
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

export default connect(({routes}) => ({routes}))(Contacts)
