
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Music_Tile from '../components/Music_Tile';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import Music_Tile_active from '../components/Music_Tile_active';
import { setActiveSong, setActiveSongStatus } from '../Redux/actions';
import Bottom_Player_Tile from '../components/Bottom_Player_Tile';
import { useState } from 'react';
import { useEffect } from 'react';
const LocalMusic = ({navigation}) => {
  const mysongs = useSelector(state => state.allsongs);
  const dispatch = useDispatch();
  console.log(mysongs[0]);
  const handlePress =(i)=>{
    dispatch(setActiveSong(i))
  }
  const activeSongDetails = useSelector(state => state.activesong);
  let activeSongUri = null;
  if(mysongs){
    activeSongUri = activeSongDetails.uri;
  }
  const activestatus = useSelector(state => state.activesongstatus);
  const toggleStatus = () => {
    dispatch(setActiveSongStatus(!activestatus));
  }
  return (
    <LinearGradient colors={["hsla(0, 0%, 2%, 1)","hsla(300, 17%, 2%, 1)","hsla(0, 0%, 0%, 1)"]} style={styles.container}>
        <View style={styles.head_cont}>

<Text style={styles.head}>Local Music</Text>
        </View>
        <ScrollView style={{width:"100%",height:"100%"}}>
        <View style={[styles.music,styles.music_cont]} >
          {
            mysongs.map((item,index)=>{
             return(
                   item.uri ===activeSongUri?
                  <Music_Tile_active title={item.filename} key={index} icon={[activestatus ?<AntDesign name="pausecircle" size={34} color="black" onPress={toggleStatus} /> : <AntDesign name="play" size={34} color="black"  onPress={toggleStatus} />,<MaterialIcons name="playlist-add" size={34} color="black" />]} />
                  :
              <Music_Tile title={item.filename} key={index} icon={[<AntDesign name="play" size={34} color="white" onPress={e=>{handlePress(item)}} />,<MaterialIcons name="playlist-add" size={34} color="white" />]} />
             )
            })
          }
        </View>    
        </ScrollView>
        {
          activeSongDetails !=="null"?
          <View>
          <Bottom_Player_Tile navigation={navigation}/>
        </View>:null
        }
        
    </LinearGradient>
  )
}

export default LocalMusic

const styles = StyleSheet.create({
    container: {
        flex: 1,
        background: 'linear-gradient(0deg, hsla(318, 79%, 51%, 1) 0%, hsla(336, 83%, 59%, 1) 25%, hsla(328, 94%, 52%, 1) 50%, hsla(321, 71%, 58%, 1) 75%, hsla(313, 95%, 60%, 1) 100%)',
        alignItems: 'center',
        // justifyContent: 'center',
      },
      head:{
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
      },
      head_cont:{
        marginTop: 30,
      },
      music:{
        width: "100%",
        height: "90%",
        display: 'flex',
        marginTop: 10,
        // alignItems:'center',
        // overflow: 'scroll',
        // backgroundColor:'red',
    },
    music_cont:{
          height: "90%",
        display: 'flex',
        alignItems:'center',
      }
})