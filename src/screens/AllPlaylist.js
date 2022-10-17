import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomNav from './BottomNav'
import { LinearGradient } from 'expo-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Playlist_Tile from '../components/Playlist_Tile'

const AllPlaylist = ({navigation}) => {
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    getPlaylists();
  }, [])
  const getPlaylists = () => {
    AsyncStorage.getItem('playlists')
    .then(value=>{
        console.log("Inside of get playlists",value);
        setPlaylist(JSON.parse(value));
    })
    .catch(e=>{
        console.log(e);
    })
    .finally(e=>{
        console.log(e);
    })
}
  return (
    <LinearGradient colors={["hsla(0, 0%, 2%, 1)","hsla(300, 17%, 2%, 1)","hsla(0, 0%, 0%, 1)"]} style={styles.container}>
      <Text style={styles.head1}>All Playlist</Text>
      <ScrollView style={{width:"100%",height:"90%"}}>
        <View style={[styles.playlist,styles.playlist_cont]} >
          {
            playlist.map((item,index)=>{
             return(
              <Playlist_Tile key={index} name={item.name} number={item.songs.length} navigation={navigation} songs={item.songs}/>
             )
            })
          }
        </View>    
        </ScrollView>
      <View style={[styles.bottomnav,styles.shadowProp,styles.elevation]}>
      <BottomNav active={"allplaylist"} navigation={navigation}/>
      </View>
    </LinearGradient>
  )
}

export default AllPlaylist

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#190A25',
        alignItems: 'center',
        // justifyContent: 'center',
      },
      bottomnav:{
        display: 'flex',
        width: "100%",
        position: 'absolute',
        alignItems:'center',
        bottom: 0,
      },
      shadowProp: {
        shadowColor: 'black',
        shadowOffset: {width: -7, height: 5},
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      elevation: {
        elevation: 100,
        shadowColor: 'black',
      },
      head1:{
        color:"white",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 20,
      },
      playlist:{
        width: "100%",
        height: "80%",
        display: 'flex',
        marginTop: 10,

    },
    playlist_cont:{
          height: "80%",
        display: 'flex',
        alignItems:'center',
      },
})