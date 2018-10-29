import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert,Text, View, TextInput } from 'react-native';

export default class CurveTextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focussed: false
    };

    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  onFocus() {
    this.setState({focussed: true})
  }
  onBlur() {
    this.setState({focussed: false})
  }
  onChange(val) {
    this.setState({value: val})
  }

  render() {

    let textStyle = {}
    let inputStyle = {}
    let inputContainerStyle = {}

    if(this.state.focussed) {
      textStyle = styles.textFocussed
      inputStyle = styles.inputFocussed
      inputContainerStyle = styles.inputContainerFocussed
    }

    return (
      <View style={styles.container}>
        <Text style={Object.assign({}, styles.text, textStyle)}>{this.props.label}</Text>
        <View style={Object.assign({}, styles.inputContainer, inputContainerStyle)}>
          <TextInput
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            underlineColorAndroid = "transparent"
            style={Object.assign({}, styles.input, inputStyle)}
            // onChangeText={this.onChange}
            // value={this.value}
          />
        </View>
      </View>
    );
  }
};

const styles = {
  container: {
   justifyContent: 'center',
   width: '100%',
   marginTop: 10,
   marginBottom: 10
  },
  text: {
    fontFamily: 'abel-regular',
    color: '#bbb',
    fontSize: 16,
    marginBottom: 10
  },
  textFocussed: {
    color: '#fff'
  },
  inputContainer: {
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: '#bbb',
    borderStyle: 'solid'
  },
  inputContainerFocussed: {
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: '#fff',
    borderStyle: 'solid'
  },
  input: {
    fontFamily: 'abel-regular',
    color: '#bbb',
    fontSize: 18
  },
  inputFocussed: {
    fontFamily: 'abel-regular',
    color: '#ff',
    fontSize: 18
  }
};

CurveTextField.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['text', 'password', 'area']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
