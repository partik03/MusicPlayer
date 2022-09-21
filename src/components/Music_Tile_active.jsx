import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import musicimg from "../../assets/musicimg.png"

const Music_Tile_active = ({icon,title,artist}) => {
  return (
    <LinearGradient colors={["#dedcdc", "#faf7f7"]} style={styles.main_cont} >
      
        <Image source={musicimg} style={{width: 50, height: 50}} />
{/* {icon} */}
<View style={styles.songInfo}>
  <Text style={{color:'black',fontSize:15,fontWeight:'bold'}}>{title}</Text>
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

export default Music_Tile_active

const styles = StyleSheet.create({
main_cont:{
height: 70,
width: "90%",
borderColor:"black",
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