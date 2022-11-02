import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import musicimg from "../../assets/musicimg1.png"
import AsyncStorage from '@react-native-async-storage/async-storage';
const Playlist_Tile = ({name,number,navigation,songs}) => {
  console.log("playlist",songs);
    const handlePress= (e)=>{
        console.log("pressed")
        console.log(name,songs,number);
        navigation.navigate("Playlist_Songs",{name:name,number:number,songs:songs,navigation:navigation})
    }
    return (
          <TouchableOpacity onPress={(e)=>handlePress(name)}>
      <LinearGradient colors={["#212121", "#1c1919"]} style={styles.main_cont} >
          
      <Image source={musicimg} style={{width: 50, height: 50}} />
      <View style={styles.songInfo}>
        <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>{name}</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',}}>
      <View style={{marginRight:20}}>
        <Text style={{color:"white"}}>{number} {number ==1 ? "Song" :"Songs"}</Text>
        {/* <Text>{songs[0]}</Text> */}
      </View>
      </View>
        </LinearGradient>
        </TouchableOpacity>
      )
}

export default Playlist_Tile

const styles = StyleSheet.create({
    main_cont:{
        height: 70,
        width: "90%",
        borderColor:"white",
        borderWidth:1,
        marginBottom:"3%",
        display: 'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        },
        songInfo:{
          width: "55%",
        }
})