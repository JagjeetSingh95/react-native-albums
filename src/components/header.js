import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View
} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.headerTextStyle}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    viewStyle: {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 65,
      paddingTop: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    },
    headerTextStyle: {
      fontSize: 20
    }
})

export default Header;