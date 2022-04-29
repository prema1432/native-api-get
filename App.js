import React, { useEffect, useState } from 'react';

import { SafeAreaView, FlatList, StyleSheet, Text, View } from "react-native";
import { Searchbar } from 'react-native-paper';

import axios from "axios";



export default function App() {
  const [input, setInput] = useState("");
  const [post, persons] = useState([]);


  useEffect((input) => {
    axios.get(`http://3.111.62.245/api/v1/bus/BusStaticStationNamesAPI/?station_name=${input}`)
        .then((response) => {
          console.log(input)
          console.log(response.data)
            persons(response.data);
        })
}, [])


  const myItemSeparator = () => {
    return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
    };
  
  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
      <Text style={styles.item}>No data found</Text>
      </View>
    );
  };
  
return (
  <SafeAreaView style={styles.container}>
    <View >
    <Searchbar
				placeholder="Search"
				onChangeText={(text) => {
          setInput(text);
				}}
				value={input}
       
			/>
		</View>
    <FlatList
      data={post}
      renderItem={({ item }) => <Text style={styles.item}>{item.Station_Name} - {item.Source_ID} - {item.State_Name}</Text>}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={myItemSeparator}
      ListEmptyComponent={myListEmpty}
      ListHeaderComponent={() => (
        <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' }}>
          List of Bus Stations
        </Text>
      )}
      ListFooterComponent={() => (
        <Text style={{ fontSize: 30, textAlign: "center",marginBottom:20,fontWeight:'bold' }}>Premanath</Text>
      )}
    />
  </SafeAreaView>
  );
 }
 
//styles to see the data more clearly

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  }
});

