import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Player from './src/screens/Player';
import AllPlaylist from './src/screens/AllPlaylist';
import AllMusic from './src/screens/AllMusic';
import Account from './src/screens/Account';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Allmusic'>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Player" component={Player} options={
          {
            headerShown:false,
          }
        } />
        <Stack.Screen name="AllPlaylist" component={AllPlaylist} options={
          {
            headerShown:false,
          }
        } />
        <Stack.Screen name="Allmusic" component={AllMusic} options={
          {
            headerShown:false,
          }
        } />
        <Stack.Screen name="Account" component={Account} options={
          {
            headerShown:false,
          }
        } />
      </Stack.Navigator>
    </NavigationContainer>
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
