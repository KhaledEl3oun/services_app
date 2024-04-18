import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../utils/Colors';
import Sizes from '../utils/Sizes';
import Fonts from '../utils/Fonts';
import { FontAwesome } from '@expo/vector-icons';

const Header = () => {

    const{user, isLoading} = useUser();
  return user&&(
    <View style={styles.Container}>
     <View style={styles.profileMainContainer}>
       <View style={styles.profileContainer}>
        <Image source={{uri:user?.imageUrl}}
        style={styles.userImage}/>
        <View>
            <Text style={{color:Colors.WHITE, fontFamily:Fonts.r}}>Welcome</Text>
            <Text style={{color:Colors.WHITE, textAlign:'left',fontSize:Sizes.large-1,
        fontFamily:Fonts.regular}}>{user?.fullName}</Text>
        </View>
        </View>
        <FontAwesome name="bookmark-o" size={27} color={Colors.WHITE}/>
     </View>
    {/* input */}
     <View style={styles.searchBArContainer}>
     <TextInput style={styles.textInput} placeholder='Search'/>
     <FontAwesome style={styles.searchBtn} name="search" size={24} color={Colors.PRAIMARY} />
     </View>
    </View>
  )
}


const styles = StyleSheet.create({
    Container:{ 
      borderBottomRightRadius:30,
      borderBottomLeftRadius:30,
      backgroundColor:Colors.PRAIMARY,
      padding:20,
      paddingTop:50
     
    },
    profileContainer:{ 
     display:'flex',
     flexDirection:'row',
     gap:10
    },
    textInput:{ 
    width:'85%',
    backgroundColor:Colors.WHITE,
    borderRadius:15,
    padding:8.5,
    marginTop:15,
    fontFamily:Fonts.extraBold
    },
    searchBtn:{ 
    backgroundColor:Colors.WHITE,
    borderRadius:15,
    padding:10,
    marginTop:15
    },
    searchBArContainer:{ 
    display:'flex',
    flexDirection:'row',
    gap:7
    },
    profileMainContainer:{ 
     display:'flex',
     flexDirection:'row',
     justifyContent:'space-between'
    },
    userImage:{
        height:55,
        width:55,
        borderRadius:99
    },
    userImage:{
        height:55,
        width:55,
        borderRadius:99
    }
})
export default Header