import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert,Text, View, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class Avatar extends Component {
  render() {
    switch (this.props.variant) {
      case 'icon':
        return this.renderIcon(this.props)
      case 'text':
        return this.renderText(this.props)
      default:
        return this.renderText(this.props)
    }
  }

  renderIcon(props) {

    let color = null
    let textColor = null
    switch (props.color) {
      case 'primary':
        color = styles.color.primary
        textColor = styles.color.textPrimary
        break;
      case 'secondary':
        color = {
          backgroundColor: '#848484'
        }
        textColor = {
          color: '#fff'
        }
        break;
      case 'tertiary':
        color = {
          backgroundColor: '#fff',
          borderColor: '#dedede',
          borderStyle: 'solid',
          borderWidth: 3
        }
        textColor = {
          color: '#333'
        }
        break;
      default:
        color = styles.color.primary
        textColor = styles.color.textPrimary
        break;
    }
    let size = null
    switch (props.size) {
      case 'small':
        size = styles.size.small
        break;
      case 'medium':
        size = styles.size.medium
        break;
      case 'large':
        size = styles.size.large
        break;
      default:
        size = styles.size.medium
        break;
    }

    return (
      <View style={Object.assign({}, styles.container, color, size)}>
        <MaterialIcons style={styles.text} name={props.icon} size={size.height} color={textColor.color} />
      </View>
    );
  }

  renderText(props) {

    let color = null
    let textColor = null
    switch (props.color) {
      case 'primary':
        color = styles.color.primary
        textColor = styles.color.textPrimary
        break;
      case 'secondary':
        color = {
          backgroundColor: '#848484'
        }
        textColor = {
          color: '#333'
        }
        break;
      case 'tertiary':
        color = {
          backgroundColor: '#fff',
          borderColor: '#dedede',
          borderStyle: 'solid',
          borderWidth: 1
        }
        textColor = {
          color: '#333'
        }
        break;
      default:
        color = styles.color.primary
        textColor = styles.color.textPrimary
        break;
    }
    let size = null
    switch (props.size) {
      case 'small':
        size = styles.size.small
        break;
      case 'medium':
        size = styles.size.medium
        break;
      case 'large':
        size = styles.size.large
        break;
      default:
        size = styles.size.medium
        break;
    }

    return (
      <View style={Object.assign({}, styles.container, color, size)}>
        <Text style={Object.assign({}, styles.text, textColor)}>{props.label}</Text>
      </View>
    );
  }
};

const styles = {
  container: {
   justifyContent: 'center'
  },
  text: {
    fontFamily: 'bebas-neue-regular',
    fontSize: 20,
    textAlign: 'center'
  },
  color: {
    primary: {
      backgroundColor: '#333'
    },
    secondary: {
      backgroundColor: '#dedede'
    },
    tertiary: {
      backgroundColor: '#fff',
      border: '1px solid #c9c9c9'
    },
    textPrimary: {
      color: '#fff'
    },
    secondary: {
      color: '#fff'
    },
    tertiary: {
    }
  },
  size: {
    small: {
      height: 40,
      width: 40,
      borderRadius: 20
    },
    medium: {
      height: 54,
      width: 54,
      borderRadius: 27
    },
    large: {
      height: 150,
      width: 150,
      borderRadius: 75
    }
  }
};

Avatar.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  variant: PropTypes.oneOf(['icon', 'text', 'image']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
};
