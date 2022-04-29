import React, { useEffect, useState } from 'react';

import { SafeAreaView, FlatList, StyleSheet, Text, View } from "react-native";

import axios from "axios";

const baseURL = "https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData";

// export default function App() {
 


// const persons = [
//   {
// 	id: "1",
// 	name: "Earnest Green",
//   },
//   {
// 	id: "2",
// 	name: "Winston Orn",
//   },
//   {
// 	id: "3",
// 	name: "Carlton Collins",
//   },
//   {
// 	id: "4",
// 	name: "Malcolm Labadie",
//   },
//   {
// 	id: "5",
// 	name: "Michelle Dare",
//   },
//   {
// 	id: "6",
// 	name: "Carlton Zieme",
//   },
//   {
// 	id: "7",
// 	name: "Jessie Dickinson",
//   },
//   {
// 	id: "8",
// 	name: "Julian Gulgowski",
//   },
//   {
// 	id: "9",
// 	name: "Ellen Veum",
//   },
//   {
// 	id: "10",
// 	name: "Lorena Rice",
//   },

//   {
// 	id: "11",
// 	name: "Carlton Zieme",
//   },
//   {
// 	id: "12",
// 	name: "Jessie Dickinson",
//   },
//   {
// 	id: "13",
// 	name: "Julian Gulgowski",
//   },
//   {
// 	id: "14",
// 	name: "Ellen Veum",
//   },
//   {
// 	id: "15",
// 	name: "Lorena Rice",
//   },
// ];

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//       {persons.map((person) => {
//         return (
//           <View>
//             <FlatList
//  data={persons}
//  renderItem={({item}) => <Text>{item.name}</Text>}
// />
//             {/* <Text style={styles.item}>{person.name}</Text> */}
//           </View>
//         );
//       })}
//       </ScrollView>
//     </View>
//   );
// }




// export default function App() {

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList 
//         data={persons}
//         renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
//         keyExtractor={(item) => item.id}
//       />
//     </SafeAreaView>
//   );
// }


export default function App() {
  const [post, persons] = useState([]);


  useEffect(() => {
    axios.get(`http://3.111.62.245/api/v1/bus/BusStaticStationNamesAPI/`)
        .then((response) => {
          console.log(response.data)
            persons(response.data);
        })
}, [])


  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     console.log(response)
  //     persons(response.data);
  //   });
  // }, []);


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

// const baseURL = "https://jsonplaceholder.typicode.com/posts/2";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       console.log(response)
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <View>
//       <Text>{post.title}</Text>
//       {/* <Text>{post.body}</Text> */}
//     </View>
//   );
// }
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   ScrollView,
//   View,
//   Button,
//   Image,
//   Platform,
// } from "react-native";
// import Constants from "expo-constants";
// const baseUrl = "https://reqres.in";
// function User({ userObject }) {
//   return (
//     <View>
//       <Image
//         source={{ uri: userObject.avatar }}
//         style={{ width: 128, height: 128, borderRadius: 64 }}
//       />
//       <Text style={{ textAlign: "center", color: "white" }}>
//         {`${userObject.first_name} ${userObject.last_name}`}
//       </Text>
//       <Text style={{ textAlign: "center", color: "white" }}>
//         {`${userObject.text} ${userObject.last_name}`}
//       </Text>
//     </View>
//   );
// }
// export default function App() {
//   const [userId, setUserId] = useState(1);
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [hasError, setErrorFlag] = useState(false);
//   const changeUserIdHandler = () => {
//     setUserId((userId) => (userId === 3 ? 1 : userId + 1));
//   };
//   useEffect(() => {
//     const source = axios.CancelToken.source();
//     const url = `${baseUrl}/api/users/${userId}`;
//     const fetchUsers = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(url, { cancelToken: source.token });
//         if (response.status === 200) {
//           setUser(response.data.data);
//           setIsLoading(false);
//           return;
//         } else {
//           throw new Error("Failed to fetch users");
//         }
//       } catch (error) {
//         if(axios.isCancel(error)){
//           console.log('Data fetching cancelled');
//         }else{
//           setErrorFlag(true);
//           setIsLoading(false);
//         }
//       }
//     };
//     fetchUsers();
//     return () => source.cancel("Data fetching cancelled");
//   }, [userId]);
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.wrapperStyle}>
//         {!isLoading && !hasError && user && <User userObject={user} />}
//       </View>
//       <View style={styles.wrapperStyle}>
//         {isLoading && <Text> Loading </Text>}
//         {!isLoading && hasError && <Text> An error has occurred </Text>}
//       </View>
//       <View>
//         <Button
//           title="Load user"
//           onPress={changeUserIdHandler}
//           disabled={isLoading}
//           style={styles.buttonStyles}
//         />
//       </View>
//     </ScrollView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "dodgerblue",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
//   },
//   wrapperStyle: {
//     minHeight: 128,
//   },
//   buttonStyles: {
//     padding: 100,
//   },
// });