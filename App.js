import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <View>
       <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name="Login" component={Login} />
       </Stack.Navigator>
       </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
