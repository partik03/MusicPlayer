import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View } from 'react-native'
const Music = ({icon,title,navigate ,navigation}) => {
  return (
    <LinearGradient colors={["hsla(0, 2%, 9%, 1)", "hsla(0, 0%, 0%, 1)"]} style={styles.main_cont} >
      {icon}
      <Text style={{color:"white",fontSize:20,fontWeight:'600',marginTop:20}}>{title}</Text>
    </LinearGradient>
  )
}

export default Music

const styles = StyleSheet.create({
    main_cont: {
        // height: 100,
        height: "50%",
        width: "90%",
        backgroundColor:"red",
        marginTop:"5%",
        borderColor:"white",
        borderWidth:1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})