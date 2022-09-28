import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNav from './BottomNav'
import { LinearGradient } from 'expo-linear-gradient'

const AllPlaylist = ({navigation}) => {
  return (
    <LinearGradient colors={["hsla(0, 0%, 2%, 1)","hsla(300, 17%, 2%, 1)","hsla(0, 0%, 0%, 1)"]} style={styles.container}>
      <Text style={styles.head1}>All Playlist</Text>
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
        justifyContent: 'center',
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
      }
})