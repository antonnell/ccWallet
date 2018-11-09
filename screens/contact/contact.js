import React from 'react';
import { TouchableNativeFeedback, Platform, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Avatar from '../../components/ui/avatar';
import Button from '../../components/ui/button';

class Contact extends React.Component {

  render() {
    return (
      <View style={styles.darkCard}>
        <View style={styles.container}>
          <View style={styles.avatar}>
            <Avatar variant={'icon'} icon={'person'} color={'secondary'}/>
          </View>
          <View style={styles.type}>
            <Text style={styles.name}>{this.props.contact.name}</Text>
            <Text style={styles.number}>{this.props.contact.number}</Text>
          </View>
          <View style={styles.edit}>
            <Text>edit</Text>
          </View>
        </View>
        <View style={styles.actionContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title={'Request Funds'}
              onPress={()=> {
                // Actions.main()
              }}
              variant='solid'
              color='primary'
              size='medium'
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title={'Pay Contact'}
              onPress={()=> {
                // Actions.main()
              }}
              variant='solid'
              color='primary'
              size='medium'
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  darkCard: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
    width: '100%',
    backgroundColor: '#333',
  },
  container: {
    backgroundColor: '#262626',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    padding: 12,
  },
  avatar: {
    width: '16%'
  },
  type: {
    flex: 1,
    marginLeft: 12
  },
  edit: {
    marginRight: 12
  },
  name: {
    fontFamily: "abel-regular",
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: 20
  },
  number: {
    fontFamily: "abel-regular",
    fontSize: 16,
    color: '#848484',
    fontWeight: 'bold',
    lineHeight: 20
  },
  actionContainer: {
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '48%',
  }
};

export default connect(({routes}) => ({routes}))(Contact)
