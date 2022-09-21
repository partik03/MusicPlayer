import { Alert, StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import BottomNav from './BottomNav'
import { useState ,useEffect,} from 'react'
import * as MediaLib from 'expo-media-library';
import { setAllSongs } from '../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import Music from '../components/Music';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
const AllMusic = ({navigation}) => {
  // const mysongs =useSelector(state => state.allsongs);
  // console.log(mysongs);
  const permissionPopUp = async()=>{
    Alert.alert("Permission Required","We need your permission to access your media library",[
      {text:"Accept",onPress:()=>{MediaLib.requestPermissionsAsync();
      getPermission();
    }},
    {text:"Cancel",onPress:()=>permissionPopUp()},
  ]
    )
  }
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
  const dispatch = useDispatch();
  const getAllSongs = async()=>{
    const {assets} = await MediaLib.getAssetsAsync({
      mediaType:"audio",
    });
    // console.log(assets);
    dispatch(setAllSongs(assets));
    // console.log("efuncun",mysongs);
  }
  useEffect(() => {
    getPermission();
  },[])
  
  return (
    <LinearGradient colors={["hsla(0, 0%, 2%, 1)","hsla(300, 17%, 2%, 1)","hsla(0, 0%, 0%, 1)"]} style={styles.container}>
      <StatusBar/>
      <View style={styles.head_cont}>
        <Text style={styles.head}>Your Songs</Text> 
      </View>
      <View style={styles.body_cont}>
        <Music icon={<MaterialIcons name="library-music" size={104} color="white" onPress={()=>{navigation.navigate("LocalMusic")}}/>} title ="Your Local Music"/>
        <Music icon={<Fontisto name="music-note" size={104} color="white" onPress={()=>{navigation.navigate("OnlineMusic")}} />} title="Online Music"/>
      </View>
      <View style={[styles.bottomnav,styles.shadowProp,styles.elevation]}>
      <BottomNav active={"all"} navigation={navigation}/>
      </View>
    </LinearGradient>
  )
}

export default AllMusic

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // background: 'linear-gradient(0deg, hsla(318, 79%, 51%, 1) 0%, hsla(336, 83%, 59%, 1) 25%, hsla(328, 94%, 52%, 1) 50%, hsla(321, 71%, 58%, 1) 75%, hsla(313, 95%, 60%, 1) 100%)',
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
      head:{
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
      },
      head_cont:{
        marginTop: 50,
      },
      body_cont:{
        width: "100%",
        height: "70%",
        display: "flex",
        alignItems: "center",
        // marginTop: 20,
      }
})