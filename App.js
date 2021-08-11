import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {

  useEffect(()=>{
    setTimeout( ()=> {
      SplashScreen.hide();
    }, 10000);
  }, []);


  return (
    <View style={{margin:50}}>
      <Text>Test2</Text>
      <Image source={require('./house.jpeg')} style={{backgroundColor:'#ff0000',width:100,height:100}}/>
    </View>
  );
};

export default App;
