import { StyleSheet } from "react-native";

// import globalStyles from "../../styles/global";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8257E5",
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  banner: {
    width: "100%",
    resizeMode: "contain", //keep full image
  },
  title: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },
  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },
});

export default styles;
