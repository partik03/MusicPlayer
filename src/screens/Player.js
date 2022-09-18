import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import BottomNav from './BottomNav'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Player = ({navigation}) => {
  const [time, setTime] = useState(0);
  
    const [playing,setPlaying] = useState(false)
    const imgpath ="https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/5/2022_5$largeimg_837079638.jpg"
  return (
    <LinearGradient colors={['hsla(320, 12%, 20%, 1)','hsla(335, 8%, 31%, 1)','hsla(325, 6%, 39%, 1)','hsla(321, 10%, 44%, 1)','hsla(316, 5%, 40%, 1)']} style={styles.container}>
      <AnimatedCircularProgress
      size={300}
  width={5}
  fill={100}
  tintColor="hsla(318, 68%, 56%, 1)"
  backgroundColor="#3d5875"
  duration={30000}
  default={0}
  rotation={0}
  value={time}
  >
  {
    (fill) => (
        <Image source={{uri:imgpath}} style={styles.img}/>
    )
  }
</AnimatedCircularProgress>
      <View style>
      </View>
      <View style={styles.infocont}>
      <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>SongName</Text>
      <Text style={{color:'white',fontSize:10}}>By:-Singer</Text>
      </View>
      <View style={styles.timecont}>
        <View style={styles.completedout}>
    <View style={styles.completedin}></View>
        </View>
        <View style={styles.timecount}>
            <Text style={styles.time}>00.00</Text>
            <Text style={styles.time}>01.00</Text>
        </View>
      </View>
      <View style={styles.playericon}>
      <AntDesign name="doubleleft" size={24} color="#fff"  />
    {
      !playing ?
      <Feather name="pause-circle" size={44} color="#fff" onPress={()=>{setPlaying(!playing)}}/>
      :
    <Feather name="play-circle" size={44} color="#fff" onPress={()=>{setPlaying(!playing)}} />
  }
      <AntDesign name="doubleright" size={24} color="#fff" />
      </View>
      <View style={[styles.bottomnav,styles.shadowProp,styles.elevation]}>
      <BottomNav active={"head"} navigation={navigation}/>
      </View>
    </LinearGradient>
  )
}

export default Player

const styles = StyleSheet.create({
    container: {
        flex: 1,
        background: 'linear-gradient(0deg, hsla(318, 79%, 51%, 1) 0%, hsla(336, 83%, 59%, 1) 25%, hsla(328, 94%, 52%, 1) 50%, hsla(321, 71%, 58%, 1) 75%, hsla(313, 95%, 60%, 1) 100%)',
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
      playericon:{
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft: 10,
        paddingRight: 10,
        width: '50%',
        justifyContent:'space-between',
        paddingTop:30,

      },
      img:{
        width: 300,
        height: 300,
        borderRadius:150,
        // border:'10px solid white',
        // borderWidth: 5,
        // borderColor: 'white',
        padding: 10
      },
      completedin:{
        width: '50%',
        backgroundColor: 'linear-gradient(90deg, hsla(318, 68%, 56%, 1) 0%, hsla(336, 83%, 59%, 1) 48%, hsla(313, 69%, 58%, 1) 98%, hsla(212, 74%, 50%, 1) 100%)',
        height: 3,
        borderRadius: 50,
      },
      completedout:{
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 50,
      },
      timecont:{
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        
      },
      timecount:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        color: 'white'
      },
      time:{
        color: 'white',
      },
      infocont:{
        display: 'flex',
        alignItems:'center',
        paddingVertical:20,        
      }
})