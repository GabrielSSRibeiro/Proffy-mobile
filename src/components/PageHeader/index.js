import React from "react";
import { Image, View, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import backIcon from "../../assets/images/icons/back.png";
import loogIcon from "../../assets/images/logo.png";

import styles from "./styles";

function PageHeader({ title }) {
  const { navigate } = useNavigation();
  function handleGoBack() {
    navigate("Landing");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={loogIcon} resizeMode="contain" />
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default PageHeader;
