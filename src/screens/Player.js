import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import BottomNav from './BottomNav'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSongStatus } from '../Redux/actions';
import { Audio } from 'expo-av';

const Player = ({navigation}) => {
  const dispatch = useDispatch();
  const activestatus = useSelector(state => state.activesongstatus);
  const [time, setTime] = useState(0);
  let min,sec;
  // async function playSound() {
  //   console.log('Loading Sound');
  //   const { sound } = await Audio.Sound.createAsync(
  //      require(activeSongDetails.uri)
  //   );
  //   setSound(sound);

  //   console.log('Playing Sound');
  //   await sound.playAsync(); 
  // }

  const activeSongDetails = useSelector(state=>state.activesong);
  console.log(activeSongDetails);
if(activeSongDetails !=="null")
  {
    if(Math.floor(activeSongDetails.duration/60)<10) {
     min ="0".concat((Math.floor(activeSongDetails.duration/60)).toString());
  }
     else {
       min =(Math.floor(activeSongDetails.duration/60)).toString();

     }
     console.log(min);
     if (Math.round(activeSongDetails.duration)-Math.floor(activeSongDetails.duration/60)*60 <10) {
      sec ="0"+(Math.round(activeSongDetails.duration)-Math.floor(activeSongDetails.duration/60)*60).toString()
     }
     else {
      sec =(Math.round(activeSongDetails.duration)-Math.floor(activeSongDetails.duration/60)*60).toString();
     }
    }
    // const [playing,setPlaying] = useState(false)
    const imgpath ="https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/5/2022_5$largeimg_837079638.jpg"
  return (
    // activeSongDetails!="null" ?
    <LinearGradient colors={["hsla(0, 0%, 2%, 1)","hsla(300, 17%, 2%, 1)","hsla(0, 0%, 0%, 1)"]} style={styles.container}>
      <AnimatedCircularProgress
      size={300}
  width={5}
  fill={100}
  tintColor="#3c096c"
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
      <View style={styles.infocont}>
      <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>{activeSongDetails.filename}</Text>
      <Text style={{color:'white',fontSize:10}}>By:-Singer</Text>
      </View>
      <View style={styles.timecont}>
        <View style={styles.completedout}>
    <View style={styles.completedin}></View>
        </View>
        <View style={styles.timecount}>
            <Text style={styles.time}>00:00</Text>
            <Text style={styles.time}>{min +":"+ sec}</Text>
        </View>
      </View>
      <View style={styles.playericon}>
      <AntDesign name="doubleleft" size={24} color="#fff"  />
    {
      activestatus ?
      <Feather name="pause-circle" size={44} color="#fff" onPress={()=>{dispatch(setActiveSongStatus(!activestatus))}}/>
      :
    <Feather name="play-circle" size={44} color="#fff" onPress={()=>{dispatch(setActiveSongStatus(!activestatus))}} />
  }
      <AntDesign name="doubleright" size={24} color="#fff" />
      </View>
      <View style={[styles.bottomnav,styles.shadowProp,styles.elevation]}>
      <BottomNav active={"head"} navigation={navigation}/>
      </View>
       </LinearGradient>
      // :

      //  <View>
      //    <Text style={{color:"white",fontSize:20,fontWeight:20}}>No Music Is Playing Currently</Text>
      //  </View>
  
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
        backgroundColor: '#3c096c',
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