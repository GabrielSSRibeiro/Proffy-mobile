import React from "react";
import { Text, View, ImageBackground } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import giveClassesBgIamge from "../../assets/images/give-classes-background.png";

import styles from "./styles";

function GiveClasses() {
  const { goBack } = useNavigation();

  function HandleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={giveClassesBgIamge} resizeMode="contain" style={styles.content}>
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton onPress={HandleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
