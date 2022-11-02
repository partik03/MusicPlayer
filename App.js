import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Player from './src/screens/Player';
import AllPlaylist from './src/screens/AllPlaylist';
import AllMusic from './src/screens/AllMusic';
import Account from './src/screens/Account';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
import LocalMusic from './src/screens/LocalMusic';
import OnlineMusic from './src/screens/OnlineMusic';
import AddToPlaylist from './src/screens/AddToPlaylist';
import Playlist_Song from './src/screens/Playlist_Song';
const Stack = createNativeStackNavigator();

// App function to use it in page
export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Allmusic">
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          <Stack.Screen
            name="Player"
            component={Player}
            options={{
              headerShown: false
            }}
          />
          {/* Isse ghar chal jata hai? */}
          <Stack.Screen
            name="AllPlaylist"
            component={AllPlaylist}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Allmusic"
            component={AllMusic}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="LocalMusic"
            component={LocalMusic}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="OnlineMusic"
            component={OnlineMusic}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="AddToPlaylist"
            component={AddToPlaylist}
            options={{
              headerShown: true,
              title: "Add to Playlist"
            }}
          />
          <Stack.Screen
            name="Playlist_Songs"
            component={Playlist_Song}
            options={{
              headerShown: true,
              title: "Playlist Songs"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
//Variable defining properties for page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
