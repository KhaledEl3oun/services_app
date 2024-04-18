import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'
import Fonts from '../utils/Fonts';

const BusinessListSmall = ({business}) => {
  return (
    <View >
      <View style={styles.busniessList}>
            <Image source={{uri:business?.image?.url}}
            style={styles.image}/>
            <Text style={styles.text1}>{business?.name}</Text>
            <Text style={styles.text2}>{business?.contactPerson}</Text>
          
        </View>
    </View>
  )
}

export default BusinessListSmall

const styles = StyleSheet.create({
    busniessList:{
backgroundColor:Colors.WHITE,
padding:10,
borderRadius:10,
marginRight:20
    },
    image:{
        height:100,
        width:160,
        borderRadius:15
    },
    text1:{
        fontSize:16,
        fontFamily: Fonts.regular,
      
    },
    text2:{
        fontSize:16,
        fontFamily: Fonts.bold,
      
    },
})