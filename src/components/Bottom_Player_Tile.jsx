import { Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient';
import musicimg from "../../assets/musicimg.png"
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { setActiveSongStatus } from '../Redux/actions';
const Bottom_Player_Tile = ({navigation}) => {
    const activeSong= useSelector(state => state.activesong);
    const activestatus = useSelector(state => state.activesongstatus);
    const dispatch = useDispatch();
    const toggleStatus = () => {
        dispatch(setActiveSongStatus(!activestatus));
      }
    const icon = [
       activestatus? <AntDesign name="pausecircle" size={34} color="black" onPress={toggleStatus} /> : <AntDesign name="play" size={34} color="black" onPress={toggleStatus}/>,
        <MaterialIcons name="playlist-add" size={34} color="black" onPress={()=>{navigation.navigate("AddToPlaylist",{song:activeSong})}} />
    ]
  return ( 
   <LinearGradient colors={["#dedcdc", "#faf7f7"]} style={styles.main_cont}>
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
    </LinearGradient>
  )
}

export default Bottom_Player_Tile

const styles = StyleSheet.create({
    main_cont:{
        height: "100%",
        width: "100%",
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