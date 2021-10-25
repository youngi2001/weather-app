import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import info from './screens/info';

export default function App() {

  const MainNavigator = createStackNavigator();

  return (
    <View style={{flex:1}}>
      <NavigationContainer>
        <MainNavigator.Navigator 
          initialRouteName = "Home" 
          screenOptions={{
            headerShown: false
          }} 
        >
          <MainNavigator.Screen name="Home" component={Home} />
          <MainNavigator.Screen name="info" component={info}/>
        </MainNavigator.Navigator>
      </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
