import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Button from '../../components/ui/button'
import Avatar from '../../components/ui/avatar';

class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.content}>
            <View style={styles.circle}>
              <Avatar variant={'icon'} icon={'check'} size={'large'} color={'secondary'} />
            </View>
            <Text style={styles.title}>ORDER SUCCESSFUL</Text>
          </View>
          <View style={styles.footerContent}>
            <Button
              title={'Back to your wallets'}
              onPress={()=> {
                Actions.pop()
                Actions.pop()
                Actions.wallets()
              }}
              variant='solid'
              color='secondary'
              size='medium'
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    padding: 12,
    height: '100%'
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    width: '100%',
    height: '100%',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  content: {
    width: '100%',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  },
  footerContent: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end'
  },
  circle: {
    margin: 24
  },
  title: {
    fontFamily: 'abel-regular',
    color: '#333',
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold'
  },
};

export default connect(({routes}) => ({routes}))(Overview)
