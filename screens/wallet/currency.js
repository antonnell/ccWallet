import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Avatar from '../../components/ui/avatar';
import Button from '../../components/ui/button';
import TextField from '../../components/ui/textField';

class Currency extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buyExpanded: false,
      amount: ''
    };

    this.buttonPressed = this.buttonPressed.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  render() {

    let buttonText = 'buy'
    let avatarColor = 'primary'
    let containerStyle = {}
    let titleStyle = {}
    let buttonContainerStyle = styles.payContainer
    let cardStyle = {}

    if(this.state.buyExpanded) {
      buttonText = 'cancel'
      avatarColor = 'tertiary'
      containerStyle = styles.containerSelected
      titleStyle = styles.titleSelected
      buttonContainerStyle = styles.payContainerSelelcted
      cardStyle = styles.cardSelected
    }

    return (
      <View style={Object.assign({}, styles.card, styles.cardStyle)} key={this.props.currency.key}>
        <View style={Object.assign({}, styles.container, containerStyle)}>
          <View style={styles.leftContainer}>
            <Avatar variant={'icon'} color={avatarColor} icon={this.props.currency.icon} size={'small'}/>
          </View>
          <View style={styles.rightContainer}>
            <Text style={Object.assign({}, styles.title, titleStyle)}>BUY {this.props.currency.name}</Text>
            <Text style={styles.subtitle}>Lorem ipsum dolor sit amet</Text>
          </View>
          <View style={buttonContainerStyle}>
            <Button
              title={buttonText}
              onPress={()=> {
                this.buttonPressed()
              }}
              variant='solid'
              color='secondary'
              size='small'
            />
          </View>
        </View>
        {
          this.state.buyExpanded?
          <View style={styles.containerExpanded}>
            <View style={styles.expanded}>
              <Text style={styles.available}>AVAILABLE ETH: </Text>
              <Text style={styles.value}>2456.56</Text>
            </View>
            <TextField
              label={''}
              placeholder={'Amount'}
              value={this.state.amount}
              onChange={this.onChange}
              color={'secondary'}
              variant={'numeric'}
            />
            <Button
              title={'Next'}
              onPress={()=> {
                Actions.paymentOverview()
              }}
              variant='solid'
              color='secondary'
              size='medium'
              style='round'
            />
          </View>
          :<View></View>

        }
      </View>
    );
  }

  buttonPressed() {
    this.setState({buyExpanded: !this.state.buyExpanded})
  }

  onChange() {

  }
}

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7
  },
  containerSelected: {
    backgroundColor: '#333'
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 7,
    marginBottom: 12
  },
  cardSelected: {
    borderColor: '#333',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  leftContainer: {
    marginRight: 12
  },
  rightContainer: {
    flex: 1,
  },
  payContainer: {
    width: 60
  },
  payContainerSelelcted: {
    width: 80
  },
  title: {
    fontFamily: "abel-regular",
    color: '#333',
    fontSize: 15,
    fontWeight: 'bold'
  },
  titleSelected: {
    color: '#fff',
  },
  subtitle: {
    fontFamily: "abel-regular",
    color: '#848484',
    fontSize: 13,
  },

  containerExpanded: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12
  },
  expanded: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  available: {
    fontFamily: "abel-regular",
    color: '#848484',
    fontSize: 14,
    fontWeight: 'bold'
  },
  value: {
    fontFamily: "abel-regular",
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold'
  }
};

export default connect(({routes}) => ({routes}))(Currency)
