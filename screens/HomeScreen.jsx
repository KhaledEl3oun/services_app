import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Category from '../components/Category'
import BusinessList from '../components/BusinessList'

const HomeScreen = () => {
  return (
    <View >
    <Header/>
    <Slider/>
    <Category/>
    <BusinessList/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
 
})