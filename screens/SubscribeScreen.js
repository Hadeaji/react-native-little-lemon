import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    const validEmail = validateEmail(email)
    if (!validEmail) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    Alert.alert(
      "Subscription Confirmed",
      `Thanks for subscribing, stay tuned!`
    );
    setEmail("");
  };

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <View style={styles.wrapper}>
        <View style={styles.headingSection}>
          <Image
            source={require("../assets/little-lemon-logo-grey.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.headingText}>
            Subscribe to our newsletter for our latest delicious recipes!
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View>
            <TextInput
              style={styles.input}
              placeholder="Type your email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType={'none'}
              onSubmitEditing={handleSubscribe}
            />
            <Pressable
              style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? '#55786d' : !email ? 'gray' : '#3a524b' },
              ]}
              disabled={!email}
              onPress={handleSubscribe}
            >
              <Text style={styles.buttonText}>Subscribe</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 24,
    // backgroundColor: 'cyan'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  logo: {
    width: 120,
    height: 200,
    // marginBottom: 80,
  },
  headingText: {
    fontSize: 20,
    // width: 300,
    marginBottom: 20,
    textAlign: "center",
    // fontWeight: "bold",
  },
  headingSection: {
    alignItems: 'center'
  }
});

export default SubscribeScreen;
