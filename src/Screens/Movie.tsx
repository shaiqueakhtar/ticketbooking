import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import data from '../Data/Seats';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Movie = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.Heading}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/images/logo.png')}
          />
          <Text style={styles.headingText}>Book My Ticket</Text>
        </View>

        <Text style={styles.headingText}> Home</Text>
      </View>
      <View>
        <Text style={styles.text}>Recommended Movies</Text>
        {data.map(item => {
          return (
            <View
              style={{marginHorizontal: wp('12%'), marginVertical: wp('4%')}}>
              <TouchableOpacity style={styles.Button}>
                <Text
                  style={styles.buttonText}
                  onPress={() => {
                    navigation.navigate('Coutomize');
                  }}>
                  {item.item}
                </Text>
                <Text style={styles.buttonText}>{item.lang}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33333333',
  },
  Heading: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tinyLogo: {
    height: 30,
    width: 40,
    marginRight: 20,
  },
  MovieButton: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#333333',
  },
  Button: {
    width: wp('76%'),
    height: hp('7%'),
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: wp('5%'),
    borderRadius: 10,
    elevation: 10,
  },
  buttonText: {
    fontStyle: 'italic',
    fontSize: 16,
    color: '#333333',
  },
});

export default Movie;
