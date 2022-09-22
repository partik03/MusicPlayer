import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import BottomNav from './BottomNav'
import { LinearGradient } from 'expo-linear-gradient'

const Account = ({navigation}) => {
  return (
    <LinearGradient colors={["hsla(0, 0%, 2%, 1)","hsla(300, 17%, 2%, 1)","hsla(0, 0%, 0%, 1)"]} style={styles.container}>
<TextInput style={styles.input} placeholder="Email" />
<View style={[styles.bottomnav,styles.shadowProp,styles.elevation]}>
      <BottomNav active={"account"} navigation={navigation}/>
      </View>
    </LinearGradient>
  )
}

export default Account

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
      input :{
        color: 'black',
        backgroundColor:'white',
        width: "100%",
        height: 50,

      }

})