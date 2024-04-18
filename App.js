import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import * as SecureStore from "expo-secure-store";
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from './screens/LoginScreen.jsx';
import TabNavigation from './screens/navigator/TabNavigation';

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
export default function App() {
  const [fontsLoaded] = useFonts({
    OutfitBold: require('./assets/fonts/Outfit-Bold.ttf'),
    OutfitExtraBold: require('./assets/fonts/Outfit-ExtraBold.ttf'),
    OutfitExtraLight: require('./assets/fonts/Outfit-ExtraLight.ttf'),
    OutfitMedium: require('./assets/fonts/Outfit-Medium.ttf'),
    OutfitRegular: require('./assets/fonts/Outfit-Regular.ttf'),
    OutfitSemiBold: require('./assets/fonts/Outfit-SemiBold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
      <ClerkProvider
      tokenCache={tokenCache}
       publishableKey='pk_test_ZW1pbmVudC1jdWItODUuY2xlcmsuYWNjb3VudHMuZGV2JA'>
    <View style={styles.container}>
      <SignedIn>
     <NavigationContainer>
      <TabNavigation/>
     </NavigationContainer>
      </SignedIn>
      <SignedOut><LoginScreen/></SignedOut>
    
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});
