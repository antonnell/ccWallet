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
        <ScrollView style={styles.scrollView}>
          <View style={styles.card}>
            <View style={styles.content}>
              <View style={styles.circle}>
                <Avatar variant={'text'} label={''} size={'large'} color={'secondary'} />
              </View>
              <View style={styles.nextTo}>
                <Text style={styles.body1}>Sell </Text>
                <Text style={styles.body2}>ETH 0.393518</Text>
              </View>
              <View style={styles.nextTo}>
                <Text style={styles.body1}>at </Text>
                <Text style={styles.body2}>ETH/CURV 0.0.11</Text>
              </View>
              <View style={styles.dottedLine}></View>
              <View style={styles.nextToWide}>
                <Text style={styles.body3}>You Sell</Text>
                <Text style={styles.body5}>ETH 0.393518</Text>
              </View>
              <View style={styles.nextToWide}>
                <Text style={styles.body3}>Service Charge</Text>
                <Text style={styles.body5}>ETH 0.0000218532</Text>
              </View>
              <View style={styles.nextToWide}>
                <Text style={styles.body4}>Approx. 2%</Text>
                <Text style={styles.body6}>Approx. USD 23.15</Text>
              </View>
              <View style={styles.dottedLine}></View>
              <View style={styles.nextToWide}>
                <Text style={styles.body7}>You receive</Text>
                <Text style={styles.body8}>CURV 2.45679</Text>
              </View>
            </View>
            <View style={styles.footerContent}>
              <Button
                title={'Confirm'}
                onPress={()=> {
                  Actions.paymentThankYou()
                }}
                variant='solid'
                color='secondary'
                size='medium'
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    height: '100%',
  },
  scrollView: {
    padding: 12,
    width: '100%',
    height: '100%',
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
  nextTo: {
    flexDirection: 'row'
  },
  nextToWide: {
    flexDirection: 'row',
    justifyContent:  'space-between'
  },
  body1: {
    fontFamily: 'abel-regular',
    color: '#333',
    fontSize: 16,
    lineHeight: 24
  },
  body2: {
    fontFamily: 'abel-regular',
    color: '#333',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold'
  },
  body3: {
    fontFamily: 'abel-regular',
    color: '#333',
    fontSize: 16,
    lineHeight: 40,
    width: '50%'
  },
  body4: {
    fontFamily: 'abel-regular',
    color: '#848484',
    fontSize: 13,
    lineHeight: 40,
    width: '50%'
  },
  body5: {
    fontFamily: 'abel-regular',
    color: '#333',
    fontSize: 16,
    lineHeight: 40,
    textAlign: 'right',
    width: '50%'
  },
  body6: {
    fontFamily: 'abel-regular',
    color: '#848484',
    fontSize: 13,
    lineHeight: 40,
    textAlign: 'right',
    width: '50%'
  },
  dottedLine: {
    marginTop: 10,
    marginBottom: 10,
    width:  '100%',
    borderColor: '#333',
    borderRadius: 0.5,
    borderStyle: 'dashed',
    borderBottomWidth: 1
  },
  body7: {
    fontFamily: 'abel-regular',
    color: '#333',
    fontSize: 16,
    lineHeight: 40,
    width: '50%',
    fontWeight: 'bold'
  },
  body8: {
    fontFamily: 'abel-regular',
    color: '#333',
    fontSize: 16,
    lineHeight: 40,
    textAlign: 'right',
    width: '50%',
    fontWeight: 'bold'
  },
};

export default connect(({routes}) => ({routes}))(Overview)
