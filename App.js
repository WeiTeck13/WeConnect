/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 
 import HomeScreen from './home';

 import Contact from './Contact';

 const Stack = createStackNavigator();
 
 const App = () => {
   return (
     <NavigationContainer>
 
       <Stack.Navigator initialRouteName="Home">
 
         <Stack.Screen name="Home" component={HomeScreen} options={{headerStyle: {backgroundColor: '#0057b7'}, headerTitleStyle: {color:'white'} }}/>
        
         <Stack.Screen name="Contact" component={Contact} options={{headerStyle: {backgroundColor: '#0057b7'}, headerTitleStyle: {color:'white'} }}/>
        
       </Stack.Navigator>
 
     </NavigationContainer>
   );
 };
 
 export default App;
 