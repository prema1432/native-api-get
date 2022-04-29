// import React from 'react';
// import axios from 'axios';
// import { Text, ListView, StyleSheet } from 'react-native'  
// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//         <ListView  
//         dataSource={this.state.dataSource}  
//         renderRow={  
//             (rowData) =>  
//                 <Text style={{fontSize: 20}}>{rowData}</Text>}  
//     />  
//     //   <ListView>
//     //     {
//     //       this.state.persons
//     //         .map(person =>
//     //           <li key={person.id}>{person.name}</li>
//     //         )
//     //     }
//       </ul>
//     )
//   }
// }
