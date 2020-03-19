import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

const Header = () => {
  return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>
            Albums
            </Text>
        </View>
  );
};
const styles = StyleSheet.create({
    viewStyle: {
      backgroundColor:'#6495ED',
      alignItems: 'center',
      justifyContent: 'center',
      height:65,
      shadowColor:'#000',
      shadowOffset:{ width: 0, height: 3},
      shadowOpacity:0.2,
      elevation:2
    },
    textStyle: {
      fontSize:25,
      color:'white',
    },
});

export default Header;