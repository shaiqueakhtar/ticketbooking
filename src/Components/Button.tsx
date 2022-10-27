import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const Button = ({btnText, onPress}: any) => {
  return (
    <>
      <SafeAreaView>
        <TouchableOpacity style={styles.container} onPress={() => onPress}>
          <View style={styles.button}>
            <Text style={styles.text}>{btnText}</Text>
          </View>

          <View style={styles.arrowImg}>
            {/* <Image
                source={require('../assets/arrow.png')}
                style={styles.arrow}
              /> */}
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};
const styles: any = StyleSheet.create({
  container: {
    // marginTop: hp('2%'),
  },
  button: {
    width: wp('76%'),
    height: hp('7%'),
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: wp('5%'),
    borderRadius: 10,
    elevation: 10,
  },
  btn: {
    height: hp('4%'),
    width: wp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55,
    elevation: 10,
    backgroundColor: '#fff',
    position: 'relative',
    bottom: hp('5.5%'),
    left: wp('73%'),
  },
  text: {},
});
export default Button;
