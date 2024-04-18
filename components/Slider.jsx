import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from './../utils/GlobalApi'
import Heading from './Heading';

const Slider = () => {

    const [slider,SetSlider] =useState([]);
    useEffect(()=>{
getSliders();
    },[])
    const getSliders = ()=> {
       GlobalApi.getSlider().then(resp=>{
        SetSlider(resp?.sliders)
       })
    }
  return (
    <View style={{paddingHorizontal:15,paddingTop:5 }}>
     <Heading text={'Offer for you'}/>
      <FlatList
    horizontal={true}
      data={slider}
      renderItem={({item,index})=>(
        <View style={{marginRight:20}}>
            <Image source={{uri:item?.image?.url}}
            style={styles.sliderImage}/>
        </View>
      )}/>
    </View>
  )
}


const styles = StyleSheet.create({
  
    sliderImage:{
      height:150,
      width:270,
    borderRadius:20,
    objectFit:'fill',
   

    
    }
})
export default Slider