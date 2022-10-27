import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';

// let selectedSeats = [];

// let ticketCost = 200;

const Coutomize = ({navigation, route}: any) => {
  console.log('route', route);

  const [data, setData] = useState({
    rows: [],
    columns: [0],
  });

  const updateRow = (row: number) => {
    let dataCopy = {...data, rows: []};
    for (let i = 0; i < row; i++) {
      dataCopy.rows.push(i);
    }

    console.log('hi-----', dataCopy);
    setData(dataCopy);
  };

  const updateColumn = (column: number) => {
    let dataCopy = {...data, columns: []};
    for (let i = 0; i < column; i++) {
      dataCopy.columns.push(i);
    }
    console.log('bye-----', dataCopy);
    setData(dataCopy);
  };

  const RenderData = () => {
    console.log('datacol', data.columns);
    console.log('datarow', data.rows);
    return (
      <>
        {/* rows */}
        <View style={{flexDirection: 'column'}}>
          {data.rows.map((item, rowIndex) => {
            return (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {data.columns.length > 0 ? (
                  data.columns.map((item: any, columsIndex: any) => (
                    <KeyboardAvoidingView>
                      <TouchableOpacity
                        onPress={() =>
                          console.log(
                            'seatNum--',
                            rowIndex + 1,
                            columsIndex + 1,
                          )
                        }>
                        <Image
                          source={require('../assets/images/reserved.png')}
                          style={{
                            height: 30,
                            width: 30,
                            tintColor: '#ccc',
                            margin: 8,
                          }}
                        />
                      </TouchableOpacity>
                    </KeyboardAvoidingView>
                  ))
                ) : (
                  <View>
                    <Image
                      source={require('../assets/images/reserved.png')}
                      style={{
                        height: 30,
                        width: 30,
                        tintColor: 'green',
                        margin: 8,
                      }}
                    />
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View>
        <View style={styles.textInputContainer}>
          <Text>EnterRows</Text>
          <TextInput
            placeholder="enterRows"
            onChangeText={(text: any) => updateRow(text)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text>Enter Colon</Text>
          <TextInput
            placeholder="enterColon"
            placeholderTextColor={'#080808'}
            onChangeText={(text: any) => updateColumn(text)}
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={styles.seatsContainer}>{RenderData()}</View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate({
            name: 'DisplaySeates',
            params: {post: data},
            merge: true,
          })
        }>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  seatsContainer: {
    width: '100%',
    borderWidth: 1,
    height: ' 70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countContainer: {
    position: 'absolute',
    height: 90,
    width: '100%',
    backgroundColor: '#fff',
    elevation: 1,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    marginHorizontal: 10,
    height: 40,
    marginVertical: 5,
    borderWidth: 1,
    elevation: 10,
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 100,
    backgroundColor: '#000',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#fff',
  },
});

export default Coutomize;
