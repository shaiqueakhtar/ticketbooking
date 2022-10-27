import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import HashMap from 'hashmap';

let ticketCost = 200;
const DisplaySeates = ({navigation, route}: any) => {
  const [selectedSeat, setSelectedSeat] = useState({row: [], column: []});

  const [data, setData] = useState({
    rows: [],
    columns: [0],
  });

  // const multipleSelect = [];

  // const onSelect = () => {
  //   selectedSeat.push(multipleSelect);
  // };

  // const clickData = {};
  // var map = new HashMap();

  useEffect(() => {
    // if (
    // route.params.post.rows !== undefined &&
    // route.params.post.columns !== undefined
    // ) {
    setData({rows: route.params.post.rows, columns: route.params.post.columns});
    // }
  }, [route.params]);
  console.log('routess---', route.params);

  console.log('rakesh', data);

  console.log('copy==', selectedSeat);

  const totalvalue = setSelectedSeat * ticketCost;

  return (
    <>
      {/* rows */}
      <View style={{display: 'flex', flexDirection: 'column'}}>
        {data.rows.map((item, rowIndex) => {
          return (
            <View style={{display: 'flex', flexDirection: 'row'}}>
              {data.columns.length > 0 ? (
                data.columns.map((item: any, columnIndex: any) => (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedSeat({
                        rows: rowIndex + 1,
                        columns: columnIndex + 1,
                      });
                    }}>
                    <Image
                      source={require('../assets/images/reserved.png')}
                      style={[
                        styles.image,
                        {
                          tintColor:
                            selectedSeat.columns == columnIndex + 1 &&
                            selectedSeat.rows == rowIndex + 1
                              ? 'red'
                              : 'green',
                        },
                      ]}
                    />
                  </TouchableOpacity>
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
        <Text>{totalvalue}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    tintColor: 'green',
    margin: 8,
  },
});
export default DisplaySeates;

// how to store data in hashMap ?
