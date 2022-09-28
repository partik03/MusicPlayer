import { Button, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomNav from './BottomNav';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AddToPlaylist = ({navigation,route}) => {
    const {song} = route.params
    const [oldPlaylist, setOldPlaylist] = useState([])
    const playlistRef = useRef("");
    const createPlaylist = () => {
        console.log(playlistRef.current.value);     
        const playlistData=[];
        if (oldPlaylist) {
         playlistData = [...oldPlaylist];
        }
        playlistData.push({name:playlistRef.current.value,id:playlistData.length +1,songs:[song]}); 
        playlistRef.current.value = "";
        AsyncStorage.setItem('playlists',JSON.stringify(playlistData));
        setOldPlaylist(playlistData);
    }
    const addToExistingPlaylist = (playlistID) => {
        const playlistData = [...oldPlaylist];
       if(playlistData[playlistID-1].songs.find(item => item.uri === song.uri)){
           alert("Song already exists in this playlist");
           playlistRef.current.value = "";
           return;
       }
        playlistData[playlistID-1].songs.push(song);
        playlistRef.current.value = "";
        AsyncStorage.setItem('playlists',JSON.stringify(playlistData));
        setOldPlaylist(playlistData);
    }
    const deletePlaylist = (playlistID) => {
        const playlistData = [...oldPlaylist];
        playlistData.splice(playlistID-1,1);
        setOldPlaylist(playlistData);
        AsyncStorage.setItem('playlists',JSON.stringify(playlistData));
    }
    const getPlaylists = () => {
        AsyncStorage.getItem('playlists')
        .then(value=>{
            console.log("Inside of get playlists",value);
            setOldPlaylist(JSON.parse(value));
        })
        .catch(e=>{
            console.log(e);
        })
        .finally(e=>{
            console.log(e);
        })
    }

    useEffect(() => {
      getPlaylists();
    }, [])
  return (
    <LinearGradient colors={["hsla(0, 0%, 2%, 1)","hsla(300, 17%, 2%, 1)","hsla(0, 0%, 0%, 1)"]} style={styles.container}>
        <View style={[styles.bottomnav,styles.shadowProp,styles.elevation]}>
                <BottomNav active={"all"} navigation={navigation}/>
        </View>
        <View style={styles.play}>
            <Text style={styles.head1}>Create Playlist</Text>
            <View style={styles.playin}>
                <TextInput style={styles.input} placeholder="Playlist Name" placeholderTextColor={"#66666e"} ref={playlistRef} onChange ={(e)=>{playlistRef.current.value =e.nativeEvent.text}} value={playlistRef.current.value}/>
                <AntDesign name="plussquare" size={50} color="white" onPress={createPlaylist}/>
            </View>
            <View style={styles.existingPlay}>
                <View style={styles.head2}>
                    <Text style={styles.head2text}>Add to Existing Playlists</Text>
                </View>
                <View style={styles.search}>
                    <View style={styles.inputView}>
                    <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor={"#66666e"} />
                    <Button title="Search"  color="#bc00dd" />
                    </View>
                  
                    <ScrollView style={styles.scroll}>
                        {  
                        oldPlaylist  ?
                            oldPlaylist.map((item,index)=>{
                                return(
                                    <TouchableOpacity key={index} onPress={()=>addToExistingPlaylist(item.id)}>
                                    <View style={styles.playlist} key={index}>
                                        <Text style={styles.playlistText}>{item.name}</Text>
                                        <Text style={styles.playlistText}>{item.songs.length} songs</Text>
                                    </View>
                                    </TouchableOpacity>
                                )
                            })
                            : null
                        }
                    </ScrollView>
                </View>
               
            </View>
        </View>

    </LinearGradient>
  )
}

export default AddToPlaylist

const styles = StyleSheet.create({
    container: {
        flex: 1,
        background: 'linear-gradient(0deg, hsla(318, 79%, 51%, 1) 0%, hsla(336, 83%, 59%, 1) 25%, hsla(328, 94%, 52%, 1) 50%, hsla(321, 71%, 58%, 1) 75%, hsla(313, 95%, 60%, 1) 100%)',
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
      play:{
        width: "100%",
        display: "flex",
        alignItems: "center",
      },
      head1:{
        color:"white",
        fontSize:30,
        fontWeight:"bold",
        marginTop:10,
      },
      playin:{
          width:"100%",
          display:"flex",
          flexDirection:"row",
          marginTop:10,
          padding:30,
          borderRadius:20,
          
        },
        input:{
            padding:10,
            backgroundColor:"#131316",
            width:"80%",
            color:"#e6e6e9",
        },
        existingPlay:{
          backgroundColor:"#ffffff",
          padding:20,
          width:"90%",
          display:"flex",
          alignItems:"center",
          borderRadius:20,
          color:"white"
      },
      head2:{
        color:"white",
        borderBottomColor:"black",
        borderBottomWidth:1,
        width:"100%",
        display:"flex",
        alignItems:"center",
        marginBottom:20,

      },
      head2text:{
        color:"black",
        fontSize:18,
        marginBottom:10,

      },
      search:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
      },
      searchInput:{
        padding:10,
        backgroundColor:"#131316",
        width:"75%",
        color:"#e6e6e9",
    },
    inputView:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
    },
    scroll:{
        width:"100%",
        marginTop:15,
        // height:250,
        maxHeight:250
        // height:"40%",

    },
    playlist:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        backgroundColor:"#cfdbd5",
        marginTop:10,
        padding:15,
        borderRadius:15,
    },
    modal:{
        width:"50%",
        height:"50%",
        marginTop:100,
        backgroundColor:"red",
    }
})