import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient';
import musicimg from "../../assets/musicimg.png"
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const Bottom_Player_Tile = () => {
    const activeSong= useSelector(state => state.activesong);
    const icon = [
        <AntDesign name="pausecircle" size={34} color="black" />,
        <MaterialIcons name="playlist-add" size={34} color="black" />
    ]
  return (
    <>
   { activeSong && <LinearGradient colors={["#dedcdc", "#faf7f7"]} style={styles.main_cont} >
      
        <Image source={musicimg} style={{width: 50, height: 50}} />
{/* {icon} */}
  <View style={styles.songInfo}>
    <Text style={{color:'black',fontSize:15,fontWeight:'bold'}}>{activeSong.filename}</Text>
  </View>
  <View style={{display:'flex',flexDirection:'row',}}>
  <View style={{marginRight:20}}>
    {icon[0]} 
  </View>
  <View style={{marginRight:20}}>
    {icon[1]}
  </View>

  </View>
    </LinearGradient>}
    </>
  )
}

export default Bottom_Player_Tile

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