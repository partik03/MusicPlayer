import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const BottomNav = ({active,navigation}) => {
  return (
      <View style={[styles.container,styles.shadowProp,styles.elevation]}>
        {
            active==="head"
            ?
            <View style={styles.navcont}>
            <Feather name="headphones" size={30} color="black" style={styles.active}/>
            <Text style={{color:'#bc00dd'}}>Player</Text>
            </View>
            :
            <View style={styles.navcont}>
            <Feather name="headphones" size={30} color="black" style={styles.icon}
            onPress={()=>{navigation.navigate('Player')}}/>
            <Text style={{color:'#adb5bd'}}>Player</Text>
            </View>
        }
        {
            active === "all" ?
            <View style={styles.navcont}>
            <Feather name="music"  size={30} style={styles.icons} style={styles.active}/>
            <Text style={{color:'#bc00dd'}}>Music</Text>
            </View>
            :
            <View style={styles.navcont}>
            <Feather name="music" size={30} color="black" style={styles.icon}
            onPress={()=>{navigation.navigate('Allmusic')}}/>
            <Text style={{color:'#adb5bd'}}>Music</Text>
    </View>
        }
        {
            active==="allplaylist"
            ?
            <View style={styles.navcont} >
            <MaterialCommunityIcons name="playlist-music" size={30} color="black" style={styles.active} onPress={()=>{navigation.navigate('AllPlaylist')}} />
            <Text style={{color:'#bc00dd'}} >Playlist</Text>
            </View>
            :
            <View style={styles.navcont}>
            <MaterialCommunityIcons name="playlist-music" size={30} color="black" style={styles.icon} onPress={()=>{navigation.navigate('AllPlaylist')}}/>
            <Text style={{color:'#adb5bd'}}>Playlist</Text>
            </View>
        }
        {
            active==="account"
            ?
            <View style={styles.navcont}>
            <Ionicons name="person-outline" size={30} color="black" style={styles.active} onPress={()=>{navigation.navigate('Account')}}/>
            <Text style={{color:'#bc00dd'}}>Account</Text>
            </View>
            :
            <View style={styles.navcont}>
            <Ionicons name="person-outline" size={30} color="black" style={styles.icon} onPress={()=>{navigation.navigate('Account')}}/>
            <Text style={{color:'#adb5bd'}}>Account</Text>
            </View>
        }

    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        width: "100%",
        justifyContent:'space-around',
        background:'transperant',
        padding: 10,
        // marginBottom:5,
        // borderRadius:30,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    shadowProp: {
        shadowColor: 'black',
        shadowOffset: {width: -8, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      elevation: {
        elevation: 100,
        shadowColor: 'black',
      },
      active:{
        color: '#bc00dd'
      },
      icon:{
        color: '#adb5bd',
      },
      navcont:{
        display: 'flex',
        alignItems:'center',
        color: 'white',
    
      }
})