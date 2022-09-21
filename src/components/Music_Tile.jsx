import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import musicimg from "../../assets/musicimg1.png"
const Music_Tile = ({icon,title,artist}) => {
  return (
    <LinearGradient colors={["#212121", "#1c1919"]} style={styles.main_cont} >
      
        <Image source={musicimg} style={{width: 50, height: 50}} />
{/* {icon} */}
  <View style={styles.songInfo}>
    <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>{title}</Text>
  </View>
  <View style={{display:'flex',flexDirection:'row',}}>
  <View style={{marginRight:20}}>
    {icon[0]} 
  </View>
  <View style={{marginRight:20}}>
    {icon[1]}
  </View>

  </View>
    </LinearGradient>
  )
}

export default Music_Tile

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