import { StyleSheet, Text, View, FlatList,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import GlobalApi from '../utils/GlobalApi';
import Heading from './Heading';
import BusinessListSmall from './BusinessListSmall';

const BusinessList = () => {

    const [busniessList, setBusniessList] = useState([])
    useEffect(()=>{
      getBusniessList();
   },[])
    const getBusniessList = ()=>{
        GlobalApi.getBusniessList().then(resp=>{
            console.log('resp',resp.businessLists)
           setBusniessList(resp?.busniessLists)           
    });
    }
  return (
    <View style={{padding:15, }}>
         <Heading text={'Latest Business'}/>
         <FlatList
    horizontal={true}
      data={busniessList}
      renderItem={({item,index})=>(
       <BusinessListSmall business={item}/>
      )}/>
     
    </View>
  )
}

export default BusinessList

const styles = StyleSheet.create({
  
})