import * as React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("subscribe");
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require("../assets/little-lemon-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.welcomeText}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#55786d" : "#3a524b" },
        ]}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  logo: {
    width: 120,
    height: 200,
    marginBottom: 80,
  },
  welcomeText: {
    fontSize: 20,
    width: 300,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    padding: 10,
    width: "100%",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});

export default WelcomeScreen;
