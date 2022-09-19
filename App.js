import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Player from './src/screens/Player';
import AllPlaylist from './src/screens/AllPlaylist';
import AllMusic from './src/screens/AllMusic';
import Account from './src/screens/Account';
import * as MediaLib from 'expo-media-library';
import { useEffect, useState } from 'react';
const Stack = createNativeStackNavigator();

export default function App() {
  const [songs, setSongs] = useState({});
  const permissionPopUp = async()=>{
    Alert.alert("Permission Required","We need your permission to access your media library",[
      {text:"Accept",onPress:()=>{MediaLib.requestPermissionsAsync();
      getPermission();
    }},
    {text:"Cancel",onPress:()=>permissionPopUp()},
  ]
    )
  }
  // const getPermission =async()=>{
  //   console.log("ugawugue");
  //   const permission = await MediaLib.getPermissionsAsync();
  //   console.log(permission);
  //   if(permission.granted === false && permission.canAskAgain === true){
  //     const newPermission = await MediaLib.requestPermissionsAsync();
  //     if(newPermission.status === "denied"){
  //       alert("Permission denied,Please allow permission to show your music");
  //       MediaLib.requestPermissionsAsync();
  //     }
  //     if(newPermission.status === "denied" && newPermission.canAskAgain === false){
  //       alert("Permission denied,Can't show your music");
  //     }
  //     if(newPermission.status === "granted"){
  //       const {assets}= await MediaLib.getAssetsAsync();
  //       console.log(assets);
  //     }
  //   }
  //   if(permission.granted === true){
  //     const {assets} = await MediaLib.getAssetsAsync();
  //     console.log(assets);
  //   }
  // }
  const getPermission = async () => {
    const permission = await MediaLib.getPermissionsAsync();
    console.log(permission);
    if(permission.granted === false ){
      const newPermission = await MediaLib.requestPermissionsAsync();
      if(newPermission.status === "denied"){
        // alert("Permission denied,Please allow permission to show your music");
       permissionPopUp();
      }
      if(newPermission.status === "denied" && newPermission.canAskAgain === false){
        // alert("Permission denied,Can't show your music");
        // MediaLib.requestPermissionsAsync();
        permissionPopUp();
      }
      if(newPermission.status === "granted"){
        // const {assets}= await MediaLib.getAssetsAsync();
        console.log("Permission granted showing your songs"); 
        getAllSongs();
        // console.log(assets);
      }
    }
    else if(permission.granted === true){
      // const {assets} = await MediaLib.getAssetsAsync();
      // console.log(assets);
      console.log("Permission granted showing your songs"); 
      getAllSongs();
    }
  }
  const getAllSongs = async()=>{
    const {assets} = await MediaLib.getAssetsAsync({
      mediaType:"audio",
    });
    console.log(assets);
    setSongs(assets);
    // console.log("Songs" , songs);
  }
  useEffect(() => {
    getPermission();

  }, [])
  
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
