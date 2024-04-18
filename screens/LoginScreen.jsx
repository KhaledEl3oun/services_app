import { useOAuth } from '@clerk/clerk-expo';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useWarmUpBrowser } from '../Hooks/hooks/useWarmUpBrowser';
import Colors from '../utils/Colors';
import Sizes from '../utils/Sizes';

WebBrowser.maybeCompleteAuthSession();
const LoginScreen = () => {

    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{alignItems:'center'}}> 
     <Image source={'assets/app_images/login.png'}
     style={styles.loginStyle}/>
<View style={styles.container}>

<Text
 style={{fontSize:Sizes.Xlarge,
  color:Colors.WHITE,
  paddingHorizontal:Sizes.medium,
  paddingVertical:Sizes.small,
  textAlign:'center'}}>Let's Find 
  <Text style={{fontWeight:'bold'}}> Professional Cleaning and repair
  </Text>
   Service</Text>

<Text
 style={{fontSize:Sizes.small+4,
    color:Colors.WHITE,
    paddingHorizontal:Sizes.medium,
    paddingVertical:Sizes.small,
    textAlign:'center'}}>Best App to Find services
     near you which deliver you
      a professional service</Text>

    
     <TouchableOpacity onPress={onPress}
      style={styles.Button}>
<Text  style={{fontSize:Sizes.small+4,
    color:Colors.PRAIMARY,
    paddingHorizontal:Sizes.medium,
    paddingVertical:Sizes.small,
    textAlign:'center'}}>Let's Get Start</Text>
      </TouchableOpacity>

</View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginStyle:{
        width:230,
        height:450,
        marginTop:70,
        borderWidth:4,
        borderColor:Colors.BLACK,
        borderRadius:15
    },
    container:{
       borderTopLeftRadius:30,
       borderTopRightRadius:30,
        width:'100%',
        height:'70%',
        marginTop:-30,
        backgroundColor:Colors.PRAIMARY
    },
    Button:{
       borderRadius:30,
       marginHorizontal:50,
        height:50,
       backgroundColor:Colors.WHITE,
      
    
        
    }
})