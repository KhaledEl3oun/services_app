import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import GlobalApi from './../utils/GlobalApi'
import Heading from './Heading';
import Colors from '../utils/Colors';

const Category = () => {


    const [category, setCategory] = useState([])
 useEffect(()=>{
   getCategory();
},[])

    const getCategory =()=>{
GlobalApi.getCategory().then(resp=>{
    console.log('resp',resp.categories)
    setCategory(resp?.categories)
}
)
    }
  return (
    <View style={{paddingHorizontal:15, }}>

        <Heading text={'Category'}/>
      <FlatList
   // horizontal={true}
      data={category}
      numColumns={4}
      renderItem={({item,index})=>index<=3&&(
        <View style={styles.container}>
        <View style={styles.iconContainer}>
            <Image source={{uri:item?.icon?.url}}
           style={{width:27,height:27}}/>
        </View>
        <Text>{item?.name}</Text>
        </View>
      )}/>
    </View>
  )
}


const styles = StyleSheet.create({
container:{
   flex:1,
    alignItems:'center',
},
iconContainer:{
backgroundColor:Colors.LIGHTGREY,
padding:10,
borderRadius:50,
marginBottom:5
}
})
export default Category