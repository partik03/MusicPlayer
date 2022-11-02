import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import BottomNav from './BottomNav'
import { LinearGradient } from 'expo-linear-gradient'

const Account = ({navigation}) => {
  return (
    <LinearGradient colors={["hsla(0, 0%, 2%, 1)","hsla(300, 17%, 2%, 1)","hsla(0, 0%, 0%, 1)"]} style={styles.container}>
      <View style={styles.container}>
        <Text style={{color:"white",fontSize:40,fontWeight:"bold"}}>Login</Text>
        <TextInput
          // value={this.state.username}
          // onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          // value={this.state.password}
          // onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          // onPress={this.onLogin.bind(this)}
        />
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
      input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 10,
        color:"white",
      },
})