import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Fonts from '../utils/Fonts';

const Heading = ({text, isViewAll=true}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
      {isViewAll?<Text>View all</Text>:null}
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
    container:{
       display:'flex',
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',

        
    },
    heading:{
        fontSize:20,
        fontFamily: Fonts.medium,
        marginBottom:10,
        
    },
})