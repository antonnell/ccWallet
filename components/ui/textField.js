import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert,Text, View, TextInput } from 'react-native';

export default class CurveTextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      focussed: false,
      placeholder: this.props.placeholder
    };

    this.onFocus = this.onFocus.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  onFocus() {
    this.setState({focussed: true})
  }
  onBlur() {
    this.setState({focussed: false})
  }
  onChange(value) {
    this.setState({value})
  }

  render() {

    let textStyle = {}
    let inputStyle = {}
    let inputContainerStyle = {}


    switch (this.props.color) {
      case 'primary':
        if(!this.state.focussed) {
          textStyle = styles.primary.normal.text
          inputStyle = styles.primary.normal.input
          inputContainerStyle = styles.primary.normal.inputContainer
        } else {
          textStyle = styles.primary.focussed.text
          inputStyle = styles.primary.focussed.input
          inputContainerStyle = styles.primary.focussed.inputContainer
        }
        break;
      case 'secondary':
        if(!this.state.focussed) {
          textStyle = styles.secondary.normal.text
          inputStyle = styles.secondary.normal.input
          inputContainerStyle = styles.secondary.normal.inputContainer
        } else {
          textStyle = styles.secondary.focussed.text
          inputStyle = styles.secondary.focussed.input
          inputContainerStyle = styles.secondary.focussed.inputContainer
        }
        break;
      case 'tertiary':

        break;
      default:
        if(!this.state.focussed) {
          textStyle = styles.primary.normal.text
          inputStyle = styles.primary.normal.input
          inputContainerStyle = styles.primary.normal.inputContainer
        } else {
          textStyle = styles.primary.focussed.text
          inputStyle = styles.primary.focussed.input
          inputContainerStyle = styles.primary.focussed.inputContainer
        }
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
            onChangeText={this.onChange}
            value={this.state.value}
            placeholder={this.props.placeholder}
            secureTextEntry={this.props.variant=='password'}
            keyboardType={this.props.variant=='password'?'default':this.props.variant}
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
    fontSize: 16,
    marginBottom: 10
  },
  inputContainer: {
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderRadius: 9,
    borderStyle: 'solid'
  },
  inputContainerFocussed: {
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderRadius: 9,
    borderStyle: 'solid'
  },
  input: {
    fontFamily: 'abel-regular',
    fontSize: 18
  },
  inputFocussed: {
    fontFamily: 'abel-regular',
    fontSize: 18
  },
  primary: {
    normal: {
      input: {
        color: '#bbb',
      },
      inputContainer: {
        borderColor: '#bbb',
      },
      text: {
        color: '#bbb',
      }
    },
    focussed: {
      input: {
        color: '#fff',
      },
      inputContainer: {
        borderColor: '#fff',
      },
      text: {
        color: '#fff',
      }
    }
  },
  secondary: {
    normal: {
      input: {
        color: '#848484',
      },
      inputContainer: {
        borderColor: '#848484',
      },
      text: {
        color: '#848484',
      }
    },
    focussed: {
      input: {
        color: '#333',
      },
      inputContainer: {
        borderColor: '#333',
      },
      text: {
        color: '#333',
      }
    }
  }
};

CurveTextField.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['text', 'password', 'email-address', 'numeric']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
};
