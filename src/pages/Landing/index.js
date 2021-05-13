import React from "react";
import { View, Image, Text } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import api from "../../services/api";

import landingImg from "../../assets/images/landing.png";

import styles from "./styles";

function Landing() {
  // const navigation = useNavigation();

  // useEffect(() => {
  //   api.get("Landing").then((response) => {
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>
    </View>
  );
}

export default Landing;
