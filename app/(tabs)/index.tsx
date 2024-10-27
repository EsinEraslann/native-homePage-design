import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  Button,
  Alert,
} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const buttonAlert = () =>
    Alert.alert("Kendime jelibon alacağım.", "Sende ister misin?", [
      {
        text: "Ask me later",
      },
      { text: "OK" },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/Rectangle.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedText style={styles.titleText} type="title">
        Your Digital Art
      </ThemedText>
      <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.titleText} type="defaultSemiBold">
            Discover, collect, and sell
          </ThemedText>
      </ThemedView>
      <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity onPress={buttonAlert}>
          <ThemedText style={styles.buttonText}>Get Started</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "#7d7283",
  },
  titleText: {
    textAlign: "center",
    backgroundColor: "#7d7283",
  },
  
  buttonContainer: {
    marginTop: 16,
    backgroundColor: "black",
    alignSelf: "center",
    borderRadius: 10,
    padding: 15,
  },
  buttonText: {
    color: "white",
  },
  reactLogo: {
    height: 500,
    width: 450,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
