import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Sizes from '../../utils/Sizes';
import BookingScreen from '../BookingScreen';
import HomeScreen from '../HomeScreen';
import ProfileScreen from '../ProfileScreen';


const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    
   <Tab.Navigator screenOptions={{
    headerShown:false
   }}>
    <Tab.Screen options={{
      tabBarLabel:({color}) => (
        <Text style={{color:color, fontSize:Sizes.small,marginTop:-7}}>home</Text>
      ),
      tabBarIcon:({color, font})=> (
<FontAwesome name="home" size={27} color={color} />
      )
    }}
     name='home' component={HomeScreen}/>
    <Tab.Screen
    options={{
      tabBarLabel:({color}) => (
        <Text style={{color:color, fontSize:Sizes.small,marginTop:-7}}>booking</Text>
      ),
      tabBarIcon:({color, font})=> (
<FontAwesome name="bookmark" size={27} color={color} />
      )
    }} name='booking' component={BookingScreen}/>
    <Tab.Screen
    options={{
    tabBarLabel:({color}) => (
        <Text style={{color:color, fontSize:Sizes.small,marginTop:-7}}>profile</Text>
      ),  
      tabBarIcon:({color, font})=> (
<FontAwesome name="user-circle" size={27} color={color} />
      )
    }} name='profile' component={ProfileScreen}/>
   </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})

export default TabNavigation