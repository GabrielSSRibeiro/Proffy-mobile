import React from "react";

import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

import { useFonts, Archivo_400Regular, Archivo_700Bold } from "@expo-google-fonts/archivo";
import { Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import AppStack from "./src/routes/appStack";

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <>
      <StatusBar style="light" />
      <AppStack />
    </>
  );
}
// expo install expo-app-loading
