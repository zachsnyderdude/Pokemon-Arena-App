import PokeBall from "@/assets/images/Poke_Ball.webp"; // Import the PokeBall image from the assets folder
import PokemonArena from "@/assets/images/pokemon_arena.png"; // Import the PokemonArena image from the assets folder
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const HomeScreen = () => {
  const router = useRouter();
  const backgroundImage = require("@/assets/images/pokemon_arena_background.jpg");

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image source={PokemonArena} style={styles.image} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/notes")}
        >
          <ImageBackground source={PokeBall} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Get Started</Text>
          <ImageBackground source={PokeBall} style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    // backgroundColor: "lightgrey",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  image: {
    width: 1000,
    height: 200,
    resizeMode: "contain",

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,

    elevation: 10,
  },
  title: {
    // Currently not being used
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 10,
    color: "gold",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    // Currently not being used
    fontSize: 30,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,

    elevation: 10,
  },
  buttonIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",

    textShadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,

    elevation: 10,
  },
});

export default HomeScreen;
