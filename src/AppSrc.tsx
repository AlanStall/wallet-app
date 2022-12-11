/* import React, { useState, useEffect, useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import {
  useFonts, // deixo isso aqui?
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

SplashScreen.preventAutoHideAsync();

const AppSrc: React.FC = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_300Light,
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_700Bold,
          Poppins_800ExtraBold,
          DMSans_400Regular,
          DMSerifDisplay_400Regular,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
  
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {      
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  };


  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1}}>
      <Text>Wallet App!!!!!!!</Text>
    </View>
  );
};

export default AppSrc;


 */