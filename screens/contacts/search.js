import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { MaterialIcons } from '@expo/vector-icons';

const SearchIcon = ({ selected, title}) => {
  return (
    <MaterialIcons name={'search'} size={22} color="#fff" style={styles.searchIcon}  />
  )
}

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };

    this.onChange = this.onChange.bind(this)
  }

  onChange(event, value) {
    this.setState({search: value})
  }

  render() {
    return (
      <View style={styles.darkCard}>
        <View style={styles.container}>
          <SearchIcon />
          <TextInput
            style={styles.textInputStyle}
            underlineColorAndroid = "transparent"
            onChangeText={this.onChange}
            value={this.state.search}
            placeholder={'Search'}
          />
        </View>

      </View>
    );
  }
}

const styles = {
  darkCard: {
    padding: 12,
    width: '100%',
    backgroundColor: '#333',
  },
  container: {
    backgroundColor: '#262626',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 7
  },
  textInputStyle: {
    backgroundColor: '#262626',
    padding: 12,
    fontSize: 18,
    flex: 1,
    color: '#fff'
  },
  searchIcon: {
    width: 20,
    marginTop: 16,
    marginLeft: 16,
    backgroundColor: '#262626',
  }
};

export default connect(({routes}) => ({routes}))(Search)
