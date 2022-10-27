import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const SeatBooking = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <Text>Bahubali</Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          marginVertical: 40,
        }}>
        <TouchableOpacity style={styles.TicketButtom}>
          <Text>Book Ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TicketButtom}>
          <Text>Book Ticket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  TicketButtom: {
    backgroundColor: '#f84464',
    height: 40,
    width: 100,
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000000b0',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2.62,

    elevation: 3,
    alignItems: 'center',
  },
});
export default SeatBooking;
