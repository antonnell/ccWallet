import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View, Alert, TouchableNativeFeedback, Platform } from 'react-native';

export default class CurveButton extends Component {

  renderLink(props) {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          onPress={props.onPress}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={{}}>
            <Text style={Object.assign({}, styles.link)}>{props.title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }

  renderSolid(props) {
    let buttonStyle = {}
    let buttonSize = {}
    let buttonColor = {}
    let textSize = {}
    let textColor = {}
    switch (props.style) {
      case 'round':
        buttonStyle = styles.solid.style.round
        break;
      case 'block':
        buttonStyle = styles.solid.style.block
      break;
      default:
        buttonStyle = styles.solid.style.round
        break;
    }

    switch(props.size) {
      case 'small':
        buttonSize = styles.solid.size.small.button
        textSize = styles.solid.size.small.text
        break;
      case 'medium':
        buttonSize = styles.solid.size.medium.button
        textSize = styles.solid.size.medium.text
        break;
      case 'large':
        buttonSize = styles.solid.size.large.button
        textSize = styles.solid.size.large.text
        break;
      default:
        buttonSize = styles.solid.size.medium.button
        textSize = styles.solid.size.medium.text
        break;
    }

    switch(props.color) {
      case 'primary':
        buttonColor = styles.solid.color.primary.button
        textColor = styles.solid.color.primary.text
        break;
      case 'secondary':
        buttonColor = styles.solid.color.secondary.button
        textColor = styles.solid.color.secondary.text
        break;
      case 'tertiary':
        buttonColor = styles.solid.color.tertiary.button
        textColor = styles.solid.color.tertiary.text
        break;
      default:
        buttonColor = styles.solid.color.primary.button
        textColor = styles.solid.color.primary.text
        break;
    }

    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          onPress={props.onPress}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={Object.assign({}, styles.button, styles.solid, buttonStyle, buttonSize, buttonColor)}>
            <Text style={Object.assign({}, styles.text, textSize, textColor)}>{props.title.toUpperCase()}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
  renderOutline(props) {
      let buttonStyle = {}
      let buttonSize = {}
      let buttonColor = {}
      let textSize = {}
      let textColor = {}
      switch (props.style) {
        case 'round':
          buttonStyle = styles.outline.style.round
          break;
        case 'block':
          buttonStyle = styles.outline.style.block
        break;
        default:
          buttonStyle = styles.outline.style.round
          break;
      }

      switch(props.size) {
        case 'small':
          buttonSize = styles.outline.size.small.button
          textSize = styles.outline.size.small.text
          break;
        case 'medium':
          buttonSize = styles.outline.size.medium.button
          textSize = styles.outline.size.medium.text
          break;
        case 'large':
          buttonSize = styles.outline.size.large.button
          textSize = styles.outline.size.large.text
          break;
        default:
          buttonSize = styles.outline.size.medium.button
          textSize = styles.outline.size.medium.text
          break;
      }

      switch(props.color) {
        case 'primary':
          buttonColor = styles.outline.color.primary.button
          textColor = styles.outline.color.tertiary.text
          break;
        case 'secondary':
          buttonColor = styles.outline.color.secondary.button
          textColor = styles.outline.color.secondary.text
          break;
        case 'tertiary':
          buttonColor = styles.outline.color.tertiary.button
          textColor = styles.outline.color.tertiary.text
          break;
        default:
          buttonColor = styles.outline.color.primary.button
          textColor = styles.outline.color.primary.text
          break;
      }

    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          onPress={props.onPress}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={Object.assign({}, styles.button, styles.outline, buttonStyle, buttonSize, buttonColor)}>
            <Text style={Object.assign({}, styles.text, textSize, textColor)}>{props.title.toUpperCase()}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }

  render() {
    switch(this.props.variant) {
      case 'solid':
        return this.renderSolid(this.props)
      case 'outline':
        return this.renderOutline(this.props)
      case 'link':
        return this.renderLink(this.props)
      case 'icon':
        return this.renderIcon(this.props)
      default:
        return this.renderSolid(this.props)
    }
  }
};

const styles = {
  container: {
   justifyContent: 'center',
   width: '100%'
  },
  button: {
    marginBottom: 20,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontFamily: 'abel-regular',
  },
  solid: {
    style: {
      round: {
        borderRadius: 6
      },
      block: {
        borderRadius: 0
      }
    },
    size: {
      small: {
        button: {
          height: 30
        },
        text: {
          lineHeight: 28,
          fontSize: 14
        }
      },
      medium: {
        button: {
          height: 60
        },
        text: {
          lineHeight: 56,
          fontSize: 17
        }
      },
      large: {
        button: {
          height: 90
        },
        text: {
          lineHeight: 88,
          fontSize: 18
        }
      },
    },
    color: {
      primary: {
        button: {
          backgroundColor: '#fff'
        },
        text: {
          color: '#333'
        },
      },
      secondary: {
        button: {
          backgroundColor: '#fff'
        },
        text: {
          color: '#333'
        },
      },
      tertiary: {
        button: {
          backgroundColor: '#fff'
        },
        text: {
          color: '#333'
        },
      },
    }
  },
  outline: {
    style: {
      round: {
        borderRadius: 6,
        borderStyle: 'solid',
        borderWidth: 3
      },
      block: {
        borderRadius: 0,
        borderStyle: 'solid',
        borderWidth: 3
      }
    },
    size: {
      small: {
        button: {
          height: 30
        },
        text: {
          lineHeight: 28,
          fontSize: 14
        }
      },
      medium: {
        button: {
          height: 60
        },
        text: {
          lineHeight: 56,
          fontSize: 17
        }
      },
      large: {
        button: {
          height: 90
        },
        text: {
          lineHeight: 88,
          fontSize: 18
        }
      },
    },
    color: {
      primary: {
        button: {
          backgroundColor: '#333',
          borderColor: '#fff'
        },
        text: {
          color: '#fff'
        }
      },
      secondary: {
        button: {
          backgroundColor: '#333',
          borderColor: '#fff'
        },
        text: {
          color: '#fff'
        }
      },
      tertiary: {
        button: {
          backgroundColor: '#333',
          borderColor: '#fff'
        },
        text: {
          color: '#fff'
        }
      },
    }
  },
  link: {
    textAlign: 'center',
    fontFamily: 'abel-regular',
    color: '#bbb',
    fontSize: 16,
    marginBottom: 10
  }
};

CurveButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string,
  variant: PropTypes.oneOf(['solid', 'outline', 'link', 'icon']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  style: PropTypes.oneOf(['round', 'block']),
  icon: PropTypes.object
};
